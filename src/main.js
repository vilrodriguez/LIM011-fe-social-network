import { initRouter } from './router.js';
import { firebaseConfig } from './firebase-controller/firebaseConfig.js';




const init = () => {
  firebase.initializeApp(firebaseConfig);
  initRouter();
  // userObserver();
};
window.onload = init();
