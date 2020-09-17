const express = require ("express");
const app = express();
const PORT = process.env.PORT || 3003; 
const PokeRouter = require("./controllers/pokemon.js")
//bring in method override
const methodOverride = require('method-override')

app.use(express.static('public'));
app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());
app.use(express.urlencoded({extended: true}))
//override certain post to delete/put
app.use(methodOverride("_method"))

app.get("/", (req, res) => {
    res.send("this is only a test");
})
app.use("/pokemon", PokeRouter);

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);

})

