export const getInfoUser = id => firebase.firestore().collection('users').doc(id).get();
