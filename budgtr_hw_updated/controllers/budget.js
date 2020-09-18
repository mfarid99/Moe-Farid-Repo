// get the Router class from express
// const express = require('express')
// const Router = express.Router
const {Router} = require('express')
//Create an individual router
const router = Router()
//Import our data
const budgets = require("../models/budget.js")
///////////////////////
//ROUTES
///////////////////////
// +& INDEX ROUTE
router.get('/', (req, res) => {
    // res.send('Hello from todos')
    res.render("budget/index.jsx", {budgets})
})
// +& NEW & Create Route
// New
router.get('/new', (req, res) => {
    res.render("budget/new.jsx")
})



// CREATE
router.post('/', (req, res) => {
    console.log(req.body)
    budgets.push(req.body)
    res.redirect('/budget')
})

//DELETE
router.delete('/:index', (req, res) => {
    budgets.splice(req.params.index, 1)
    res.redirect("/budget/")

})

//EDIT - Page to update your todo
router.get("/:index/edit", (req, res) => {
    res.render("budget/edit.jsx", {
        index: req.params.index,
        budget: budgets[req.params.index]
    })
})

//Update - takes info from form and updates todo
router.put("/:index", (req, res) => {
    budgets[req.params.index] = req.body;
    res.redirect("/budget/")
})

// +& SHOW ROUTE
router.get("/:index", (req, res) => {
    res.render("budget/show.jsx", {
        budget:budgets [req.params.index],
        index: req.params.index,
    })


})
///////////////////////
module.exports = router