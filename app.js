const express = require("express");
const http = require("http");
const mongo = require("mongoose");
const bodyParser = require("body-parser");
var path = require("path");
// const Partie = require("./modele/Partie");


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


const server = http.createServer(app);

const io = require("socket.io")(server);
io.on("connection", (socket) => {

  // socket.on("display-stats", async (data) => {

  //   io.emit("stats-displayed", partie);
  // });



  socket.on("disconnect", () => {
    io.emit("msg", "An user is diconnected");
  });
});




server.listen(3000, () => console.log("server is run"));
