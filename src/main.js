import servidor from "./server.js";
import morgan from "morgan";

const puerto = 3000;

servidor.use(morgan("dev"))
servidor.listen(puerto);
console.log("servidor escucha por el puerto:" + puerto);
