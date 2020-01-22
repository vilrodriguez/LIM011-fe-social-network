import { initRouter } from './router.js';
import { firebaseConfig } from './config/firebaseConfig.js';

const init = () => {
  firebase.initializeApp(firebaseConfig);
  firebase.firestore();
  initRouter();
};

window.onload = init();
