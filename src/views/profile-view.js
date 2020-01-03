export default () => {
  const viewProfile = `<header>
                      <nav class="topnav" id="myTopnav">
                        <a href="#/home" class="active">BonApetit</a>
                        <div class="dropdown" id="button-nav">
                          <button class="dropbtn"> 
                            Marilyn Rivero ^ 
                          </button>
                          <div class="dropdown-content" id="button-nav-content">
                            <a href="#/profile">Mi perfil</a>
                            <a href="#/">Cerrar sesión</a>
                          </div>
                        </div>
                      </nav>
                    </header>
                    <section class="container-profile">
  <h3>Edita la información en tu cuenta</h3>
  <form class="form" id="form-register" action="post">
          <img class="avatar" src="/img/online-menu-big.png" alt="placeholder image">
            <div class="input-wrapper">
            <input class="input form-email" id="email" type="email" name="session-email"
              placeholder="Ingrese un correo:"/>
          </div>
          <div class="input-wrapper">
            <input class="input form-password" id="password" type="password" name="session-password"
              placeholder="Crear contraseña:"/>
          </div>
          <div class="btn-wrapper">
            <input id="button-savechanges" class="submit btn" type="submit" class="button-login" value="Guardar"></input>
          </div>
  </section>
  `;
  const divElement = document.createElement('div');
  divElement.className = 'container-profile';
  divElement.innerHTML = viewProfile;
  const btnNav = divElement.querySelector('#button-nav');
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
