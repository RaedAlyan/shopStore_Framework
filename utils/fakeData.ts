import { faker } from '@faker-js/faker';

export interface FakeUser {
  firstName: string;
  lastName: string;
  fullName: string;
  email: string;
  password: string;
}

export class FakeData {
  static email(firstName = faker.person.firstName(), lastName = faker.person.lastName()): string {
    return faker.internet.email({
      firstName,
      lastName: `${lastName}${faker.string.alphanumeric(6)}`,
      provider: 'example.com',
    }).toLowerCase();
  }

  static password(): string {
    return faker.internet.password({ length: 12, prefix: 'Aa1!' });
  }

  static user(): FakeUser {
    const firstName = faker.person.firstName();
    const lastName = faker.person.lastName();
    return {
      firstName,
      lastName,
      fullName: `${firstName} ${lastName}`,
      email: FakeData.email(firstName, lastName),
      password: FakeData.password(),
    };
  }
}
