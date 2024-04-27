const express = require("express");
const db = require("./models/index");
const bodyParser = require("body-parser");

const apiRoutes = require("./routes")
// db.sequelize.sync({ alter: true });
const PORT = 3000;

const setupAndStartServer = () => {
  const app = express();
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use('/api', apiRoutes)
  app.listen(PORT, () => {
    console.log(`Server started at port ${PORT}`);
  });
};

setupAndStartServer();
