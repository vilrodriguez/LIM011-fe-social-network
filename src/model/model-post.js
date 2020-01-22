// import { setupPost } from '../controller-app/post-controller.js';

// get users id on database
export const getInfoUser = id => firebase.firestore().collection('users').doc(id).get();

// add text post when user submits
export const addTextPost = (userText, userID, userName, privacy) => (
  firebase.firestore().collection('post').add({
    postText: userText,
    UID: userID,
    name: userName,
    privatePost: privacy,
    datePost: firebase.firestore.FieldValue.serverTimestamp(),
  })
);

// gets post collection in descending order
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

// deletes a post from collection
export const getPostToDelete = postId => firebase.firestore().collection('post').doc(postId).delete();

// export const deletePost = (post) => {
//   getPostToDelete(post.docID).then(() => {
//     // console.log('Document successfully deleted!');
//   });
// };
