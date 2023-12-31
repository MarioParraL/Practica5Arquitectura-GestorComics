import { UsuarioModelType } from "../db/usuario.ts";
import { Usuario } from "../types.ts";

export const usuarioModelToUsuario = (usuarioModel: UsuarioModelType): Usuario => {
    return {
        id: usuarioModel._id.toString(),
        nombre: usuarioModel.nombre,
        correo: usuarioModel.correo,
        coleccionComics: usuarioModel.coleccionComics,

    };
};