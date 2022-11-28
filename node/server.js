const express = require("express");
const routse = require("./router/allRoutes");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());


// app.use(express.static("public"));

routse(app);

app.listen(5002, () => {
  console.log("listen");
})   
   