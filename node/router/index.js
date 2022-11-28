const express = require("express");
const path = require("path");
const fs = require("fs");
const router = express.Router();

router.get("/", (req, res) => {
  fs.readdir("./public", (err, files) => {
    if (err) console.log(err);
    res.json(files);
  });
});

router.get("/:fileName/show", (req, res) => {
  const url = req.params.fileName;
  console.log(url);
  fs.readFile(`./public/${url}`, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      res.send(data.toString());
    }
  });
});
router.get("/:fileName/info", (req, res) => {
  const url = req.params.fileName;
  console.log(url);
  fs.stat(`./public/${url}`, (err, stat) => {
    if (err) console.log(err);
    else {
      res.send(stat);
    }
  });
});
router.put("/:fileName/rename", (req, res) => {
  const url = req.params.fileName;
  fs.rename(`./public/${url}`, `./public/${req.body.name}`, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      res.send("secses");
    }
  });
});

router.post("/:fileName/copy", (req, res) => {
  const url = req.params.fileName;
  const name = req.body.name
  fs.copyFile(`./public/${url}`,`./public/${name}`, (err) => {
    if (err) console.log("Error Found:", err);
  });
});


router.delete("/:fileName/delete", (req, res) => {
  const url = req.params.fileName;
  fs.unlink(`./public/${url}`, (err) => {
    if (err) console.log("Error Found:", err);
  });
});

module.exports = router;
