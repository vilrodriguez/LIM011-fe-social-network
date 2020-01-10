import {
  signInUser, signInWithGoogle, signInWithFacebook, newUser,
} from '../firebase-controller/userAuthentication.js';

export const loginFunction = (email, pass, mensajeError) => {
  const msjError = mensajeError;
  signInUser(email, pass)
    .then((cred) => {
      window.location.hash = '#/home';
      console.log('Me loguie');
      console.log(cred.user.uid);
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
      console.log(result);
      console.log('te has logueado con gmail', user, token);
      // console.log(result);
      newUser(result.user.uid, result.user.email, result.user.displayName, result.user.photoURL)
        .then(() => {
          console.log('se registro documento');
          window.location.hash = '#/home';
        })
        .catch(() => {
          console.log('se produjo un error');
        });
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(`Error detectado: ${errorMessage}, Tipo: ${errorCode} `);
    });
};
export const loginFacebook = () => {
  signInWithFacebook()
    .then((result) => {
      console.log('te has logueado con Facebook');
      console.log(result);
      newUser(result.user.uid, result.user.email, result.user.displayName, result.user.photoURL)
        .then(() => {
          console.log('se registró documento');
          window.location.hash = '#/home';
        })
        .catch(() => {
          console.log('se produjo un error');
        });
    })
    .catch((error) => {
      const errorCode = error.code;
      if (errorCode === 'auth/account-exists-with-different-credential') {
        console.log('es el mismo usuario');
      }
    });
};

// listening if there is a user logged in
export const userObserver = () => {
  firebase.auth().onAuthStateChanged((user) => {
    // console.log(user.uid);
    if (user) {
      console.log('usuario logueado', user);
    } else {
      console.log('Ha cerrado sesión', user);
    }
  });
};
