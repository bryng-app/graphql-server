export default `

  type Category {
    id: ID!
    name: String!
  }

  type Query {
    allCategories: [Category!]!
    getCategory(name: String!): Category
    getProducts(name: String!): [Product!]!
  }

`;
