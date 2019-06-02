### GraphQL Queries
```grahpql
User {
  id: ID!
  fullname: String!
  email: String!
  password: String!
  username: String!
  phoneNumber: String
  age: Int
  avatar: String
}

Me {
  id: ID!
  fullname: String!
  email: String!
  password: String!
  username: String!
  phoneNumber: String
  age: Int
}

Location {
  id: ID!
  location: GeoPosition!
  user: User!
}

Address {
  id: ID!
  country: String!
  city: String!
  street: String!
  zipCode: Int!
  streetExtra: String
  user: User!
}

Auth {
  token: String!
}

LoginToken {
  id: ID!
  token: String!
  user: User!
}

Category {
  id: ID!
  name: String!
}

Product {
  id: ID!
  name: String!
  image: String!
  price: Float!
  weight: String!
  storeName: String!
  categoryName: String!
}

Store {
  id: ID!
  name: String!
  logo: String!
  openingHours: String!
  location: GeoPosition!
}
```
