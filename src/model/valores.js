const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Valor = new Schema({
    temperatura: String,
    humedad: String,
    fecha: Date
}); 
module.exports =mongoose.model('valores', Valor);


/*const { model, Mongoose } = require('mongoose');

module.exports = function(){
    var db = require('../libs/db-connection')();
    var Schema = require('mongoose').Schema;

    var Valor =  Schema({
        temperatura: String,
        humedad: String,
        fecha: Date
    });
    
    // Compile model from schema
    return db.model('valores', Valor );
}*/



