const express = require("express");
const cat = express();

const PORT = process.env.PORT || 3000;



// uses the static method to render the static front end files 
// static files = basic html + css  + vanilla js
cat.use(express.static('client'));

// uses the expres urlencoded method to tranlaste all data
cat.use(express.urlencoded({ extended: true }));

// uses the json() - JavaScript Object Notation =formatter
cat.use(express.json());

// require the  handlebars package
const thehandlebars =require("express-handlebars");

// middleware that will allow forthe use of the handlebar files 

// using the express engine method to inform the system that handlebars will be used - also infomring the system
// to use the main file as it's basic layout 
cat.engine("handlebars", thehandlebars({defaultLayout: "main"}));

// allows for you to set the iew once the engine is started 
cat.set("view engine", "handlerbars");

// POST /login gets urlencoded bodies
// cat.get('/', urlencodedParser, function (req, res) {
//     res.sendFile(path.join(__dirname + "../public/index.html"));
// })
cat.listen(PORT, ()=> {
    console.log(PORT)
});
// POST /login gets urlencoded bodies

