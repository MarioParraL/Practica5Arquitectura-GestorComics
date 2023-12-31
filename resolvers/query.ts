import { GraphQLError } from "graphql";
import { UsuarioModel, UsuarioModelType } from "../db/usuario.ts";
import { ComicModel, ComicModelType } from "../db/comic.ts";


export const Query = {

    usuarios: async (): Promise<UsuarioModelType[]> => {
        const usuarios = await UsuarioModel.find().exec();
        return usuarios;
    },

    usuario: async (_: unknown, args: { id: string}): Promise<UsuarioModelType> => {
        const usuario = await UsuarioModel.findById(args.id);
        if(!usuario){
            throw new GraphQLError(`No pet found with id ${args.id}`,{
                extensions: { code: "NOT FOUND" },
            });
        }
        return usuario;
    },

    comics: async (): Promise<ComicModelType[]> => {
        const comics = await ComicModel.find().exec();
        return comics;
    },

    comic: async (_: unknown, args: { id: string}): Promise<ComicModelType> => {
        const comic = await ComicModel.findById(args.id);
        if(!comic){
            throw new GraphQLError(`No pet found with id ${args.id}`,{
                extensions: { code: "NOT FOUND" },
            });
        }
        return comic;
    },

};

