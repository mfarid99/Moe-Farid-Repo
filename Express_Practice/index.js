const express = require('express')
const app = express()

app.use(express.static('public'));

app.get('/', (req, res)=> {
    res.render('index.ejs', {hello: 'Hello Halambuha'});
});

app.get('/cheese/:variable', (req, res)=> {
    res.send(`${req.params.variable}  ${req.query.cheese}`)
})


app.listen(3003, () => {
    console.log('wuzup')
})