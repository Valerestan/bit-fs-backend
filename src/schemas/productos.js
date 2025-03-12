import mongoose from "mongoose";

const productoSchema = new mongoose.Schema(
  {
    imagen: { type: String, required: true },
    titulo: { type: String, required: true },
    precio: { type: Number, required: true },
    material: { type: String, required: true },
    categoria: {
      type: String,
      required: true,
      enum: ["home", "productos", "tendencias", "coleccion"],
      default: "productos",
    },
  },
  { timestamps: true, versionKey: false }
);

export default mongoose.model("productos", productoSchema);
