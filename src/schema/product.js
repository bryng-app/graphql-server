export default `

  type Product {
    id: ID!
    name: String!
    image: String!
    price: Float!
    weight: String!
    storeName: String!
    categoryName: String!
  }

  type Query {
    getProduct(id: String!): Product
  }

`;
