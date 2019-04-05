export default `

  type Category {
    id: ID!
    name: String!
    image: String!
  }

  type Query {
    allCategories: [Category!]!
    getCategory(name: String!): Category
  }

`;
