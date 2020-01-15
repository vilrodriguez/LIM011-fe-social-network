import { components } from './views/components.js';
import { getInfoUser } from './model/model-post.js';
import { userObserver } from './model/user-authentication.js';

const changeView = (route) => {
  const container = document.getElementById('container');
  container.innerHTML = '';
  switch (route) {
    case '': container.appendChild(components.login());
      break;
    case '#/': container.appendChild(components.login());
      break;
    case '#/register': container.appendChild(components.register());
      break;
    case '#/home': {
      const userInformation = (id) => {
        console.log(id);
        getInfoUser(id)
          .then((response) => {
            const dataUser = response.data();
            container.appendChild(components.home(dataUser));
          })
          .catch((error) => {
            console.log(error);
          });
      };
      userObserver(userInformation);
    }
      break;
    case '#/profile': {
      const userInformation = (id) => {
        console.log(id);
        getInfoUser(id)
          .then((response) => {
            const dataUser = response.data();
            container.appendChild(components.profile(dataUser));
          })
          .catch((error) => {
            console.log(error);
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
