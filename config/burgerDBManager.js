const ORM = require("./ORM");
const connection = require("./connection");

module.exports = new ORM(connection);