const express = require('express');
const router = express.Router();
const model = require('../model/valores')();

const Valor = require('../model/valores');

router.get('/', (req, res) => {
    res.render('index.ejs');
});

router.post('/add', async (req, res) => {
    const valor = new Valor(req.body);
    await valor.save();
    console.log('Recibido');
});
module.exports = router;