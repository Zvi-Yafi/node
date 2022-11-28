const express = require("express");
const fs = require("fs");
const router = express.Router();
router.get("/", (req, res) => {
  fs.readFile("./public/test.html", (err, data) => {
    if (err) {
      console.log(err)
    } else {
      res.send(data.toString());
    }
  });
});
module.exports = router;