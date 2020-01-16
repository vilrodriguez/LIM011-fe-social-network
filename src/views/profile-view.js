import {
  signOut,
} from '../model/user-authentication.js';
import { actualizandoPerfil } from '../controller-app/profile-controller.js';

export default (user) => {
  const viewProfile = `<header>
                      <nav class="topnav" id="myTopnav">
                        <a href="#/home" class="active">~Bon-a-Petit~</a>
                        <div class="dropdown" id="button-nav">
                          <button class="dropbtn"> 
                          MENU
                          </button>
                          <div class="dropdown-content" id="button-nav-content">
                            <a id="user-profile" href="#/profile">Mi perfil</a>
                            <a id="sign-out" href="#/">Cerrar sesión</a>
                          </div>
                        </div>
                      </nav>
                    </header>
                    <section class="container-form">
  <h3>Edita la información en tu cuenta</h3>
  <form class="form-" id="form-register" action="post">
          <img class="avatar-profile" src=${user.Photo === null ? './img/profile-user2.svg' : user.Photo} alt="User's profile picture">
            <div class="input-wrap">
            <input class="input" id="user-name" type="text" name="user-name"
              placeholder="Nombre:" value="${user.Name}" disabled/>
           </div>
          <div class="input-wrap">
          <input class="input" id="email" type="email" name="email"
            placeholder="Correo de contacto:" value="${user.Email}" disabled/>
         </div>
          <div class="input-wrap">
            <input class="input" id="user-menu" type="text" name="user-menu"
              placeholder="Tipo de menú:" value = ""/>
          </div>
          <div class="input-wrap">
            <input class="input" id="address" type="text" name="address"
              placeholder="Dirección:" value="${user.Email}" disabled/>
          </div>
          <div class="btn-wrapper">
                <input id="editar" class="submit btn" type="submit" value="Editar"/>
                <br>
          </div>
          <div class="btn-wrapper">
                <input id="guardar" class="submit btn" type="submit" value="Guardar"/>
                <br>
          </div>
           <div class="btn-wrapper">
                <input id="inicio" class="submit btn" type="submit" value="Inicio"/>
          </div>
    </form>
  </section>
  `;
  const divElement = document.createElement('div');
  divElement.className = 'container-profile';
  divElement.innerHTML = viewProfile;

  const userName = divElement.querySelector('#user-name');
  const userMenu = divElement.querySelector('#user-menu');
  const userAdress = divElement.querySelector('#address');

  const btnNav = divElement.querySelector('#button-nav');
  const btnProfile = divElement.querySelector('#user-profile');
  const btnCerrarSesion = divElement.querySelector('#sign-out');
  const btnEditar = divElement.querySelector('#editar');
  const btnGuardar = divElement.querySelector('#guardar');
  const btnInicio = divElement.querySelector('#inicio');
  btnGuardar.style.display = 'block';

  btnProfile.addEventListener('click', (e) => {
    e.preventDefault();
    window.location.hash = '#/profile';
  });

  btnCerrarSesion.addEventListener('click', (e) => {
    e.preventDefault();
    signOut();
    window.location.hash = '#/';
  });
  btnNav.addEventListener('click', (e) => {
    e.preventDefault();
    const x = document.getElementById('button-nav-content');
    if (x.className === 'dropdown-content') {
      x.className += ' show';
    } else {
      x.className = 'dropdown-content';
    }
  });

  btnEditar.addEventListener('click', (e) => {
    e.preventDefault();
    userName.disabled = false;
    userName.focus();
    userName.setSelectionRange(0, userName.nodeValue.length);
    btnEditar.style.display = 'none';
  });

  btnGuardar.addEventListener('click', (e) => {
    e.preventDefault();
    const nuevoUserNombre = userName.value;
    actualizandoPerfil(nuevoUserNombre);
    userName.disabled = true;
  });
  btnInicio.addEventListener('click', (e) => {
    e.preventDefault();
    window.location.hash = '#/home';
  });
  return divElement;
};
