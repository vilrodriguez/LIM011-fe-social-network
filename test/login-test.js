import { createUser } from '../src/model/user-authentication.js';


describe('createUser', () => {
  it('debería logear un usuario', () => {
    return createUser('prueba-de-red@gmail.com, abc123').then((result) => {
      expect(result.user.email).toBe('prueba-de-red');
    });
  });
});
