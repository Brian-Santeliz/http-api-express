const express = require("express");
const morgan = require("morgan");
const routes = require("./router/router");
const app = express();

const port = 5000;

app.use(express.json());
app.use(morgan("dev"));
app.use("/edificaciones", routes);

app.listen(port, () => console.log(`Servido en el puerto ${port}`));
