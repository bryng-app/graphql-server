/**
 * @jest-environment node
 */

import '@babel/polyfill';
import axios from 'axios';
import Store from '../models/Store';

describe('store resolvers', () => {
  test('allStores', async () => {
    await Store.create({
      name: 'Netto',
      openingHours: '08-20',
      location: {
        latitude: 123.3434343,
        longitude: 93.334343433,
      },
    });
    await Store.create({
      name: 'Lidl',
      openingHours: '08-20',
      location: {
        latitude: 43.95959,
        longitude: 19.2939493,
      },
    });
    await Store.create({
      name: 'Netto',
      openingHours: '08-20',
      location: {
        latitude: 43.123654,
        longitude: 12.3219495,
      },
    });

    const response = await axios.post('http://127.0.0.1:8080/graphql', {
      query: `
        query {
          allStores {
            name
            openingHours
            location {
              latitude
              longitude
            }
          }
        }
      `,
    });

    const { data } = response;
    expect(data).toEqual(expect.objectContaining({
      data: {
        allStores: [
          {
            location: {
              latitude: expect.any(Number),
              longitude: expect.any(Number),
            },
            name: expect.any(String),
            openingHours: expect.any(String),
          },
          {
            location: {
              latitude: expect.any(Number),
              longitude: expect.any(Number),
            },
            name: expect.any(String),
            openingHours: expect.any(String),
          },
          {
            location: {
              latitude: expect.any(Number),
              longitude: expect.any(Number),
            },
            name: expect.any(String),
            openingHours: expect.any(String),
          },
        ],
      },
    }));
  });
});
