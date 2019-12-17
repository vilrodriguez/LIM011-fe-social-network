export const signInUser = (email, password) => {
  firebase.auth().signInWithEmailAndPassword(email, password).catch((error) => {
    const errorCode = error.code;
    // eslint-disable-next-line no-console
    console.log(errorCode);
    const errorMessage = error.message;
    // eslint-disable-next-line no-alert
    alert(errorMessage);
  });
};
