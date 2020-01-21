export const userObserver = (userInformation) => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      userInformation(user.uid);
      // console.log('usuario logueado', user);
    } else {
      // console.log('Ha cerrado sesión');
    }
  });
};
