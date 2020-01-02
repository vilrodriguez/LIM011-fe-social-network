export const createUser = (email, password) => {
/* eslint no-console: ["error", { allow: ["warn", "error"] }] */
  // custom console
  console.log(email, password);
  firebase.auth().createUserWithEmailAndPassword(email, password).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    /* eslint no-console: ["error", { allow: ["warn", "error"] }] */
    // custom console
    console.log(error.message);

    alert(errorCode);

    alert(errorMessage);
  });
};

export const signInUser = (email, password) => {
  firebase.auth().signInWithEmailAndPassword(email, password).then(() => {
    location = '#/home';
    console.log('Me loguie');
  }).catch((error) => {
    const errorCode = error.code;
    /* eslint no-console: ["error", { allow: ["warn", "error"] }] */
    // custom console
    console.log(errorCode);
    const errorMessage = error.message;
    /* eslint no-alert: "error" */
    alert(errorMessage);
  });
};
export const signInWithGoogle = () => {
<<<<<<< HEAD
console.log('Para logearse con Google');

};
// export const signInWithFacebook = () => {
//   const provider = new firebase.auth.FacebookAuthProvider();
//   return firebase.auth().signInWithPopup(provider);
// };

export const signInWithFacebook = () => {
  var provider = new firebase.auth.FacebookAuthProvider();
  firebase.auth().useDeviceLanguage();

  console.log('Para logearse con Facebook');
  console.log(provider);
  firebase.auth().signInWithPopup(provider).then(()=> {
=======
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
>>>>>>> eac7d9db194ab8d78064b25a1a46d9f73588991c
    // This gives you a Facebook Access Token. You can use it to access the Facebook API.
    var token = result.credential.accessToken;
    // The signed-in user info.
<<<<<<< HEAD
    var user = result.user;
    console.log(user);
    console.log(token);
    console.log('Te has logeado con FB');
  }).catch((error)=> {
=======
    const user = result.user;
    console.log("te has logeado con facebook");
    // ...
  }).catch((error) => {
>>>>>>> eac7d9db194ab8d78064b25a1a46d9f73588991c
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
<<<<<<< HEAD
    var credential = error.credential;
    console.log('Algo ha pasado :(');
    console.log(errorCode);
    console.log(errorMessage);
    
  });
};




// export const signInWithGoogle = () => {
//   const provider = new firebase.auth.GoogleAuthProvider();
//   firebase.auth().signInWithPopup(provider).then((result) => {
//     // This gives you a Google Access Token. You can use it to access the Google API.
//     const token = result.credential.accessToken;
//     // The signed-in user info.
//     const user = result.user;
//     console.log('Te has logeado con Google');
//     console.log(user);
//     // ...
//   }).catch((error) => {
//     // Handle Errors here.
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     // The email of the user's account used.
//     const email = error.email;
//     // The firebase.auth.AuthCredential type that was used.
//     const credential = error.credential;

//     console.log(errorCode);
//     console.log(errorMessage);
//     console.log(email);
//     console.log(credential);
//   });
// };
// export const signInWithFacebook = () => {
//   const provider = new firebase.auth.FacebookAuthProvider();
//   /* eslint no-console: "error" */

//   // custom console
//   console.log(provider);
//   firebase.auth().useDeviceLanguage();
//   firebase.auth().signInWithPopup(provider).then((result) => {
//     // This gives you a Facebook Access Token. You can use it to access the Facebook API.
//     const token = result.credential.accessToken;
//     // The signed-in user info.
//     const user = result.user;
//     console.log('Te has logeado con Facebook');
//   }).catch((error) => {
//     // Handle Errors here.
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     // The email of the user's account used.
//     const email = error.email;
//     // The firebase.auth.AuthCredential type that was used.
//     const credential = error.credential;
//   });
// };
=======
    const credential = error.credential;
    console.log("no has podido ingresar con facebook");
    // ...
  });
};
>>>>>>> eac7d9db194ab8d78064b25a1a46d9f73588991c
