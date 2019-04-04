export default `

  type Address {
    id: ID!
    country: String!
    city: String!
    street: String!
    zipCode: Int!
    streetExtra: String
    user: User!
  }

  type Query {
    getAddress: Address
  }

  type Mutation {
    addAddress(country: String!, city: String!, street: String!, zipCode: Int!, streetExtra: String): Address
  }

`;
