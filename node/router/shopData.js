const express = require("express");
const prods_ar = require("../shop");
const router = express.Router();

router.get("/", (req, res) => {
  res.json(prods_ar);
});
router.get("/food", (req, res) => {
  const cat = prods_ar.filter((item) => {
    return item.cat == "food";
  });
  res.json(cat);
});
router.get("/clothing", (req, res) => {
  const cat = prods_ar.filter((item) => {
    return item.cat == "clothing";
  });
  res.send(cat);
});

module.exports = router;
