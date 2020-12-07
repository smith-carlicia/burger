// this file is your new route file
// call the express library
const express = require("express");
// const burger = require("./models/burger");

// call the router method from theexpress library
const router = express.Router();
const burger = require ("../models/burger");

// root route - that will render index.handlebar
router.get("/", function(req, res){
    res.redirect("/burgers")
});

router.get("/burgers", function (req, res) {
   burger.all(function(burgerData){
       res.render("index", {burger_data: burgerData})
   })
});

router.post("/burgers/create", function (req, res){
    burger.create(req.body.burger_name, function(result){
        console.log(result)
        res.redirect("/")
    })
});

router.put("/burgers/:id", function(req, res){
    burger.update(req.params.id, function(result){
        console.log(result)
        res.sendStatus(200)
    })
})
module.exports = router;

// the controlls the routes 