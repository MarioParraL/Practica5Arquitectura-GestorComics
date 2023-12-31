import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { Query } from "./resolvers/query.ts";
import { Mutation } from "./resolvers/mutation.ts";
import { GraphQLError } from "graphql";
import mongoose from "mongoose";
import { typeDefs } from "./gql/schema.ts";
import { load } from "https://deno.land/std@0.204.0/dotenv/mod.ts";


const env = await load();
const MONGO_URL=env.MONGO_URL||Deno.env.get("MONGO_URL");

if (!MONGO_URL) {
  console.log("No mongo URL found");
  Deno.exit(1);
}
// Connect to MongoDB
await mongoose.connect(MONGO_URL);

console.info("🚀 Connected to MongoDB");

const server = new ApolloServer({
    typeDefs,
    resolvers: {
        Query,
        Mutation,
    },
});

const { url } = await startStandaloneServer(server, {
  listen:{
    port:3000,
  },
});

console.info(`🚀 Server ready at ${url}`);