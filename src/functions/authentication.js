export const crearUser = (email, password) => {
  firebase.auth().createUserWithEmailAndPassword(email, password);
};
