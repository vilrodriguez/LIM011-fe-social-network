import { signInUser } from '../firebase-controller/signIn.js';

export default () => {
  const divElement = document.createElement('div');
  divElement.className = 'wrapper';
  const viewLogin = ` 
  <div class="wrapper">
        <div class="img">
        <img src="/src/img/side-img.svg" alt="SVG image of different prepared dishes and a hand holding a smartphone">
        </div>
        <div class="container-login">
            <form class="form" id="form-autentication" class="form-autentication" action="post">
            <img class="avatar" src="/src/img/online-menu-big.png" alt="SVG image of an Smartphone with a restaurant menu on the creen and a fork to the side">
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
                placeholder="Ingrese su contraseña:" />
            </div>
            <div class="btn-wrapper">
                <input id="button-login" class="submit btn" type="submit" class="button-login" value="Iniciar sesión"></input>
            </div>
            <div class="links">
                
            <p class="other-singup-text"> O Ingresa con:</p>
            <p> <a class="link-icon" href="#" rel="noopener"><img class="other-icon" src="/src/img/facebookicon.svg"/></a>
              <a class="link-icon" href="#" rel="noopener"><img class="other-icon" src="/src/img/gmail.svg"/></a></p>
            <p class="singup-text"> <a class="link forgot" href="#" rel="noopener">¿Olvidaste tu contraseña?</a></p>
            <p class="singup-text p"><span class="new">¿Eres Nuevo?</span>
              <a class="link register" href="#/register" id="login-signup-link"> Regístrate Ahora</a>
            </p>
            </div>
            </form>
        </div>
        </div>
    
  `;
  divElement.innerHTML = viewLogin;
  const btnLogin = divElement.querySelector('#button-login');
  btnLogin.addEventListener('click', (e) => {
    e.preventDefault();
    const email = divElement.querySelector('input[type="email"]').value;
    const password = divElement.querySelector('input[type="password"]').value;
    console.log(email);
    console.log(password);

    signInUser(email, password);
  });
  return divElement;
};
