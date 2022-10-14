// createSlice es una funcion que te permite crear el estado inicial de tu estado y los reducers que vas a utilizar
// createSlice recibe un objeto con 3 propiedades como minimo, el name, el initialState y los reducers
import { createSlice } from '@reduxjs/toolkit';

export interface UserState {
  email: string;
  fullName: string;
  token: string;
}

const initialState: UserState = {
  email: '',
  fullName: '',
  token: '',
};

export const userSlice = createSlice({
  // le pasamos el nombre de este slice
  name: 'user',
  // le pasamos el estado inical que va a tener nuestro slice
  initialState: initialState,
  // definimos los actions creators que en redux-toolkit se llaman reducers
  reducers: {
    setUser: (state, action) => {
      // tomo el estado anterior y lo actualizo con el payload que viene en el action
      state.email = action.payload.email;
      state.fullName = action.payload.fullName;
      state.token = action.payload.token;
    },
    unsetUser: state => {
      state.email = '';
      state.fullName = '';
      state.token = '';
    },
  },
});

// en este export tenemos que poner los nombres de nuestros reducers
export const { setUser, unsetUser } = userSlice.actions;

export default userSlice.reducer;
