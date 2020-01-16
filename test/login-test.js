import { createUser } from '../src/model/user-authentication.js';


describe('createUser', () => {
  // eslint-disable-next-line arrow-body-style
  it('debería logear un usuario', () => {
    // eslint-disable-next-line no-unused-vars
    return createUser('prueba-de-red@gmail.com, abc123').then((user) => {
      expect(user.email).toBe('prueba-de-red');
    });
  });
});
