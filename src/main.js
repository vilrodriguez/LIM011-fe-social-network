import { initRouter } from './router.js';
import { firebaseConfig } from './config/firebaseConfig.js';

const init = () => {
  firebase.initializeApp(firebaseConfig);
  firebase.firestore();
  initRouter();
};

window.onload = init();
// initialize firebase, when using methods attached to const
/* const auth = firebase.auth();
// initialize firestore, and const to communicate with data base

const db = firebase.firestore();
// update setting to not get errors in console
db.settings({timestampsInSnapshots: true});
const firebase = require("firebase");
// Required for side-effects
require("firebase/firestore"); */
