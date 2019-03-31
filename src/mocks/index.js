/*
import faker from 'faker';

import User from '../models/User';

const USER_TOTAL = 10;

export default async () => {
  try {
    await User.deleteMany();

    await Array.from({ length: USER_TOTAL }).forEach(() => User.create({
      fullname: faker.name.findName(),
      email: faker.internet.email(),
      username: faker.lorem.slug(1),
      phoneNumber: faker.phone.phoneNumber(),
      age: 99,
    }));
  } catch (error) {
    throw error;
  }
};
*/
