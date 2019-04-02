/**
 * @jest-environment node
 */

import '@babel/polyfill';
import axios from 'axios';

describe('user resolvers', () => {
  test('allUsers', async () => {
    const response = await axios.post('http://127.0.0.1:8080/graphql', {
      query: `
        query {
          allUsers {
            id
            fullname
            phoneNumber
            age
            username
            email
            password
          }
        }
      `,
    });

    const { data } = response;
    expect(data).toMatchObject({
      data: {
        allUsers: [],
      },
    });
  });

  test('createUser', async () => {
    const response = await axios.post('http://127.0.0.1:8080/graphql', {
      query: `
        mutation {
          createUser(fullname:"test test", email:"test@test.de", username:"test", phoneNumber:"03030303", password:"123456") {
            email
          }
        }
      `,
    });

    const { data } = response;
    expect(data).toMatchObject({
      data: {
        createUser: {
          email: 'test@test.de',
        },
      },
    });
  });

  let authToken = '';

  test('login', async () => {
    const response = await axios.post('http://127.0.0.1:8080/graphql', {
      query: `
        mutation {
          login(email:"test@test.de", password:"123456") {
            email
            token
          }
        }
      `,
    });

    const { data } = response;
    authToken = data.data.login.token;

    data.data.login.token = null;
    expect(data).toMatchObject({
      data: {
        login: {
          email: 'test@test.de',
          token: null,
        },
      },
    });
  });

  // Tests not working, maybe adding CORS will work...
  test('addAddress', async () => {
    const response = await axios.post('http://127.0.0.1:8080/graphql', {
      query: `
        addAddress(country:"germany", city:"berlin", street:"teststreet", zipCode:12622) {
          country
          city
          street
          zipCode
          streetExtra
        }
      `,
    },
    {
      headers: {
        authorization: `Bearer ${authToken}`,
      },
    });

    const { data } = response;
    expect(data).toMatchObject({
      data: {
        addAddress: {
          country: 'germany',
          city: 'berlin',
          street: 'teststreet',
          zipCode: 12622,
          streetExtra: null,
        },
      },
    });
  });

  test('getAddress', async () => {
    const response = await axios.post('http://127.0.0.1:8080/graphql', {
      authorization: `Bearer ${authToken}`,
      query: `
        getAddress() {
          city
          country
          street
          zipCode
          streetExtra
        }
      `,
    },
    {
      headers: {
        authorization: `Bearer ${authToken}`,
      },
    });

    const { data } = response;
    expect(data).toMatchObject({
      data: {
        addAddress: {
          country: 'germany',
          city: 'berlin',
          street: 'teststreet',
          zipCode: 12622,
          streetExtra: null,
        },
      },
    });
  });
});
