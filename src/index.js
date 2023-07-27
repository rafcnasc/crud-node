//constante para requerer o modulo express
const express = require('express')
const routes = require('./routes/index')

//criar uma constante para utilizar o modulo express
const app = express()

app.use(express.json())

app.use(routes.createCar)
app.use(routes.listCars)

//porta para escutar quando for iniciando o servidor
app.listen(3000, () => {
    console.log('Server Init')
})
