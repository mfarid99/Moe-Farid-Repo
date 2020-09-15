const express =require ("express");
const app = express();
const PORT = process.env.PORT || 3000;
const budgetRouter = require ("./controllers/budget");

app.use(express.static('public'));
app.set("view engine", "jsx");
app.engine("jsx", require ("express-react-views").createEngine());



app.get('/', (req, res) => {
    res.send('testing, testing')
})

app.use("/budget", budgetRouter)

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
})
