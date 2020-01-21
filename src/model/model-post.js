// import { setupPost } from '../controller-app/post-controller.js';

// get users id on database
export const getInfoUser = id => firebase.firestore().collection('users').doc(id).get();

export const addTextPost = (userText, userID, userName, privacy) => (

  firebase.firestore().collection('post').add({
    postText: userText,
    UID: userID,
    name: userName,
    privatePost: privacy,
    datePost: firebase.firestore.FieldValue.serverTimestamp(),
  })
);

export const getTextPost = (funcionleerdatos) => {
  firebase.firestore().collection('post').orderBy('datePost', 'desc').onSnapshot((snapshot) => {
    const array = [];
    snapshot.forEach((doc) => {
      array.push({
        docID: doc.id,
        userName: doc.data().name,
        text: doc.data().postText,
        userUID: doc.data().UID,
        date: doc.data().datePost,
        privacidad: doc.data().privatePost,
      });
    });
    funcionleerdatos(array);
  });
};
