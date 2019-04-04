export default `
  
  type User {
    id: ID!
    fullname: String!
    email: String!
    password: String!
    username: String!
    phoneNumber: String
    age: Int
  }

  type Query {
    getUser(id: ID!): User
    allUsers: [User!]
  }

  type Mutation {
    createUser(fullname: String!, email: String!, password: String!, username: String!, phoneNumber: String, age: Int): Auth
    login(email: String!, password: String!): Auth
  }

`;
