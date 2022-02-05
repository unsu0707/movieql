import { GraphQLServer } from "graphql-yoga";
import resolvers from "./graphql/resolvers";

let server = new GraphQLServer({
  typeDefs: "graphql/schema.graphql",
  resolvers,
});

server.start(() => console.log("Graphql server running!"));
