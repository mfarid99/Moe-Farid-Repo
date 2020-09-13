const express = require('express')
const app = express()


app.get('/', (req, res)=> {
    res.send("hello moe")
})

app.get('/cheese/:variable', (req, res)=> {
    res.send(`${req.params.variable}  ${req.query.cheese}`)
})


app.listen(3003, () => {
    console.log('wuzup')
})