const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Valor = new Schema({
    temperatura: String,
    humedad: String,
    fecha: Date
}); 
module.exports =mongoose.model('valores', Valor);



