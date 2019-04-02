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

  test('login', async () => {
    const response = await axios.post('http://127.0.0.1:8080/graphql', {
      query: `
        mutation {
          login(email:"test@test.de", password:"123456") {
            email
          }
        }
      `,
    });

    const { data } = response;
    expect(data).toMatchObject({
      data: {
        login: {
          email: 'test@test.de',
        },
      },
    });
  });
});
