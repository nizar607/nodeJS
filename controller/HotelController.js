const express = require("express");
const Hotel = require("../modele/Hotel");

// nom: String,
// adresse: String,
// nbChambre: String,
// email: String,

async function add(req, res, next) {
    try {
        const hotel = new Hotel(req.body);
        hotel.nbChambre = 0;
        const response = await hotel.save();
        res.status(200).json(response);
    } catch (err) {
        res.status(400).send({ error: error.toString() });
    }
}

async function getAll(req, res, next) {

    try {
        const hotel = await Hotel.find();
        res.status(200).send(hotel);
    } catch (err) {
        res.status(400).send({ error: error.toString() });
    }

}
async function getById(req, res, next) {

    try {
        const hotel = await Hotel.findById(req.params.id);
        res.status(200).send(hotel);
    } catch (err) {
        res.status(400).send({ error: error.toString() });
    }

}

async function deleteById(req, res, next) {

    try {
        const hotel = await Hotel.findByIdAndDelete(req.params.id);
        res.status(200).send(hotel);
    } catch (err) {
        res.status(400).send({ error: error.toString() });
    }

}


module.exports = { add, getAll, getById, deleteById };