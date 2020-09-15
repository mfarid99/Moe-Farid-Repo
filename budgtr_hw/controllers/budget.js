const {Router} = require('express')
const router = Router()
const info = require ('../models/budget.js')

router.get('/', (req, res)=> {
    // res.send('Hello from budget')
    res.render("budget/index.jsx", {info})
})

module.exports = router