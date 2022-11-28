const express = require("express");
const fs = require("fs");
const router = express.Router();


router.get("/showfile", (req, res) => {
  fs.readdir("./public/folder", (err, files) => {
      if (err) console.log(err);
      res.json(files);
    });
  });

router.get("/:file/info", (req, res) => {
  const url1 = req.params.file;
  fs.stat(`./public/folder/${url1}`, (err, stat) => {
    if (err) console.log(err);
    else {
      res.send(stat);
    }
  });
});

router.get("/:file/show", (req, res) => {
  const url= req.params.file;
  fs.readFile(`./public/folder/${url}`, (err, data) => {
    if (err) console.log(err);
    res.send(data.toString());
  });
});
module.exports = router;
