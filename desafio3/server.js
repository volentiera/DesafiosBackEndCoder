

const express = require('express');
const Contenedor = require('./index.js');

const app = express();

const PORT = 8080;

app.listen(PORT, () =>
    console.log(
        `Server started on PORT ${PORT} at ${new Date().toLocaleString()}`
    )
);

app.get('/', (req, res) => {
    res.send(
        `<h2>Desafio: Servidor con Express</h2>
        <p>Alumno: Santiago Volentiera</p>
        `)
});


app.get('/products', async(req, res) => {
    try {
        const path = new Contenedor('./products.json');
        const getProducts = await path.getAll();
        res.json(getProducts);
    }
    catch (err) {
        console.log(err);
    };
});

app.get('/randomproduct', async(req, res) => {
    try {
        const path = new Contenedor('./products.json');
        const getRandomProduct = await path.getRandom();
        res.json(getRandomProduct);
    }
    catch (err) {
        console.log(err);
    }
});