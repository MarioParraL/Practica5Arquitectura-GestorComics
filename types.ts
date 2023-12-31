export type Usuario = {
    id: string;
    nombre: string;
    correo: string;
    coleccionComics: Coleccion[];
}

export type Comic = {
    id: string;
    titulo: string;
    descripcion: string;
    formato: string;
}

export type Coleccion = {
    id: string;
    nombre: string;
    comics: Comic[];
}