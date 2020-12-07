const orm = require("../config/orm");

// Created calls for orm functions
// Constructor
//Think of me as a obect array - an array of many methods 

const burgerFunction ={
  all: function(cb){
    orm.all("burgers", function(res){
      cb(res)
    })
  },
  create: function(name, cb){
    orm.create("burgers", ["burger_name", "devoured"],
    [name, false], 
    cb)
    },
  update: function(id, cb){
    const condition = "id=" + id;
    orm.update("burgers",{
    devoured: true
    },
    condition, cb) 
  },
};

module.exports = burgerFunction;