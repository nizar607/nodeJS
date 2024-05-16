// const express = require("express");
// const Partie = require("../modele/Partie");
// const Joueur = require("../modele/Joueur");


// async function add(req, res, next) {
//     try {

//         const partie = new Partie(req.body);
//         partie.etat = "en cours";
//         partie.joueur_1 = req.params.id1;
//         partie.joueur_2 = req.params.id2;

//         await partie.save();

//         res.status(200).json(partie);
//     } catch (err) {
//         res.status(400).send({ error: error.toString() });
//     }
// }

// async function getAll(req, res, next) {
//     try {
//         const partie = await Partie.find();
//         res.status(200).send(partie);
//     }
//     catch (err) {
//         res.status(400).send({ error: error.toString() });
//     }
// }


// // async function getAll(req, res, next) {
// //     try {
// //         const joueur = await Joueur.find();
// //         res.status(200).send(joueur);
// //     } catch (err) {
// //         res.status(400).send({ error: error.toString() });
// //     }
// // }



// module.exports = { add, getAll };
