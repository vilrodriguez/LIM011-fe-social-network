// import { userCurrent } from '../model/user-authentication.js';
// import { addTextPost } from '../model/model-post.js';

// const allDatePost = (fullDate) => {
//   const getDate = fullDate.getDate();
//   const getMonth = fullDate.getMonth() + 1;
//   const getFullYear = fullDate.getFullYear(); // Devuelve el año

//   const minutes = fullDate.getMinutes();
//   const seconds = fullDate.getSeconds();
//   const hours = fullDate.getHours();

//   const day = `${getDate}/${getMonth}/${getFullYear}`;
//   const myClock = `A las: ${hours}:${minutes}:${seconds}`;
//   const date = `${day} ${myClock}`;
//   return date;
// };

// export const textPost = () => {
//   const allDate = new Date();
//   const date = allDatePost(allDate);
//   const txtpublicacion = document.getElementById('setupPost').value;
// addTextPost(userCurrent().email, txtpublicacion, userCurrent().uid, date); // pinta en el home
