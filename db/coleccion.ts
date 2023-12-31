import mongoose from "npm:mongoose@8.0.3"
import { Coleccion } from "../types.ts";

const Schema = mongoose.Schema;

const ColeccionSchema = new Schema(
    {
        nombre: { type: String, required: true },
        comicID: [
            { type: Schema.Types.ObjectId, required: true, ref: "Comic" },
        ], 

    });

export type ColeccionModelType = mongoose.Document & Omit<Coleccion, "id">;

export const ColeccionModel = mongoose.model<ColeccionModelType>(
    "Coleccion",
    ColeccionSchema
);