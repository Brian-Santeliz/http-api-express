const { v4 } = require("uuid");
const { edificaciones } = require("../db.json");
const { eliminarDelArreglo, actualizarDelArreglo } = require("../utils/utils");
exports.crearEdificacion = (req, res) => {
  if (!Object.keys(req.body).length) {
    return res
      .status(404)
      .json("Debes enviar los datos para crear las edificaciones");
  }
  const nuevaEdificacion = {
    id: v4(),
    ...req.body,
  };
  edificaciones.push(nuevaEdificacion);
  res.status(201).json({
    estado: "Edificación creada",
    totalEdificaciones: edificaciones.length,
    edificaciones,
  });
};
exports.obtenerEdificaciones = (req, res) => {
  if (!edificaciones.length) {
    return res.status(204).json("No hay edificaciones");
  }
  res
    .status(200)
    .json({ totalEdificaciones: edificaciones.length, edificaciones });
};

exports.obtenerEdificacion = (req, res) => {
  let { id } = req.params;
  const edificacion = edificaciones.find(
    (edificacion) => edificacion.id === id
  );
  if (edificacion) {
    return res.status(200).json(edificacion);
  }
  res.status(404).json("Parece que esta edificación no existe. Verifica el ID");
};

exports.eliminarEdificacion = (req, res) => {
  const { id } = req.params;
  edificaciones.map((edificacion, i) => {
    edificacion.id === id
      ? eliminarDelArreglo(i, res, res)
      : res
          .status(400)
          .json("No se puedo eliminar esta edificación. Verifica el ID");
  });
};
exports.modificarEdificacion = (req, res) => {
  const { id } = req.params;
  edificaciones.map((edificacion, i) => {
    edificacion.id === id
      ? actualizarDelArreglo(edificacion, req, res)
      : res
          .status(400)
          .json("No se puedo actualizar esta edificación. Verifica el ID");
  });
};
