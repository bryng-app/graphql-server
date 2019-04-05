/**
 * @jest-environment node
 */

import '@babel/polyfill';
import axios from 'axios';
import Category from '../models/Category';

describe('category resolvers', () => {
  test('allCategories', async () => {
    await Category.create({
      name: 'Kategorie 1',
      image: 'base64encodedImage',
    });
    await Category.create({
      name: 'Kategorie 2',
      image: 'base64encodedImage',
    });
    await Category.create({
      name: 'Kategorie 3',
      image: 'base64encodedImage',
    });

    const response = await axios.post('http://127.0.0.1:8080/graphql', {
      query: `
        query {
          allCategories {
            name
            image
          }
        }
      `,
    });

    const { data } = response;
    expect(data).toEqual(expect.objectContaining({
      data: {
        allCategories: [
          {
            name: expect.any(String),
            image: expect.any(String),
          },
          {
            name: expect.any(String),
            image: expect.any(String),
          },
          {
            name: expect.any(String),
            image: expect.any(String),
          },
        ],
      },
    }));
  });
});
