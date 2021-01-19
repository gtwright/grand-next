// import { gql } from "@apollo/client";

export const typeDefs = `
type Movie {
    title: String
    released: Int
    id: ID!
    released: Date
    genres: [Genre] @relationship(type: "IN_GENRE", direction: "OUT")
    actors: [Person] @relationship(type: "ACTED_IN", direction: "IN")

}

type Person {
  id: ID!
  born: Int
  name: String!
  acted_in: [Movie] @relationship(type: "ACTED_IN", direction: "OUT")
}

type Genre {
    name: String
    movies: [Movie] @relationship(type: "IN_GENRE", direction: "IN")
}

type User {
  id: ID!
  name: String!
  status: String!
}

type Query {
  hello: String!,
  viewer: User!
}

`;
