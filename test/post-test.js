// import MockFirebase from 'mock-cloud-firestore';
// import { addTextPost } from '../src/model/model-post.js';

// const fixtureData = {
//   collection__: {
//     posts: {
//       __doc__: {
//         post123: {
//           email: 'usuariotest@gmail.com',
//           textPost: 'Post de prueba',
//           idPost: '1',
//           date: '19/01/2020',
//           typePost: 'privado',
//           __collection__: {
//             likes: {
//               __doc__: {
//                 xyz012: {
//                   iduser: 'abc123',
//                   idPost: 'post123',
//                   email: 'usuarioprueba@gmail.com',
//                 },
//               },
//             },
//           },
//         },
//         post321: {
//           email: 'usuarioprueba@gmail.com',
//           textPost: 'Ok test',
//           idPost: '2',
//           date: '19/01/2020',
//           typePost: 'privado',
//           __collection__: {
//             likes: {
//               __doc__: {
//                 xyz007: {
//                   iduser: 'abc321',
//                   idPost: 'post321',
//                   email: 'usuariotest@gmail.com',
//                 },
//               },
//             },
//           },
//         },
//       },
//     },
//   },
// };

// global.firebase = new MockFirebase(fixtureData, { isNaiveSnapshotListenerEnabled: true });

// describe('addTextPost', () => {
//   it('Deberia agregar un post', () => {
//     addTextPost('Test de post 2', 'usuariotest@gmail.com').then((data) => {
//       expect(data).toBe('Test de post 2 Post agregado');
//     });
//   });
// });
