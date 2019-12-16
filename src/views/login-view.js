export default () => {
  const divElement = document.createElement('div');
  divElement.className = 'container';
  const viewLogin = ` 
    <div class="wrapper">
        <div class="img">
            <img src="/src/img/application.png" alt="vector of a smartphone with burguer menu">
        </div>
        <div class="container-login">
            <form class="form" id="form-autentication" class="form-autentication" action="post">
            <img class="avatar" src="/src/img/online-menu-big.png" alt="placeholder image">
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
                <p class="singup-text"> <a class="link forgot" href="#/" rel="noopener">Olvidaste tu
                    contraseña</a></p>
                <p class="singup-text p"><span class="new">¿Eres Nuevo?
                <a class="link register" href="#/register" id="register">Registrate Ahora</a>
                </span>
                </p>
            </div>
            </form>
        </div>
    </div>
  `;
  divElement.innerHTML = viewLogin;
  const btnLogin = divElement.querySelector('#button-login');
  btnLogin.addEventListener('click', () => {
    console.log('Ingresa a la red');
  });
  return divElement;
};
