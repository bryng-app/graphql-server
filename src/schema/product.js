export default `

  type Product {
    id: ID!
    name: String!
    image: String!
    price: Int!
    weight: String!
  }

  type Query {
    getProducts(storeName: String!, categoryName: String!): [Product!]!
  }

`;
