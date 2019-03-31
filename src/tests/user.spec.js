/**
 * @jest-environment node
 */

import '@babel/polyfill';
import axios from 'axios';

import User from '../models/User';

if (process.env.NODE_ENV === 'test') {
  User.deleteMany();
}

describe('user resolvers', () => {
  test('allUsers', async () => {
    const response = await axios.post('http://127.0.0.1:8080/graphql', {
      query: `
        query {
          allUsers {
            id
            fullname
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
});
