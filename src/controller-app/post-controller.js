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
