import { initRouter } from './router.js';

const firebaseConfig = {
  apiKey: 'AIzaSyC_VFtRcZE1fWUZBVPCkaXelz8Fz57Qzg8',
  authDomain: 'red-social-lvm.firebaseapp.com',
  databaseURL: 'https://red-social-lvm.firebaseio.com',
  projectId: 'red-social-lvm',
  storageBucket: 'red-social-lvm.appspot.com',
  messagingSenderId: '253733620558',
  appId: '1:253733620558:web:3ddb0f1e493080cfc1ac1f',
  measurementId: 'G-HY6JHQPEC5',
};

const init = () => {
  firebase.initializeApp(firebaseConfig);
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
