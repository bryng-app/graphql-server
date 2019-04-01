export default `

  type Address {
    id: ID!
    country: String!
    city: String!
    street: String!
    zipCode: Int!
    streetExtra: String
  }

  type Mutation {
    addAddress(country: String!, city: String!, street: String!, zipCode: Int!, streetExtra: String): Address!
  }

`;
