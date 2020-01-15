
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

// changing var names into our actual names
export const setupPost = (data, postContent, user) => {
  const postTemplate = postContent;
  let template = '';
  data.forEach((doc) => {
    const info = doc.data();
    // console.log(guides);
    const div = `
          <div class="box-publication-feed">
            <div class="box-publication-feed-header">
              <span id ="poster-name">${user.Name} dice:</span>
            </div>
            <div class="box-publication-feed-text">${info.postText}</div>
            <div class="box-likes">
              <div class="text-likes">
                <img class="heart-likes" src="./img/lover.svg" alt="Likes heart picture"/>
              </div>
            </div>
          </div>`;

    template += div;
  });
  postTemplate.innerHTML = template;
  console.log(postTemplate);
};
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
