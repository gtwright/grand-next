// import { gql } from "@apollo/client";

export const typeDefs = `
type Movie {
    title: String
    year: Int
    imdbRating: Float
    genres: [Genre] @relationship(type: "IN_GENRE", direction: "OUT")
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
