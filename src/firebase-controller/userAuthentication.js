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
  firebase.auth().signInWithEmailAndPassword(email, password).then(() => {
    location = '#/home';
    console.log('Me loguie');
  }).catch((error) => {
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

    // The signed-in user info.
    const user = result.user;
    console.log("te has logueado con gmail");
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
    console.log("no te has logueado con gmail")
    // ...
  });
};
export const signInWithFacebook = () => {
  const provider = new firebase.auth.FacebookAuthProvider();
  firebase.auth().useDeviceLanguage();
  firebase.auth().signInWithPopup(provider).then((result) => {
    // This gives you a Facebook Access Token. You can use it to access the Facebook API.
    const token = result.credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    console.log("te has logeado con facebook");
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    const credential = error.credential;
    console.log("no has podido ingresar con facebook");
    // ...
  });
};
