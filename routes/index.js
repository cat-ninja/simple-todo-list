var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", (req, res, next) => {
  res.redirect("/todo");
});

router.get("/todo", (req, res, next) => {
  res.render("todo");
});

router.get("/items/", (req, res, next) => {
  res.send([{ value: "this is my todo item" }]);
});

module.exports = router;
