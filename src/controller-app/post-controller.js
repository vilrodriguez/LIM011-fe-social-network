/*
const allDatePost = (datePost) => {
  const getDate = datePost.getDate();
  const getMonth = datePost.getMonth();
  const getFullYear = datePost.getFullYear();

  const minutes = datePost.getMinutes();
  const hours = datePost.getHours();

  const day = `${getDate}/${getMonth}/${getFullYear}`;
  const timePost = `A las: ${hours}:${minutes}`;
  const date = `${day} ${timePost}`;
  console.log(date);
};

datePost

db.collection('user').get().then( (snapshot) => {
    snapshot.docs.forEach(doc => {
        var time = doc.data().timestamp;
        var date = time.toDate();
        console.log(date);
    })
})
 */

export const getdate = () => {
  firebase.firestore().collection('post').get().then(((snapshot) => {
    snapshot.docs.forEach((doc) =>{
      const time = doc.data().datePost.toDate();
      console.log(time);
      const getdate = datePost.getDate();
      const getMonth = datePost.getMonth();
      const getFullYear = datePost.getFullYear();
      const minutes = datePost.getMinutes();
      const hours = datePost.getHours();

  const day = `${getDate}/${getMonth}/${getFullYear}`;
  const timePost = `A las: ${hours}:${minutes}`;
  const date = `${day} ${timePost}`;
  console.log(date);
    })
  }));
};

export const setupPost = (data, postContent, user) => {
  const postTemplate = postContent;
  let template = '';
  data.forEach((doc) => {
    const info = doc.data();
    console.log(info);
    const time = info.datePost.toDate();
    
    console.log(time);
   /* const time = info.datePost.getMonth();  */
        const div = `
          <div id = "${doc.id}" class="box-publication-feed">
            <div class="box-publication-feed-header">
              <span id ="poster-name">${info.name} dice:</span>
            </div>
            <div class="box-publication-feed-text">${info.postText} </div>
            <div class="box-likes">
              <div class="text-likes">
                <img class="heart-likes" src="./img/lover.svg" alt="Likes heart picture"/>
                <p class ="post-date">${time ? time : ' ' }</p>
              </div>
            </div>
          </div>`;

    template += div;
  });
  postTemplate.innerHTML = template;
  console.log(postTemplate);
};
