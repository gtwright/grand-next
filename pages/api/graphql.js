import { ApolloServer } from "apollo-server-micro";
import { neoSchema } from "apollo/schema";
import { driver } from "neo4j/db";

export const neo4jDriverInstance = driver();

const apolloServer = new ApolloServer({
  schema: neoSchema.schema,
  playground: true,
  introspection: true,
  context: ({ req }) => ({ req, driver: neo4jDriverInstance }),
});

export const config = {
  api: {
    bodyParser: false,
  },
};

export default apolloServer.createHandler({
  path: "/api/graphql",
});
