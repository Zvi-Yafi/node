const routerOfIndex = require('./index')
const routerOfUsers = require('./users')
const routerOfshop = require('./shopData')
const routerOfFoods = require('./foods')
const routerOffolder = require('./folder')


const routse = (app) => {
  app.use("/folder",routerOffolder);
  app.use("/",routerOfIndex);
  app.use("/users",routerOfUsers);
  app.use("/shop",routerOfshop);
  app.use("/foods",routerOfFoods);
  
};
module.exports = routse;
        