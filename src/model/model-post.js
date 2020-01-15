
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
      // console.log('usuario logueado', user);
    } else {
      console.log('Ha cerrado sesión');
    }
  });
};
// render post content in html
/*
export const setupGuides = (data, box) =>{
  let postBox = box;
    let template = '';
    data.forEach(doc =>{
        const guides = doc.data();
        // console.log(guides);
        const div = `
        <div class="title"> ${guides.title}</div>
        <div class="title"> ${guides.content}</div>
        `;
        template += div;
    });
    postBox.innerHTML = template;
    console.log(postBox);
};
// get post content from database
export const getTextPost = (box) => {
  firebase.firestore().collection('guides').get().then(((snapshot) => {
    setupGuides(snapshot.docs, box);
  }));
};*/

// changing var names into our actual names
 export const setupPost = (data, postContent) =>{
  let postTemplate = postContent;
    let template = '';
    data.forEach(doc =>{
        const info = doc.data();
        // console.log(guides);
        const div = `
        <div class="title"> ${info.postText}</div>
        <div class="title"> ${info.private}</div>
        `;
        template += div;
    });
    postTemplate.innerHTML = template;
    console.log(postTemplate);
};
export const getTextPost = (content) => {
  firebase.firestore().collection('post').get().then(((snapshot) => {
    setupPost(snapshot.docs, content);
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
