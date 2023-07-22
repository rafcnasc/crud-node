const express = require('express')

const database = require('../database')

const route = express()

route.post('/car', (req, res) => {
    //obtem os daados do body da requisição
    const car = req.body
    //adiciona o carro no database
    database.push(car)
    //retorna o status com (201) 
    return res.status(201).json(car)
})

module.exports = route
