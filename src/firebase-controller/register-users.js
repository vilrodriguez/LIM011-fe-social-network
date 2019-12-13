export const createUser = (email, password) => {
  console.log('gdgdhd', email, password);
  firebase.auth().createUserWithEmailAndPassword(email, password).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(error.message);
    alert(errorCode);
    alert(errorMessage);
  });
};
