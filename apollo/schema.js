import { typeDefs } from "./type-defs";
import { resolvers } from "./resolvers";
import { makeAugmentedSchema } from "@neo4j/graphql";

export const neoSchema = makeAugmentedSchema({ typeDefs, resolvers });
