export const createUser = (email, password) => {
  // eslint-disable-next-line no-console
  console.log(email, password);
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
export const userCurrent = () => firebase.auth().currentUser;

export const signInUser = (email, password) => {
  firebase.auth().signInWithEmailAndPassword(email, password).then(() => { console.log('Me loguie'); }).catch((error) => {
    const errorCode = error.code;
    // eslint-disable-next-line no-console
    console.log(errorCode);
    const errorMessage = error.message;
    // eslint-disable-next-line no-alert
    alert(errorMessage);
  });
};

export const signInWithGoogle = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider).then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const token = result.credential.accessToken;
    console.log(token);

    // The signed-in user info.
    const user = result.user;
    console.log(user);
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    console.log(errorCode);
    const errorMessage = error.message;
    console.log(errorMessage);
    // The email of the user's account used.
    const email = error.email;
    console.log(email);
    // The firebase.auth.AuthCredential type that was used.
    const credential = error.credential;
    console.log(credential);
    // ...
  });
};
export const signInWithFacebook = () =>{
  const provider = new firebase.auth.FacebookAuthProvider();
  console.log(provider);
  firebase.auth().useDeviceLanguage();
  firebase.auth().signInWithPopup(provider).then(function(result) {
    // This gives you a Facebook Access Token. You can use it to access the Facebook API.
    var token = result.credential.accessToken;
    // The signed-in user info.
    var user = result.user;
    // ...
  }).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
  });
}
