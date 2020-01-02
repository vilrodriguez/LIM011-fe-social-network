export const createUser = (email, password) => {
  // console.log(email, password);
  firebase.auth().createUserWithEmailAndPassword(email, password).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // console.log(error.message);
    // alert(errorCode);
    // alert(errorMessage);
  });
};

export const signInUser = (email, password) => {
  firebase.auth().signInWithEmailAndPassword(email, password).then(() => {
    location = '#/home';
    // console.log('Me loguie');
  }).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // console.log(errorCode);
    // alert(errorMessage);
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
  }).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    const email = error.email;
    const credential = error.credential;
    // console.log("no te has logueado con gmail")
    // console.log(errorCode);
    // console.log(errorMessage);
    // console.log(email);
  });
};
export const signInWithFacebook = () => {
  const provider = new firebase.auth.FacebookAuthProvider();
  firebase.auth().useDeviceLanguage();
  firebase.auth().signInWithPopup(provider).then((result) => {
    var token = result.credential.accessToken;
    const user = result.user;
    // console.log("te has logeado con facebook");
  }).catch((error) => {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    const credential = error.credential;
    console.log("no has podido ingresar con facebook");
  });
};
