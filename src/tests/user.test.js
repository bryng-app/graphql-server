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
            token
          }
        }
      `,
    });

    const { data } = response;
    expect(data).toMatchObject({
      data: {
        createUser: {
          token: expect.any(String),
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
            token
          }
        }
      `,
    });

    const { data } = response;
    authToken = data.data.login.token;

    expect(data).toMatchObject({
      data: {
        login: {
          token: expect.any(String),
        },
      },
    });
  });

  test('addAddress', async () => {
    const response = await axios.post('http://127.0.0.1:8080/graphql', {
      query: `
        mutation {
          addAddress(country:"germany", city:"berlin", street:"teststreet", zipCode:12622) {
            country
            city
            street
            zipCode
            streetExtra
          }
        }
      `,
    },
    {
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${authToken}`,
      },
    });

    const { data } = response;
    expect(data).toMatchObject({
      data: {
        addAddress: {
          country: expect.any(String),
          city: expect.any(String),
          street: expect.any(String),
          zipCode: expect.any(Number),
          streetExtra: null,
        },
      },
    });
  });

  test('getAddress', async () => {
    const response = await axios.post('http://127.0.0.1:8080/graphql', {
      query: `
        query {
          getAddress {
            city
            country
            street
            zipCode
            streetExtra
          }
        }
      `,
    },
    {
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${authToken}`,
      },
    });

    const { data } = response;
    expect(data).toMatchObject({
      data: {
        getAddress: {
          country: expect.any(String),
          city: expect.any(String),
          street: expect.any(String),
          zipCode: expect.any(Number),
          streetExtra: null,
        },
      },
    });
  });
});
