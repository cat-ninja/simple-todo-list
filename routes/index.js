var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", (req, res, next) => {
  res.redirect("/todo");
});

router.get("/todo", (req, res, next) => {
  res.render("todo", {
    items: [
      { name: "this is my todo item", date: "1 day ago" },
      { name: "this is my second todo item", date: "2 days ago" },
    ],
  });
});

router.get("/items/", (req, res, next) => {
  res.send([
    { value: "this is my todo item" },
    { value: "this is my second todo item" },
  ]);
});

module.exports = router;
