import express from "express";
import cors from "cors";
import morgan from "morgan";
import rutasProductos from "./productos/rutas/productos.js";

const servidor = express();

servidor.use(morgan("dev"));
servidor.use(cors());
servidor.use(express.json());
servidor.use(express.urlencoded({ extended: true }));
servidor.use("/productos", rutasProductos);

servidor.get("/", (solcitud, respuesta) => {
  respuesta.json({ mensaje: "raiz ok", data: null });
});

export default servidor;
