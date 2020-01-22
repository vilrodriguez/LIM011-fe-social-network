import MockFirebase from 'mock-cloud-firestore';
import { addTextPost, getTextPost, getPostToDelete } from '../src/model/model-post.js';

const fixtureData = {
  collection__: {
    posts: {
      __doc__: {
        post123: {
          email: 'usuario@gmail.com',
          name: 'usuariotest',
          postText: 'post de prueba',
          idPost: '1',
          date: '30/08/19',
          privatePost: false,
        },
        post321: {
          email: 'usuario2@gmail.com',
          name: 'usuarioprueba',
          postText: 'Ok test',
          idPost: '2',
          date: '31/08/19',
          privatePost: false,
        },
      },
    },
  },
};

global.firebase = new MockFirebase(fixtureData, { isNaiveSnapshotListenerEnabled: true });

describe('Agregar post', () => {
  it('Deberia agregar un post', done => addTextPost('post de prueba', '1', '30/08/19', 'usuariotest', false)
    .then(() => getTextPost(
      (posts) => {
        const result = posts.find(element => element.postText === 'post de prueba');
        expect(result.postText).toBe('post de prueba');
        done();
      },
    )));
});

describe('Eliminar post', () => {
  it('Debería poder eliminar una nota', done => getPostToDelete('abc1d')
    .then(() => getTextPost(
      (data) => {
        const result = data.find(note => note.id === 'post123');
        expect(result).toBe(undefined);
        done();
      },
    )));
});
