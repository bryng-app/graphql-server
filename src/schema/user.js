export default `
  
  type User {
    id: ID!
    fullname: String!
    email: String!
    username: String!
    phoneNumber: String!
    age: Int
  }

  type Query {
    getUser(id: ID!): User!
    allUsers(id: ID): [User!]!
  }

  type Mutation {
    createUser(username: String!, email: String!, password: String!): User!
  }

`;
