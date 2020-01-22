import { signOut } from '../model/user-authentication.js';
import { addTextPost, getPostToDelete } from '../model/model-post.js';

const setupPost = (data) => {
  // const horaPost = printDate(data.date);
  const postTemplate = document.createElement('div');
  postTemplate.classList.add('publication-post');
  postTemplate.innerHTML = `
          <div id ="${data.docID}" class="box-publication-feed">
            <div class="box-publication-feed-header">
              <span id ="poster-name">${data.userName} dice:</span>
            </div>
            <div class="box-publication-feed-text">${data.text}</div>
            <div class="box-likes">
              <div class="text-likes">
                <img class="heart-likes" src="./img/lover.svg" alt="Likes heart picture"/>
                
                <button id="editar-${data.docID}">Editar</button>
                <button class = "btn-eliminar" id="eliminar-${data.docID}">Eliminar</button>
              </div>
            </div>
          </div>`;

  //  console.log(postTemplate);
  const btnEliminar = postTemplate.querySelector(`#eliminar-${data.docID}`);
  // console.log(btnEliminar);
  btnEliminar.addEventListener('click', () => {
    getPostToDelete(data.docID);/* .then(()=>{
      console.log('Se ha eliminado el post');
    }).catch(()=>{
      console.log('Ha ocurrido un error');
    });
    console.log('click eliminar'); */
  });

  return postTemplate;
};


export default (user, datos) => {
  // console.log(datos);
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
  <div id = "test"></div>
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

  sendtextPost.addEventListener('click', (e) => {
    e.preventDefault();
    const textPost = divElement.querySelector('#publication-text').value;
    addTextPost(textPost, user.ID, user.Name, false);
  });

  const postElement = divElement.querySelector('#test');
  datos.forEach((doc) => {
    postElement.appendChild(setupPost(doc));
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
