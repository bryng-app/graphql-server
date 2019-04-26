export default `

  type Location {
    id: ID!
    location: GeoPosition!
    user: User!
  }

  type Query {
    getLatestLocation: Location
    getAllLocations: [Location]
  }

  type Mutation {
    addLocation(location: GeoPositionInput!): Location!
  }

`;
