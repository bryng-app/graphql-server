export default `

  type Store {
    id: ID!
    name: String!
    logo: String!
    openingHours: String!
    location: GeoPosition!
  }

  type GeoPosition {
    latitude: Float!
    longitude: Float!
  }

  input GeoPositionInput {
    latitude: Float!
    longitude: Float!
  }

  type Query {
    allStores: [Store!]!
    getStores(name: String!): [Store!]
    getStore(id: ID!): Store
  }

  type Mutation {
    createStore(name: String!, logo: String!, openingHours: String!, location: GeoPositionInput!): Store
  }

`;
