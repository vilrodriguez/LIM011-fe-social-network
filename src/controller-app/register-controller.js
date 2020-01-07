import { createUser, newUser } from '../firebase-controller/userAuthentication.js';

export const registerFunction = (email, pass, msjError) => {
  const mensajeError = msjError;
  createUser(email, pass)
    .then((result) => {
      console.log(result);
      newUser(result.user.uid, result.user.email)
        .then((res) => {
          console.log('se cumple promesa', res);
          window.location.hash = '#/';
        })
        .catch((err) => {
          console.log('Se detecto un error', err);
        });
      console.log('Me registre');
      alert('Te has registrado con exito. Puedes logearte');
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
