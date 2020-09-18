// Import the ORM to create functions that will interact with the database.
const db = require("../config/orm.js");

const burger = {
  all: function () {
    return db.selectAll("veganBurger_db");
  },
  // The variables cols and vals are arrays.
  create: function (cols, vals) {
    return db.inserOne("veganBurger_db", cols, vals);
  },
  update: function (objColVals, condition) {
    return db.updateOne("veganBurger_db", objColVals, condition);
  },
  delete: function (condition) {
    return db.deleteOne("veganBurger_db", condition);
  }
};

// Export the database functions for the controller (routes.js).
module.exports = burger;
