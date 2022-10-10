import { makeExecutableSchema } from "@graphql-tools/schema";
import { trelloResolver } from "./resolver";
import { trelloTypeDefs } from "./typedefs";

export const schema = makeExecutableSchema({
    typeDefs:[
        trelloTypeDefs
    ],
    resolvers :[
        trelloResolver
    ]
});