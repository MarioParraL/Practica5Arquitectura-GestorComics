import mongoose from "mongoose";
import { Usuario } from "../types.ts";
import { ComicModel } from "./comic.ts";
import { ColeccionModel } from "./coleccion.ts";

const Schema = mongoose.Schema;

const UsuarioSchema = new Schema(
    {
    nombre: { type: String, required: true },
    correo: { type: String, required: true },
    coleccionID: { type: Schema.Types.ObjectId, required: true, ref: "Coleccion" },
    comicID: [
        { type: Schema.Types.ObjectId, required: true, ref: "Comic" },
    ],

});


//validate comic ID
UsuarioSchema
    .path("comicID")
    .validate(async function (comicID: mongoose.Types.ObjectId[]) {
        try{
            if (comicID.some((id) => mongoose.isValidObjectId(id))) return false;

            const comics = await ComicModel.find({ _id: { $in: comicID } });
            return comics.length === comicID.length;

        }catch(e){
            return false;
        }
        
    });


//validate coleccion ID
UsuarioSchema
    .path("coleccionID")
    .validate(async function (coleccionID: mongoose.Types.ObjectId) {
        try {
          if (!mongoose.isValidObjectId(coleccionID)) return false;
          const coleccion = await ColeccionModel.findById(coleccionID);
          if (!coleccion) return false;
          return true;
        } catch (e) {
          return false;
        }
      });


export type UsuarioModelType = mongoose.Document & 
Omit <Usuario, "id"> & {
    coleccionID: mongoose.Types.ObjectId;
    comicID: mongoose.Types.ObjectId;
};

export const UsuarioModel = mongoose.model <UsuarioModelType>(
    "Usuario",
    UsuarioSchema
);