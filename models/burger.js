// Import the ORM to create functions that will interact with the database.
const dbManager = require("./config/orm.js");

var burger = {
  all: function () {
    return dbManager.all("burgers");
  },
  // The variables cols and vals are arrays.
  create: function (cols, vals) {
    return dbManager.create("burgers", cols, vals);
  },
  update: function (objColVals, condition) {
    return dbManager.update("burgers", objColVals, condition);
  },
  delete: function (condition) {
    return dbManager.delete("burgers", condition);
  }
};

// Export the database functions for the controller (burgerController.js).
module.exports = burger;
