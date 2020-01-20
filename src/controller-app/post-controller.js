
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

 */


// const printDate = (data) => {
//   /* firebase.firestore().collection('post').get().then(((snapshot) => {
//     snapshot.docs.forEach((doc) => { */
//   const time = data.data().datePost.toDate();
//   const month = time.toLocaleString('default', { month: 'short' });
//   const getDay = time.getDate();
//   const getYear = time.getFullYear();
//   const getHour = time.getHours();
//   const getMinutes = time.getMinutes();
//   const day = `${getDay} of ${month}, ${getYear} `;
//   const postingTime = `A las ${getHour}:${getMinutes}`;
//   const postingDate = `${day}. ${postingTime}`;
//   return postingDate;
// };

// export const setupPost = (data, postContent) => {
//   const postTemplate = postContent;
//   let template = '';
//   data.forEach((doc) => {
//     const info = doc.data();
//     const horaPost = printDate(doc);
//    /* const time = info.datePost.getMonth();  */
//     const div = `
//           <div id = "${doc.id}" class="box-publication-feed">
//             <div class="box-publication-feed-header">
//               <span id ="poster-name">${info.name} dice:</span>
//             </div>
//             <div class="box-publication-feed-text">${info.postText} </div>
//             <div class="box-likes">
//               <div class="text-likes">
//                 <img class="heart-likes" src="./img/lover.svg" alt="Likes heart picture"/>
//                 <p class ="post-date">${horaPost}</p>
//                 <button id="editar">Editar</button>
//                 <button id="eliminar">Eliminar</button>
//               </div>
//             </div>
//           </div>`;

//     template += div;
//   });
//   postTemplate.innerHTML = template;
//   console.log(postTemplate);
// };


// export const setupPost = (data, postContent, user) => {
//   const postTemplate = postContent;
//   let template = '';
//   data.forEach((doc) => {
//     const info = doc.data();
//     const horaPost = printDate(doc);
//    /* const time = info.datePost.getMonth();  */
//     const div = `
//           <div id = "${doc.id}" class="box-publication-feed">
//             <div class="box-publication-feed-header">
//               <span id ="poster-name">${info.name} dice:</span>
//             </div>
//             <div class="box-publication-feed-text">${info.postText} </div>
//             <div class="box-likes">
//               <div class="text-likes">
//                 <img class="heart-likes" src="./img/lover.svg" alt="Likes heart picture"/>
//                 <p class ="post-date">${horaPost}</p>
//                 <button id="editar">Editar</button>
//                 <button id="eliminar">Eliminar</button>
//               </div>
//             </div>
//           </div>`;

//     template += div;
//   });
//   postTemplate.innerHTML = template;
//   console.log(postTemplate);
// };
