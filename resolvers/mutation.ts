import { GraphQLError } from "graphql";
import { UsuarioModel, UsuarioModelType } from "../db/usuario.ts";
import { ComicModel, ComicModelType } from "../db/comic.ts";
import mongoose from "npm:mongoose@8.0.3"
import { Coleccion } from "../types.ts";
import { usuarioModelToUsuario } from "../controllers/usuarioModelToUsuario.ts";
import { Usuario } from "../types.ts";

export const Mutation = { 

    addUsuario: async (
        _: unknown,
        args: { nombre: string; correo: string; coleccionComic: Coleccion }
    ): Promise<UsuarioModelType> => {
        const usuario = {
            nombre: args.nombre,
            correo: args.correo,
            coleccionComic: args.coleccionComic,
        };
        const newUsuario = await UsuarioModel.create(usuario);
        return newUsuario;
    },

    /*deleteUsuario: async (
        _: unknown,
        args: { id: string },
      ): Promise<UsuarioModelType> => {
        const usuario = await UsuarioModel.findByIdAndDelete(args.id);

        if (!usuario) {
          throw new GraphQLError(`No user found with id ${args.id}`, {
            extensions: { code: "NOT_FOUND" },
          });
        }
        return;
      },*/

      updateUsuario: async (
        _: unknown,
        args: { id: string; nombre: string; correo: string; coleccionComics: Coleccion }
      ): Promise<UsuarioModelType> => {
        const usuario = await UsuarioModel.findByIdAndUpdate(
          args.id,
          { nombre: args.nombre, correo: args.correo, coleccionComics: args.coleccionComics },
          { new: true, runValidators: true }
        );
        if (!usuario) {
          throw new GraphQLError(`No user found with id ${args.id}`, {
            extensions: { code: "NOT_FOUND" },
          });
        }
        return usuario;
      },

      addComic: async (
        _: unknown,
        args: { titulo: string; descripcion: string; formato: string }
      ): Promise<ComicModelType> => {
        const comic = {
          titulo: args.titulo,
          descripcion: args.descripcion,
          formato: args.formato,
        };
        const newComic = await ComicModel.create(comic);
        return newComic;;
      },

     /*deleteComic: async (
        _: unknown,
        args: { id: string }
      ): Promise<ComicModelType> => {
        const comic = await ComicModel.findByIdAndDelete(args.id);
        if (!comic) {
          throw new GraphQLError(`No comic found with id ${args.id}`, {
            extensions: { code: "NOT_FOUND" },
          });
        }
        return comic;
      },*/

      updateComic: async (
        _: unknown,
        args: { id: string; nombre: string; descripcion: string, formato: string }
      ): Promise<ComicModelType> => {
        const comic = await ComicModel.findByIdAndUpdate(
          args.id,
          { nombre: args.nombre, descripcion: args.descripcion, formato: args.formato },
          { new: true, runValidators: true }
        );
        if (!comic) {
          throw new GraphQLError(`No comic found with id ${args.id}`, {
            extensions: { code: "NOT_FOUND" },
          });
        }
        return comic;
      },


};