const express = require("express");
const router = express.Router();

const Clicked = require("../models/Clicked");

router.post("/add-clicked", (req, res) => {
  const newClicked = new Clicked({
    title: req.body.title
  });

  newClicked.save().then(clicked => res.json(clicked));
});
router.get("/", (req, res) => {
  Clicked.find()
    .then(clicked => res.json(clicked))
    .catch(err => console.log(err));
});

module.exports = router;
