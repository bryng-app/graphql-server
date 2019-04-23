export default `

  type LoginToken {
    id: ID!
    token: String!
    user: User!
  }

  type Query {
    getLoginToken: LoginToken
  }

  type Mutation {
    addLoginToken: LoginToken
  }

`;
