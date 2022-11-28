const express = require("express");

const router = express.Router();

router.get("/", async (req, res) => {
  const data = await FoodModel.find({});
  res.json(data);
});

 


module.exports = router;
