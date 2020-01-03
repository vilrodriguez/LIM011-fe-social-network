export const registerWithEmail = (email, password) => {
  return firebase.auth().createUserWithEmailAndPassword(email, pass);
};
export const signInUser = (email, password) => {
  return firebase.auth().signInWithEmailAndPassword(email, pass);
};
export const signInWithGoogle = () => {
  return firebase.auth().signInWithPopup(new firebase.auth.GoogleAuthProvider());
};
export const signInWithFacebook = () => {
  return firebase.auth().signInWithPopup(new firebase.auth.FacebookAuthProvider());
};
export const cerrarSesion = () => {
  return firebase.auth().signOut();
};
export const userCurrent = () => {
  return firebase.auth().currentUser;
};

// creando una función que agregue datos de registro en la colección users
export const createUser = (id, name, email, foto) => {
  firebase.firestore().collection('users').doc(id).set({
    ID: id,
    Nombre: name,
    Email: email,
    Foto: foto,
  });
};