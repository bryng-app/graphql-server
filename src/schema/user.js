export default `
  
  type User {
    _id: ID!
    fullname: String!
  }

  type Query {
    getUser(id: ID!): User!
    allUsers: [User!]!
  }

  type Mutation {
    createUser(username: String!, email: String!, password: String!): User!
  }

`;
