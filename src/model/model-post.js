// get users id on database
export const getInfoUser = id => firebase.firestore().collection('users').doc(id).get();


export const addTextPost = (userText, privacy) => (
  firebase.firestore().collection('post').add({
    private: privacy,
    postText: userText,
    /* userPosting: user.id, */
  })
);

export const userObserver = (userInformation) => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      userInformation(user.uid);
      console.log('usuario logueado', user);
    } else {
      console.log('Ha cerrado sesión');
    }
  });
};
// create elements to render post text
/*
export const getTextPost = () => {
  firebase.firestore().collection('post').get().then((snapshot) => {
  snapshot.docs.forEach(doc =>{
		console.log(snapshot.doc.data().postText);
		})
	})
} */

// export const getPost = (callback) => firebase.firestore().collection('post')
//   .onSnapshot((snapshot) => {
//     const data = [];
//     snapshot.forEach((doc) => {
//       data.push({ id: doc.id, ...doc.data() });
//     });
//     callback(data);
//   });


// export const timeStampsFirestore = () => firebase.firestore().settings({ timestampsInSnapshots: true });

// export const renderPost = (doc) =>{
// let li  = document.createElement('li');
// let post = document.createElement('span');
// li.setAttribute('data-id', docs.id);
// post.textContent = docs.data().postText;
// li.appendChild(post);

// };
