
// Register new user with email and password
export const createUser = (email, password) => {
  // eslint-disable-next-line no-console
  console.log(email, password);
  firebase.auth().createUserWithEmailAndPassword(email, password).then(()=>{ console.log(' Te has registrado exitosamente')}).catch((error) => {
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

// Sign in of a user already register
export const signInUser = (email, password) => {
  firebase.auth().signInWithEmailAndPassword(email, password).then(()=>{console.log('Te has logeado.')}).catch((error) => {
    const errorCode = error.code;
    // eslint-disable-next-line no-console
    console.log(errorCode);
    const errorMessage = error.message;
    // eslint-disable-next-line no-alert
    alert(errorMessage);
  });
};

