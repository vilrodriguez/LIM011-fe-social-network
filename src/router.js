import { components } from './views/components.js';
import { getInfoUser, getTextPost } from './model/model-post.js';
import { userObserver } from './controller-app/observador.js';

const changeView = (route) => {
  const container = document.getElementById('container');
  container.innerHTML = '';
  switch (route) {
    case '': container.appendChild(components.login());
      // funcion de callback para guiarse
      /*
  const userObserver = (obtDatos) => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        obtDatos(user.uid);
        console.log('usuario logueado', user);
      } else {
        console.log('Ha cerrado sesión');
      }
    });
  };
  */
      break;
    case '#/': container.appendChild(components.login());
      break;
    case '#/register': container.appendChild(components.register());
      break;
    case '#/home': {
      const userInformation = (id) => {
        // console.log(id);
        getInfoUser(id)
          .then((response) => {
            const dataUser = response.data();
            const funt = (datos) => {
              container.innerHTML = '';
              container.appendChild(components.home(dataUser, datos));
            };
            getTextPost(funt);
          })
          // eslint-disable-next-line no-unused-vars
          .catch((error) => {
            // console.log(error);
          });
      };
      userObserver(userInformation);
    }
      break;
    case '#/profile': {
      const userInformation = (id) => {
        //  console.log(id);
        getInfoUser(id)
          .then((response) => {
            const dataUser = response.data();
            container.appendChild(components.profile(dataUser));
          })
          // eslint-disable-next-line no-unused-vars
          .catch((error) => {
            // console.log(error);
          });
      };
      userObserver(userInformation);
    }
      break;
    default: container.appendChild(components.notfound());
      break;
  }
};
export const initRouter = () => {
  changeView(window.location.hash);
  window.addEventListener('hashchange', () => changeView(window.location.hash));
};
