// The GraphQl schema

export const typeDefs = `#graphql

type Usuario {
    id: ID!
    nombre: String!
    correo: String!
    coleccionComics: [coleccion!]!
}

type Comic {
    id: ID!
    titulo: String!
    descripcion: String!
    formato: String!
}

type coleccion {
    id: ID!
    nombre: String!
    comics: [Comic!]!
}

type Query {
    usuarios: [Usuario!]!
    usuario(id: ID!): Usuario!
    comics: [Comic!]!
    comic(id: ID!): Comic!
}

type Mutation {
    addUsuario(nombre: String!, correo: String!): Usuario!
    updateUsuario(id: ID!, nombre: String, correo: String): Usuario!
    #deleteUsuario(id: ID!): Usuario!
    addComic(titulo: String!, descripcion: String!, formato: String!): Comic!
    updateComic(id: ID!, titulo: String, descripcion: String, formato: String): Comic!
   # deleteComic(id: ID!): Comic!
}

`;