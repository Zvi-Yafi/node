const express = require("express");

const joi = require("joi");

const router = express.Router();

let users = [
  { id: 1, name: "moshe" },
  { id: 2, name: "david" },
  { id: 3, name: "levi" },
  { id: 4, name: "israel" }
];
router
  .route("/")
  .get((req, res) => {
    res.status(200);
    res.send(users);
  })
  .post((req, res) => {
    const schema = joi.object({
      name: joi.string().min(3).max(30).required(),
      id: joi.number().required().min(1).max(20),
    });
    const user = {
      id: users.length + 1,
      name: req.body.name,
    };
    const result = schema.validate(user);
    result.error
      ? res.status(404).send(result.error.details[0].message)
      : users.push(user);
    res.send(users);
  });
router
  .route("/:userId")
  .get((req, res) => {
    res.status(200);
    const find = users.find((u) => u.id === parseInt(req.params.userId));
    !find ? res.status(404).send("erorr") : res.send(find);
  })

  .put((req, res) => {
    const find = users.find((u) => u.id === parseInt(req.params.userId));
    if (!find) {
      res.status(404).send("erorr");
    }
    const schema = joi.object({
      name: joi.string().min(3).max(30).required(),
    });
    const result = schema.validate(req.body);
    result.error
      ? res.status(404).send(result.error.details[0].message)
      : (users[find.id - 1].name = req.body.name);
    res.send(users);
  })
  .delete((req, res) => {
    const find = users.find((u) => u.id === parseInt(req.params.userId));
    !find
      ? res.status(404).send("erorr")
      : (users = users.filter((u) => u.id !== parseInt(req.params.userId)));
    res.send(users);
  });

module.exports = router;
