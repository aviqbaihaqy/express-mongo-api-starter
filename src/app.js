const express 		= require('express');
const bodyParser 	= require('body-parser');
const dbConfig      = require('./config/database.config');
const mongoose      = require('mongoose');
mongoose.connect(dbConfig.url, {
    // useMongoClient: true
    useNewUrlParser: true
});

mongoose.connection.on('error', function(){
    console.log('tidak bisa konnek');
    process.exit();
});

mongoose.connection.once('open', function(){
    console.log('sukses konek');
});

var app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


app.get('/', function(req, res){
    res.json({'message': 'welcome'});
});

require('./routes/product.routes')(app);

module.exports = app;