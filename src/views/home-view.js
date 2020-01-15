import {
  signOut,
} from '../model/user-authentication.js';
import { addTextPost, getTextPost } from '../model/model-post.js';


export default (user) => {
  // console.log(user);
  const homeView = `<header>
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
<section class="box-home">
<div class="box-profile">
    <div class="banner-profile">
      <img class="banner-img" src="./img/Food-Delivery-350x150.jpg" alt="User Banner Image">
    </div>
    <div class="info-profile">
      <img src=${user.Photo === null ? './img/profile-user2.svg' : user.Photo} class="user-icon"/>
      <div id="info-profile" class="user-name">
        <h1 id = "userName">${user.Name}</h1>
        <h1 id = "email">${user.Email}</h1>
      </div>
    </div>
</div>

<div class="feed">

    <div class="box-create-publication">
      <label for="publication-text"> ${user.Name} dice: </label>
      <textarea id="publication-text" name="publication" class="publication" placeholder="Escribe tu mensaje aquí" cols="30" rows="5"></textarea>
      <button class="btn-add-image pull-left" type="submit"></button>
      <label for="private">PRIVADO<input type="checkbox" name="private" id="private" value="true"></label>
      <button id="send-text-post" class="btn pull-right" type="submit">Enviar</button>
    </div>
  <div class="box-publication-feed">
  <div id = "test"> </div>
    </div>
    <div class="box-create-comment">
      <textarea name="comment" class="publication" placeholder="Escribe tu comentario aquí" cols="30" rows="3"></textarea>
      <button class="btn pull-right" type="submit">Comentar</button>
    </div>
  </div>

</section>
`;

  const divElement = document.createElement('div');
  divElement.className = 'container home';
  divElement.innerHTML = homeView;


  const btnNav = divElement.querySelector('#button-nav');
  const btnCerrarSesion = divElement.querySelector('#sign-out');
  const btnProfile = divElement.querySelector('#user-profile');
  const sendtextPost = divElement.querySelector('#send-text-post');
  /* const privatePost = divElement.querySelector('#private'); */

  sendtextPost.addEventListener('click', (e) => {
    e.preventDefault();
    // console.log('hice click');
    const textPost = divElement.querySelector('#publication-text').value;
    // console.log(textPost);
    console.log('Post enviado:', addTextPost(textPost, false));
  });
  const postBox = divElement.querySelector('#test');
  getTextPost(postBox, user);

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
  return divElement;
};
