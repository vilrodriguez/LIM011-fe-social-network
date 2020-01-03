export default () => {
  const viewNotFound = `<header>
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
                      <section class="error-message">
    <h1>Oops, acá no está lo que buscas.</h1>
    <img src="./img/error-404.svg" alt="404 error image pagina no encontrada"/>
    </section>
    `;
  const divElement = document.createElement('div');
  divElement.className = 'container-error';
  divElement.innerHTML = viewNotFound;
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
