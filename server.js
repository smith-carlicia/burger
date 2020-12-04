const express = require("express");
const cat = express();

const PORT = process.env.PORT || 3000;

// const bodyParser = require('body-parser');
// cat.use(express.static('public'));

// create application/json parser
// const jsonParser = bodyParser.json()
// create application/x-www-form-urlencoded parser
// const urlencodedParser = bodyParser.urlencoded({ extended: true })
// POST /login gets urlencoded bodies
// cat.get('/', urlencodedParser, function (req, res) {
//     res.sendFile(path.join(__dirname + "../public/index.html"));
// })
cat.listen(PORT, ()=> {
    console.log(PORT)
});
// POST /login gets urlencoded bodies

