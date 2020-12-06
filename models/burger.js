const orm = require("../config/orm");

// Created calls for orm functions
// Constructor
//Think of me as a obect array - an array of many methods 

const dataHolder ={
  all: function(cb){
    orm.all("burgers", function(res){
      cb(res)
    })
  },
  create: function(name, cb){

  },
  update: function(id, cb) {

  }
}

module.exports = dataHolder;