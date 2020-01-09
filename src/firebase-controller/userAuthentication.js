export const createUser = (email, password) => (
  firebase.auth().createUserWithEmailAndPassword(email, password)
);

export const signInUser = (email, password) => (
  firebase.auth().signInWithEmailAndPassword(email, password)
);

// observa sí hay un usuario activo
export const observer = () => {
  firebase.auth().onAuthStateChanged();
};

export const signInWithGoogle = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  return firebase.auth().signInWithPopup(provider);
};

export const signInWithFacebook = () => {
  const provider = new firebase.auth.FacebookAuthProvider();
  firebase.auth().useDeviceLanguage();
  return firebase.auth().signInWithPopup(provider);
};
export const signOut = () => {
  firebase.auth().signOut().then(() => {
  // Sign-out successful.
    console.log('Has cerrado sesion');
  }).catch((error) => {
  // An error happened.
    console.log(error, 'Estarás aquí para la eternidad');
  });
};

export const newUser = (id, email, name, photo) => (
  firebase.firestore().collection('users').doc(id).set({
    ID: id,
    Email: email,
    Name: name,
    Foto: photo,
  })
);


// comprobar si usuario está activo
export const userCurrent = () => (
  firebase.auth().currentUser
);
