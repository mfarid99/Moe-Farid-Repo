// get the Router class from express
// const express = require('express')
// const Router = express.Router
const {Router} = require('express')
//Create an individual router
const router = Router()
//Import our data
const Pokemon = require("../models/pokemon.js")
///////////////////////
//ROUTES
///////////////////////
// +& INDEX ROUTE
router.get('/', (req, res) => {
    // res.send('Hello from todos')
    res.render("pokemon/index.jsx", {Pokemon})
})
// +& NEW & Create Route
// New
router.get('/new', (req, res) => {
    res.render("pokemon/new.jsx")
})
// CREATE
router.post('/', (req, res) => {
    console.log(req.body)
    Pokemon.push(req.body)
    res.redirect('/pokemon')
})

//DELETE
router.delete('/:index', (req, res) => {
    Pokemon.splice(req.params.index, 1)
    res.redirect("/pokemon/")

})

//EDIT - Page to update your todo
router.get("/:index/edit", (req, res) => {
    res.render("pokemon/edit.jsx", {
        index: req.params.index,
        pokemon: Pokemon [req.params.index]
    })
})

//Update - takes info from form and updates todo
router.put("/:index", (req, res) => {
    Pokemon[req.params.index] = req.body;
    res.redirect("/pokemon/")
})

// +& SHOW ROUTE
router.get("/:index", (req, res) => {
    res.render("pokemon/show.jsx", {
        pokemon:Pokemon[req.params.index],
        index: req.params.index
    })
})
///////////////////////
module.exports = router