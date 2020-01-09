// infor para pintar en el home
export const getInfo = () => 
  // verifica que el usuario está activo
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // se incia seción
      console.log('Existe un usuario activo que inicio sesión');
    } else {
      console.log('Ningun usuario ha iniciado sesion');
    }
  });
};
