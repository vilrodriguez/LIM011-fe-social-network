import { crearUser } from '../functions/authentication.js';

export default () => {
  const divElement = document.createElement('div');
  divElement.className = 'container';
  const viewRegiter = `
    <div class="wrapper">
      <div class="img">
        <img src="/src/img/application.png" alt="vector of a smartphone with burguer menu">
      </div>
      <div class="container-register">
        <form class="form" id="form-register" action="post">
          <img class="avatar" src="/src/img/online-menu-big.png" alt="placeholder image">
          <div class="titles">
            <h1 class="title-app">~Bon-a-Petit~</h1>
            <h3>Red Social para Restaurants y Food Trucks</h3>
            <h2>Registrate</h2>
          </div>
          <div class="input-wrapper">
            <input class="input form-email" id="email" type="email" name="session-email"
              placeholder="Ingrese un correo:" required />
          </div>
          <div class="input-wrapper">
            <input class="input form-password" id="password" type="password" name="session-password"
              placeholder="Ingrese su contraseña:" />
          </div>
          <div class="btn-wrapper">
            <input id="button-register" class="submit btn" type="submit" class="button-login" value="Registrar"></input>
          </div>
        </form>
      </div>
    </div>
  `;
  divElement.innerHTML = viewRegiter;
  const btnRegister = divElement.querySelector('#button-register');
  btnRegister.addEventListener('click', () => {
    // const email = divElement.querySelector('input[type = ""]')
  });
  return divElement;
};
