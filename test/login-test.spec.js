import {
  // eslint-disable-next-line max-len
  createUser, newUser, signInUser, signOut, signInWithGoogle, signInWithFacebook, userCurrent,
} from '../src/model/user-authentication.js';

const firebasemock = require('firebase-mock');

const mockauth = new firebasemock.MockFirebase();
const mockfirestore = new firebasemock.MockFirestore();
mockfirestore.autoFlush();
mockauth.autoFlush();

global.firebase = firebasemock.MockFirebaseSdk(
  path => (path ? mockfirestore.child(path) : null),
  () => mockauth,
);

// registrar usuario
describe('Crear usuario', () => {
  it('debería logear un usuario', () => {
    newUser('prueba-de-red@gmail.com, abc123').then((user) => {
      // eslint-disable-next-line jest/valid-expect
      expect(user.id, user.email, user.name, user.photo).toBe('user.uid, user.email, name, user.photoURL');
    });
  });
});

// new usuario
describe('Registro de nuevo usuario', () => {
  it('debería registrar un usuario nuevo', () => {
    createUser('prueba-de-red@gmail.com, abc123').then((user) => {
      expect(user.email).toBe('prueba-de-red');
    });
  });
});

// iniciar sesion
describe('Iniciar Sesion', () => {
  it('Deberia iniciar sesion', () => signInUser('prueba-de-red@gmail.com', 'abc123')
    .then((user) => {
      expect(user.email).toBe('prueba-de-red@gmail.com');
    }));
});

// Cerrar sesion
describe('Cerrar sesion', () => {
  it('Deberia cerrar sesion', () => {
    signOut().then(() => {
      expect(firebase.auth().currentUser).toBe(null);
    });
  });
});

// Ingresar con gmail
describe('Iniciar sesion con gmail', () => {
  it('Deberia iniciar sesion con gmail ', () => {
    signInWithGoogle().then(() => {
      const result = (firebase.auth().currentUser);
      expect(result.isAnonymous).toBe(false);
    });
  });
});


// ingresar con facebook
describe('Iniciar sesion con facebook', () => {
  it('Deberia iniciar sesion con facebook', () => {
    signInWithFacebook().then(() => {
      const result = (firebase.auth().currentUser);
      expect(result.isAnonymous).toBe(false);
    });
  });
});

// Usuario actual
describe('Usuario actual', () => {
  it('Deberia retornar el Usuario actual', (done) => {
    signInUser('prueba-de-red@gmail.com', 'abc123')
      .then(() => {
        const user = userCurrent();
        expect(user.email).toEqual('prueba-de-red@gmail.com');
        done();
      });
  });
});
