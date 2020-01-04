export const createUser = (email, password) => (
  firebase.auth().createUserWithEmailAndPassword(email, password)
);
export const signInUser = (email, password) => (
  firebase.auth().signInWithEmailAndPassword(email, password)
);

export const signInWithGoogle = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  return firebase.auth().signInWithPopup(provider);
};

export const signInWithFacebook = () => {
  const provider = new firebase.auth.FacebookAuthProvider();
  firebase.auth().useDeviceLanguage();
  return firebase.auth().signInWithPopup(provider);
};
