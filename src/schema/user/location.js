export default `

  type Location {
    id: ID!
    geoPosition: GeoPosition!
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
