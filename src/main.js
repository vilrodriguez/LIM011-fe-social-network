import { changeView } from './controllers/route.js';
import { firebaseConfig } from './firebase-controller/firebaseConfig.js';

const initRouter = () => {
  firebase.initializeApp(firebaseConfig);
  changeView(window.location.hash);
  window.addEventListener('hashchange', () => changeView(window.location.hash));
};
window.addEventListener('load', initRouter);
