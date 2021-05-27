const express = require('express');
const log = require('morgan');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const mongoose = require('mongoose');

const indexRoutes = require('./routes/index.js');

//escuchar servidor
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view egine', 'ejs');


//middleware
app.use(log('dev'));
app.use(bodyParser.urlencoded({extended: false}));

//conecta a la bd

mongoose.connect('mongodb+srv://sergio_test:MBjVXjiqRYKeqjcV@clustersergio.ponuf.mongodb.net/iot?retryWrites=true&w=majority')
.then(db => console.log('BD se conectó')).catch(err=>console.log(err));
        

//rutas 
app.use('/', indexRoutes);


app.listen(app.get('port'), () =>{
    console.log('servidor funcionando en el puerto', app.get('port'))
});