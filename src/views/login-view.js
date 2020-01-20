import { loginFunction, loginWithGmail, loginFacebook } from '../controller-app/login-controller.js';

export default () => {
  const viewLogin = ` 
  <div class="wrapper">
        <div class="img">
          <img src = "./img/side_image2.svg"
          alt = "SVG image of different prepared dishes and a hand holding a smartphone"/>
        </div>
        <div class="container-login">
            <form class="form" id="form-autentication" class="form-autentication" action="post">
              <img class="avatar" src="./img/online-menu-big.png" alt="SVG image of an Smartphone with a restaurant menu on the creen and a fork to the side">
            <div class="titles">
                <h1 class="title-app">~Bon-a-Petit~</h1>
                <h3>Red Social para Restaurants y Food Trucks</h3>
            </div>
            <div class="input-wrapper">
                <!--<label for="email"> Ingrese su correo: </label>-->
                <input class="input form-email" id="email" type="email" name="session-email"
                placeholder="Ingrese su correo:" required />
            </div>
            <div class="input-wrapper">
                <!--<label for="email"> Ingrese su contraseña: </label>-->
                <input class="input form-password" id="password" type="password" name="session-password"
                placeholder="Ingrese su contraseña:" required/>
            </div>
            <div>
                <p id ="mensaje-error" class ="mensaje-error "></p>
            </div>
            <div class="btn-wrapper">
                <input id="button-login" class="submit btn" type="submit" class="button-login" value="Iniciar sesión"></input>
            </div>
            <div class="links">
              <p class="other-singup-text"> O Ingresa con:</p>
              <p> 
                <a id = "facebook"class="link-icon" href="#" rel="noopener"><img class="other-icon" src="./img/facebookicon.svg"/></a>
                <a id="google" class="link-icon" href="#" rel="noopener"><img class="other-icon" src="./img/gmail.svg"/></a>
              </p>
              <p class="singup-text"> 
                <a class="link forgot" href="#/recuperar" rel="noopener">¿Olvidaste tu contraseña?</a>
              </p>
              <p class="singup-text p"><span class="new">¿Eres Nuevo?</span>
                <a class="link register" href="#/register" id="login-signup-link"> Regístrate Ahora</a>
              </p>
            </div>
          </form>
        </div>
  </div>`;
  const divElement = document.createElement('div');
  divElement.className = 'container';
  divElement.innerHTML = viewLogin;
  /* const loginForm = divElement.querySelector('#form-autentication'); */
  const menssageError = divElement.querySelector('#mensaje-error');
  const btnLogin = divElement.querySelector('#button-login');
  const google = divElement.querySelector('#google');
  const facebook = divElement.querySelector('#facebook');

  btnLogin.addEventListener('click', (e) => {
    e.preventDefault();
    const email = divElement.querySelector('input[type="email"]').value;
    const password = divElement.querySelector('input[type="password"]').value;
    loginFunction(email, password, menssageError);
    /* alert(' Te has logeado'); */
  });

  google.addEventListener('click', (e) => {
    e.preventDefault();
    loginWithGmail();
  });
  facebook.addEventListener('click', (e) => {
    e.preventDefault();
    loginFacebook();
  });

  return divElement;
};
