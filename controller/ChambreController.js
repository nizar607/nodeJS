const express = require("express");
const Chambre = require("../modele/Chambre");

// numero: String,
// hotel: String,
// reservee: String,
// nom_client: String,

async function add(req, res, next) {
    try {
        const idHotel = req.params.id;
        const chambre = new Chambre(req.body);
        chambre.nom_client = "";
        chambre.reservee = "false";
        chambre.hotel = idHotel;
        const response = await chambre.save();

        res.status(200).json(response);
    } catch (err) {
        res.status(400).send({ error: error.toString() });
    }
}



async function getAll(req, res, next) {

    try {
        const chambres = await Chambre.find();
        res.status(200).json(chambres);
    } catch (err) {
        res.status(400).send({ error: error.toString() });
    }

}


async function reserve(req, res, next) {
    
    try {
        const idChambre = req.params.id;
        const nomClient = req.params.nom;

        console.log("idChambre ",idChambre);
        console.log("nomClient ",nomClient);

        const chambre = await Chambre.findById(idChambre);

        chambre.nom_client = nomClient;
        chambre.reservee = "true";

        const response = await chambre.save();

        res.status(200).json(response);
    } catch (err) {
        res.status(400).send({ error: error.toString() });
    }
}

// async function getById(req, res, next) {

//     try {
//         const hotel = await Hotel.findById(req.params.id);
//         res.status(200).send(hotel);
//     } catch (err) {
//         res.status(400).send({ error: error.toString() });
//     }

// }

// async function deleteById(req, res, next) {

//     try {
//         const hotel = await Hotel.findByIdAndDelete(req.params.id);
//         res.status(200).send(hotel);
//     } catch (err) {
//         res.status(400).send({ error: error.toString() });
//     }

// }


module.exports = { add, getAll ,reserve};