const express = require ('express')
const app = express()
const mongoose = require ('mongoose')
const methodOverride = require("method-override")

const PORT = process.env.PORT || 3003

//Mongo 

const mongoURI = 
"mongodb+srv://mfarid:metallica@sei.mfupj.azure.mongodb.net/Lamborgini-moe?retryWrites=true&w=majority"



mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true});

mongoose.connection.once('open', ()=> {
    console.log('connected to mongo');
});

const Lambo = require("./models/lambos.js");
const { Router } = require('express')

app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());

// Middleware:
// Bodyparser - allows us to use form data:
app.use(express.urlencoded({ extended: true }));
//use methodOverride.  We'll be adding a query parameter to our delete form named _method
app.use(methodOverride("_method"));

// Routes/Controller actions:

// INDEX
app.get("/lambos", (req, res) => {
  Lambo.find({}, (error, allLambos) => {
    res.render("Index", { lambos: allLambos });
  });
});

// NEW
app.get("/lambos/new", (req, res) => {
  res.render("New");
});

// DESTROY
app.delete("/lambos/:id", (req, res) => {
  Lambo.findByIdAndRemove(req.params.id, (err, data) => {
    res.redirect("/lambos");
  });
});

// UPDATE
app.put("/lambos/:id", (req, res) => {
  if (req.body.readyToBuy === "on") {
    req.body.readyToBuy = true;
  } else {
    req.body.readyToBuy = false;
  }

  Lambo.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true },
    (err, updatedModel) => {
      res.redirect("/lambos");
    }
    
  );
});

//BUY



// CREATE
app.post("/lambos/", (req, res) => {
  if (req.body.readyToBuy === "on") {
    req.body.readyToBuy = true;
  } else {
    req.body.readyToBuy = false;
  }
  Lambo.create(req.body, (error, lambo) => {
    res.redirect("/lambos");
  });
});

// EDIT
app.get("/lambos/:id/edit", (req, res) => {
  Lambo.findById(req.params.id, (err, foundLambo) => {
    res.render("edit.jsx", { lambo: foundLambo });
  });
});

//BUY
app.put("/lambos/:id/buy", async (req, res) => {
  try{
  
    await Lambo.findByIdAndUpdate(req.params.id, {$inc: { Stock:  -1 }}) 
  res.redirect("back")
  } catch (error) {
    res.send(error.message)
  }
  });


// SHOW
 app.get("/:index", (req, res) => {
   res.render("lambos/show.jsx", {
     lambo: lambos [req.params.index],
     index: req.params.index,
   })
 })
// Goes here

app.listen(PORT, () => {
  console.log("Web server is running");
});
