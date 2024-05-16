// const express = require("express");
// const Joueur = require("../modele/Joueur");






// async function add(req, res, next) {
//     try {
//         const joueur = new Joueur(req.body);
//         joueur.score = 0;
//         joueur.sante = "100";
//         await joueur.save();
//         res.status(200).send("add success nom : " + joueur.pseudo);
//     } catch (err) {
//         res.status(400).send({ error: error.toString() });
//     }
// }

// async function getAll(req, res, next) {
//     try {
//         const joueur = await Joueur.find();
//         res.status(200).send(joueur);
//     } catch (err) {
//         res.status(400).send({ error: error.toString() });
//     }
// }

// async function getById(req, res, next) {
//     try {
//         const joueur = await Joueur.findById(req.params.id);
//         res.status(200).send(joueur);
//     } catch (err) {
//         res.status(400).send({ error: err.toString() });
//     }
// }

// async function deleteById(req, res, next) {
//     try {
//         const joueur = await Joueur.findByIdAndDelete(req.params.id);
//         res.status(200).send(joueur);
//     } catch (err) {
//         res.status(400).send({ error: err.toString() });
//     }
// }

// async function attaque(req, res, next) {
//     try {
//         const victim = await Joueur.findById(req.params.idVictime);
//         const attaquant = await Joueur.findById(req.params.idAttaquant);

//         victim.sante -= 20;
//         attaquant.score += 10;

//         await victim.save();
//         await attaquant.save();
//         return res.send("attaque success");
//     } catch (err) {
//         res.status(400).send({ error: err.toString() });
//     }
// }

// module.exports = { add, getAll, getById, deleteById, attaque };
