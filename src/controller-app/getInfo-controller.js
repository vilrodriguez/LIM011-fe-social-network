// infor para pintar en el home
export const getInfo = (uName, uEmail, uImage) => {
  const userName = uName;
  const userEmail = uEmail;
  const userImage = uImage;
  const auth = firebase.auth();
  return auth.onAuthStateChanged((user) => {
    if (user) {
      // se incia seción
      console.log ('Usuario inicio sesion');
    } else {
      console.log('Ningun usuario ha iniciado sesion');
    }
  });
};
