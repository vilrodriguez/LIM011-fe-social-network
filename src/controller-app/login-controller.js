import { signInUser, signInWithGoogle, signInWithFacebook } from '../firebase-controller/userAuthentication.js';

export const loginFunction = (email, pass, mensajeError) => {
  const msjError = mensajeError;
  signInUser(email, pass)
    .then(() => {
      window.location.hash = '#/home';
      console.log('Me loguie');
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log('Detectando un error: ', error, errorMessage);
      switch (errorCode) {
        case 'auth/user-not-found':
          msjError.innerHTML = '*Usuario no registrado';
          break;
        case 'auth/wrong-password':
          msjError.innerHTML = '*La contraseña es incorrecta';
          break;
        case 'auth/invalid-email':
          msjError.innerHTML = '*El correo ingresado es icorrecto, verifica e intenta de nuevo';
          break;
        default:
          msjError.innerHTML = 'Ha ocurrido un error';
      }
    });
};

export const loginWithGmail = () => {
  signInWithGoogle()
    .then((result) => {
      const user = result.user;
      const token = result.credential.accessToken;
      console.log('te has logueado con gmail', user, token);
      window.location.hash = '#/home';
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(`Error detectado: ${errorMessage}, Tipo: ${errorCode} `);
    });
};
export const loginFacebook = () => {
  signInWithFacebook()
    .then(() => {
      console.log('te has logueado con Facebook');
      window.location.hash = '#/home';
    })
    .catch((error) => {
      const errorCode = error.code;
      if (errorCode === 'auth/account-exists-with-different-credential') {
        console.log('es el mismo usuario');
      }
    });
};
