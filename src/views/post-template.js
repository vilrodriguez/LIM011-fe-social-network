
const renderGuides = 

template = `<div class="box-publication-feed">
    <div class="box-publication-feed-header">
    <span id ="poster-name">${user.Name} dice:</span>
    </div>
    <div class="box-publication-feed-text">
        //  get post text info here   
    </div>
    <div class="box-likes">
        <div class="text-likes">
        <img class="heart-likes" src="./img/lover.svg" alt="Likes heart picture"/>
        </div>
    </div>
</div>`;


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

