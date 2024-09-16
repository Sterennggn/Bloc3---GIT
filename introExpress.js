import { createRequire } from "module"; //Nécessaire pour import ES6 versus require (CommonJS)
const require = createRequire(import.meta.url); //Nécessaire pour import ES6 versus require 'CommonJS)
const express = require('express')
const app = express()
const path = require('path');
import {listeEleves} from "./sources/eleves.mjs";

app.get('/test', (requete, resultat) => {
    resultat.send('Bonjour aux SIO SLAM')
})

app.get('/accueil', (requete, resultat) => {
    resultat.send('Vous êtes arrivés sur la page d accueil du site')
})

app.get('/bienvenue', (requete, resultat) => {
    resultat.sendFile(path.join(__dirname + '/site.html'));
})

app.get('/panorama', (requete, resultat) => {
    resultat.sendFile(path.join(__dirname + '/plan_du_site.html'));
})

app.get('/etudiant/:idEleve', (requete, resultat) => {
    const nomEtudiant = requete.params.idEleve
    resultat.send('Bonjour mr ou mme ' + nomEtudiant)
})

app.get('/validation', (requete, resultat) => {
    const parametre = requete.query.nombre
    const Nombre = Number(parametre)

    if(Number.isInteger(Nombre)){
        reponse.send('Le nombre choisi est ' + Nombre)
    }
    else{
        reponse.send(parametre + " Le nombre choisi n'est pas un nombre")
    }
})

app.get('/api/leseleves', (requete, resultat) => {
    resultat.json(listeEleves)
})

app.listen(3000)