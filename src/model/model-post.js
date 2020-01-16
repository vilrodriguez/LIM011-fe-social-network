import { setupPost } from '../controller-app/post-controller.js';

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

export const getTextPost = (content, user) => {
  firebase.firestore().collection('post').get().then(((snapshot) => {
    setupPost(snapshot.docs, content, user);
  }));
};
// export const getPost = (callback) => firebase.firestore().collection('post')
//   .onSnapshot((snapshot) => {
//     const data = [];
//     snapshot.forEach((doc) => {
//       data.push({ id: doc.id, ...doc.data() });
//     });
//     callback(data);
//   });


// export const renderPost = (doc) =>{
// let li  = document.createElement('li');
// let post = document.createElement('span');
// li.setAttribute('data-id', docs.id);
// post.textContent = docs.data().postText;
// li.appendChild(post);

// };
