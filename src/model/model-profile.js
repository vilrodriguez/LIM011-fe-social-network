export const updateProfile = (nuevoUserNombre, id) => {
  firebase.firestore().collection('users').doc(id).update({
    Name: nuevoUserNombre,
  });
};
