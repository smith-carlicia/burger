// this file is your new route file
// call the express library
const express = require("express");
// const burger = require("./models/burger");

// call the router method from theexpress library
const router = express.Router();
const burger = require ("../models/burger");

// create the root route - that will render index.handlebar
router.get("/", function (req, res) {
   burger.all(function(burgerData){
       res.render("index", {burger_data: burgerData})
   })
});

module.exports = router;

// the controlls the routes 