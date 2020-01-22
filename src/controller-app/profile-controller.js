import { updateProfile } from '../model/model-profile.js';
import { userCurrent } from '../model/user-authentication.js';

export const actualizandoPerfil = (nuevoUserNombre) => {
  const id = userCurrent().uid;
  updateProfile(nuevoUserNombre, id);
};
