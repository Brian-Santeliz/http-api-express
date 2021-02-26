const { Router } = require("express");
const routes = Router();
const {
  crearEdificacion,
  obtenerEdificaciones,
  obtenerEdificacion,
  eliminarEdificacion,
  modificarEdificacion,
} = require("../controller/controller");

routes.post("/", crearEdificacion);
routes.get("/", obtenerEdificaciones);
routes.get("/:id", obtenerEdificacion);
routes.put("/:id", modificarEdificacion);
routes.delete("/:id", eliminarEdificacion);
module.exports = routes;
