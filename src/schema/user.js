export default `
  
  type User {
    id: ID!
    fullname: String!
    email: String!
    password: String!
    username: String!
    phoneNumber: String
    age: Int
    avatar: String
  }

  type Query {
    getUser(id: ID!): User
    allUsers: [User!]
  }

  type Mutation {
    createUser(fullname: String!, email: String!, password: String!, username: String!, phoneNumber: String, age: Int, avatar: String): Auth
    login(email: String!, password: String!): Auth
    getJWTToken(loginToken: String!): Auth
  }

`;
