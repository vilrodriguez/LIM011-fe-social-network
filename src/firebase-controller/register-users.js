export const createUser = (email, password) => {
  // eslint-disable-next-line no-console
  console.log('gdgdhd', email, password);
  firebase.auth().createUserWithEmailAndPassword(email, password).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // eslint-disable-next-line no-console
    console.log(error.message);
    // eslint-disable-next-line no-alert
    alert(errorCode);
    // eslint-disable-next-line no-alert
    alert(errorMessage);
  });
};
