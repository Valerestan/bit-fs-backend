const express = require("express");
global.app = express();
const bodyparser = require("body-parser");
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));
const config = require("./config.js").config;

require("./rutas.js");

mongoose
  .connect("")
  .then((res) => {
    console.log("Conectado a la base de datos");
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(config.puerto, function () {
  console.log("Servidor funcioanndo por el puerto" + config.puerto);
});
