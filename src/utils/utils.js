const { edificaciones } = require("../db.json");
exports.eliminarDelArreglo = (index = 0, req, res) => {
  edificaciones.splice(index, 1);
  res.status(200).json({
    estado: "Edificación eliminada correctamente",
    totalEdificaciones: edificaciones.length,
    edificaciones,
  });
};

exports.actualizarDelArreglo = (edificacion = {}, req, res) => {
  edificacion.tipoEdificacion = req.body.tipoEdificacion;
  edificacion.ubicacion = req.body.ubicacion;
  edificacion.habitaciones = req.body.habitaciones;
  edificacion.materiales = req.body.materiales;
  edificacion.tamaño = req.body.tamaño;
  edificacion.apartamentos = req.body.apartamentos;
  res.status(201).json({ estado: "Edificación modificada", edificacion });
};
