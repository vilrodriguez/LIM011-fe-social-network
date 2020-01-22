export const createUser = (email, password) => (
  firebase.auth().createUserWithEmailAndPassword(email, password)
);

export const newUser = (id, email, name, photo) => (
  firebase.firestore().collection('users').doc(id).set({
    ID: id,
    Email: email,
    Name: name,
    Photo: photo,
    Menu: '',
    Adress: '',
  })
);

export const userCurrent = () => firebase.auth().currentUser;

export const signInUser = (email, password) => (
  firebase.auth().signInWithEmailAndPassword(email, password)
);

export const signOut = () => (
  firebase.auth().signOut()
);

export const signInWithGoogle = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  return firebase.auth().signInWithPopup(provider);
};
export const signInWithFacebook = () => {
  const provider = new firebase.auth.FacebookAuthProvider();
  // firebase.auth().useDeviceLanguage();
  return firebase.auth().signInWithPopup(provider);
};
