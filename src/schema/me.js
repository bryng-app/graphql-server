export default `

  type Me {
    id: ID!
    fullname: String!
    email: String!
    password: String!
    username: String!
    phoneNumber: String
    age: Int
  }

  type Query {
    me: Me
  }

`;
