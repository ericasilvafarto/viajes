import { Schema, model } from "mongoose";

const schemaPaquete = new Schema({
    id: { type: Number, unique: true },
    destino: String,
    hotel: String,
    noches: Number,
    dias: { type: Number, default: 0 },
    precio: Number 
});
schemaPaquete.index({ noches: 1 }, { unique: false });
schemaPaquete.index({ dias: 1 }, { unique: false });
schemaPaquete.index({ precio: 1 }, { unique: false });

export const modeloPaquete = model("Paquete", schemaPaquete);
