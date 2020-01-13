export const userObserver = () => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        console.log('usuario logueado', user);
      } else {
        console.log('Ha cerrado sesión');
      }
    });
  };