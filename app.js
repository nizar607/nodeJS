const express = require("express");
const http = require("http");
const mongo = require("mongoose");
const bodyParser = require("body-parser");
var path = require("path");
const Hotel = require("./modele/Hotel");
const Chambre = require("./modele/Chambre");


const mongoconnection = require("./config/mongoconnection.json");

mongo
  .connect(mongoconnection.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DataBase Connected");
  })
  .catch((err) => {
    console.log(err);
  });

var app = express();
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "twig");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/Exam', function (req, res) {
  res.render('Exam.twig', { title: 'Hey', message: 'Hello there!' });
});


// const UserRouter = require("./routes/user");
// app.use("/user", UserRouter);

const HotelRouter = require("./routes/Hotel");
app.use("/hotel", HotelRouter);

const ChambreRouter = require("./routes/Chambre");
app.use("/chambre", ChambreRouter);

const server = http.createServer(app);

const io = require("socket.io")(server);
io.on("connection", (socket) => {

  // socket.on("display-stats", async (data) => {

  //   io.emit("stats-displayed", partie);
  // });

  socket.on("add-reservation", async (data) => {
    console.log(data);
    const chambre = await Chambre.findById(data.idChambre);

    chambre.nom_client = data.userName;
    chambre.reservee = "true";

    const response = await chambre.save();
    io.emit("reservation-added", response);
  });

  
  socket.on("display-chambre", async (data) => {
    
    console.log("data.idHotel ", data.idHotel);
    const chambres = await Chambre.find( { hotel: data.idHotel, reservee: "false" } );

    io.emit("chambre-displayed", chambres);
  });



  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
});




server.listen(3000, () => console.log("server is run"));
