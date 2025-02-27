import express from "express";

const ruta = express.Router();

ruta.post("/", (solicitud, respuesta) => {
  respuesta.send("crear");
});
ruta.get("/", (solicitud, respuesta) => {
  respuesta.send("leer todos");
});
ruta.get("/: id", (solicitud, respuesta) => {
  respuesta.send("leer uno");
});
ruta.put("/:id", (solicitud, respuesta) => {
  respuesta.send("actualizar");
});
ruta.delete("/:id", (solicitud, respuesta) => {
  respuesta.send("eliminar");
});

export default ruta;
