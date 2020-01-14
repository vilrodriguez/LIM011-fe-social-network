import {
  signOut,
} from '../model/user-authentication.js';
import { addTextPost, userObserver } from '../model/model-post.js';

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
      <img class="banner-img" src="./img/backgroundimgfood.jpg" alt="User Banner Image">
    </div>
    <div class="info-profile">
      <img class= "user-icon" src="${user.Photo}" alt="User Profile Picture">
      <div class="user-name">
        <h1 id = "userName">${user.Name}</h1>
        <h1 id = "email">${user.Email}</h1>
      </div>
    </div>
</div>

<div class="feed">
    <div class="box-create-publication">
      <label for="publication-text"> ${user.Name} dice: </label>
      <input type="text" id="publication-text" name="publication" class="publication" placeholder="Escribe tu mensaje aquí" cols="30" rows="5"></input>
      <button class="btn-add-image pull-left" type="submit"></button>
      <label for="private">PRIVADO<input type="checkbox" name="private" id="private" value="true"></label>
      <button id="send-text-post" class="btn pull-right" type="submit">Enviar</button>
    </div>
  <div class="box-publication-feed">
      <div class="box-publication-feed-header">
        Marilyn Rivero:
      </div>
      <div class="box-publication-feed-text">
        At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti
        atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.
      </div>
      <div class="box-likes">
        <div class="text-likes">
          <img class="heart-likes" src="./img/heart.png" alt="Likes heart picture">
          a 4 personas les gusta esto.
        </div>
      </div>
      <div class="box-publication-feed-comment">
        <div class="box-publication-feed-comment-header">
          Vilmarys dice:
        </div>
        <div class="box-publication-feed-comment-text ">
          The wise man therefore always holds in these matters to this principle of selection.
        </div>
      </div>
    <div class="box-publication-feed-comment">
      <div class="box-publication-feed-comment-header">
        Lilian dice:
      </div>
      <div class="box-publication-feed-comment-text ">
      Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus.
      </div>
    </div>
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
  const textPost = divElement.querySelector('#publication-text');
  const sendtextPost = divElement.querySelector('#send-text-post');
  /* const privatePost = divElement.querySelector('#private'); */
  userObserver();


  sendtextPost.addEventListener('click', (e) => {
    e.preventDefault();
    console.log(textPost.value);
    console.log(addTextPost(textPost.value, false));
  });

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
