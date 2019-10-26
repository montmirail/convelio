import { Greeter } from '../index';

test('My Greeter', () => {
  const name = 'Pablo';
  expect(Greeter(name)).toBe(`Hello ${name}`);
});
