const express = require ('express')
const app = express()

const PORT = process.env.PORT || 3000

app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine())

app.get('/fruits/new', (req, res) => {
    res.redirect('New')
})

app.listen(PORT, ()=> {
    console.log('webserver is running')
})