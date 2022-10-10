const { ApolloServer } = require("apollo-server");
import { schema } from './api/schema';
import config from "./config";
require("dotenv").config();

const server = new ApolloServer({
  schema,
  context: async ({ req }) => req,
  stopGracePeriodMillis : 0
});
// The `listen` method launches a web server.
server.listen({ port: config.PORT }).then(({ url }) => {
  console.log(`:rocket:  Server ready at ${url}`);
});
