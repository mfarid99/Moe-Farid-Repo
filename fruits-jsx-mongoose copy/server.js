const express = require ('express')
const app = express()
const mongoose = require ('mongoose')

const PORT = process.env.PORT || 3003

//Mongo 

const mongoURI = 
"mongodb+srv://mfarid:metallica@sei.mfupj.azure.mongodb.net/fruits-moe?retryWrites=true&w=majority";

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true});

mongoose.connection.once('open', ()=> {
    console.log('connected to mongo');
});

const Fruit = require('./models/fruits.js');


app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine())

//Middleware:
//bodyparser = allows us to use form data:
app.use(express.urlencoded({extended: true}));

//routes/controller actions:

//Index goes here

app.get('/fruits', (req, res) => {
    // res.send("Index") for testing 
Fruit.find({}, (error, allFruits) => {
    res.render ('Index', {fruits: allFruits

});
});
});

//New
app.get('/fruits/new', (req, res) => {
    res.render('New')
})

//Destroy goes here

//Update goes here

//Create goes here

app.post('/fruits/', (req, res) => {
    if (req.body.readyToEat === 'on'){
        req.body.readyToEat = true;
    } else {
        req.body.readyToEat = false;
    }
    Fruit.create(req.body, (error, createdFruit) => {
        res.send(createdFruit);
    })
})

//Edit goes here

//Show goes here

app.listen(PORT, ()=> {
    console.log('webserver is running')
})