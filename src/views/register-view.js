import { registerFunction } from '../controller-app/register-controller.js';

export default () => {
  const viewRegister = `
    <div class="wrapper">
      <div class="img">
      <img src = "./img/side_image2.svg"
      alt = "SVG image of different prepared dishes and a hand holding a smartphone" / >
      </div>
      <div class="container-login">
        <form class="form" id="form-register" action="post">
          <img class="avatar" src="./img/online-menu-big.png" alt="placeholder image">
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
              placeholder="Crear contraseña:" required/>
          </div>
          <div>
            <p id ="mensaje-error" class ="mensaje-error "></p>
          </div> 
          <div class="btn-wrapper">
            <input id="button-register" class="submit btn" type="submit" class="button-login" value="Registrar"></input>
          </div>
          <div class="links">
            <p class="singup-text">¿Ya tienes una cuenta?&nbsp;<a class="link register" href="#/"><span id="" class="link register-href">Iniciar Sesión</></a></p>
          </div>
        </form>
      </div>
    </div>
  `;
  const divElement = document.createElement('div');
  divElement.className = 'container';
  divElement.innerHTML = viewRegister;
  const mensajeError = divElement.querySelector('#mensaje-error');
  const btnRegister = divElement.querySelector('#button-register');
  btnRegister.addEventListener('click', (e) => {
    e.preventDefault();
    const email = divElement.querySelector('input[type = "email"]').value;
    const password = divElement.querySelector('input[type= "password"]').value;
    registerFunction(email, password, mensajeError);
  });
  return divElement;
};
