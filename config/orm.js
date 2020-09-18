const connection = require("./connection");

class ORM {
  connection;

  constructor(connection) {
    this.connection = connection;
  }

  query = (queryString, vals) => {
    return new Promise((resolve, reject) => {
      this.connection.query(queryString, vals, function (err, result) {
        if (err) {
          reject(err);
        }
        resolve(result);
      });
    })
  };
  // Helper function for SQL syntax.
  // Let's say we want to pass 3 values into the mySQL query.
  // In order to write the query, we need 3 question marks.
  // The above helper function loops through and creates an array of question marks - ["?", "?", "?"] - and turns it into a string.
  // ["?", "?", "?"].toString() => "?,?,?";

  selectAll() {
    return this.query("SELECT * FROM burgers");
  };

  insertOne(burgerName) {
    return this.query(`INSERT INTO burgers (burger_name, devoured) VALUES ('${burgerName}', false),`);
  }

  updateOne(id) {
    return this.query(`UPDATE burgers SET devoured = 1 WHERE id = ${id}`)
  }
  deleteOne() {
    return this.query(`DELETE FROM burgers WHERE id = ${id}`)
  }

};


// Export the promise orm object.
module.exports = new ORM(connection);
