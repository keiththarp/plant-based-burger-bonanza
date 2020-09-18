const express = require("express");
const router = express.Router();
// Import the model (cat.js) to use its database functions.
const burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", async function (req, res) {
  const hbsObject = { cats: await cat.all() };
  console.log(hbsObject);
  res.render("index", hbsObject);
});

router.post("/api/cats", async function (req, res) {
  try {
    const result = await cat.create(
      [
        "name", "sleepy"
      ],
      [
        req.body.name, req.body.sleepy
      ]
    );
    // Send back the ID of the new quote
    res.json({ id: result.insertId });;
  }
  catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

router.put("/api/cats/:id", async function (req, res) {
  const condition = "id = " + req.params.id;

  console.log("condition", condition);

  try {
    const result = await cat.update({ sleepy: req.body.sleepy }, condition);
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  }
  catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

router.delete("/api/cats/:id", async function (req, res) {
  const condition = "id = " + req.params.id;

  try {
    const result = await cat.delete(condition)
    if (result.affectedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  }
  catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

// Export routes for server.js to use.
module.exports = router;
