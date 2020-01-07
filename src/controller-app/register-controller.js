import { createUser } from '../firebase-controller/userAuthentication.js';

export const registerFunction = (email, pass, msjError) => {
  const mensajeError = msjError;
  createUser(email, pass)
    .then((credential) => {
      let userId=credential.user.uid;
      /* let userName= */
      console.log(credential.user.uid);
      console.log(credential.user.email);
      console.log(credential.user.displayName);
      console.log(credential.user);
      /*displayName: null
      email: "mkmk@mkmk.com"
      ​phoneNumber: null
      ​photoURL: null
      ​providerId: "password"
      uid: "mkmk@mkmk.com"*/

      window.location.hash = '#/';
      console.log('Me registre');
      alert('Te has registrado con exito. Puedes logearte.');
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.code;
      console.log('Detectando un error: ', error, errorMessage);

      switch (errorCode) {
        case 'auth/email-already-in-use':
          mensajeError.innerHTML = '*La dirección de correo ya existe';
          break;
        case 'auth/weak-password':
          mensajeError.innerHTML = '* La constraseña debe tener al menos 6 caracteres.';
          break;
        case 'auth/invalid-email':
          mensajeError.innerHTML = '* El formato del correo ingresado no es váido';
          break;
        default:
          mensajeError.innerHTML = 'Se ha producido un error';
      }
    });
};
