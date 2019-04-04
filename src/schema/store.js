export default `

  type Store {
    id: ID!
    name: String!
    location: GeoPosition!
  }

  type GeoPosition {
    latitude: Float!
    longitude: Float!
  }

  type Query {
    allStores: [Store!]!
    getStores(name: String!): [Store!]!
    getStore(id: ID!): Store!
  }

`;
