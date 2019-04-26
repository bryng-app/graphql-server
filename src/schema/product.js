export default `

  type Product {
    id: ID!
    name: String!
    image: String!
    price: Double!
    weight: String!
    storeName: String!
    categoryName: String!
  }

  type Query {
    getProducts(storeName: String!, categoryName: String!): [Product!]!
  }

`;
