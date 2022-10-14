// configureStore es una funcion que te da la libreria que te permite crear el store de tu aplicacion, recibe un objeto con varias cosas, una
// de ellas es la propiedad reducer, donde ahi van a ir todos tus reducers
import { configureStore } from '@reduxjs/toolkit';

// Reducers
import userReducer from '../reducers/user/userSlice';
import cartReducer from '../reducers/cart/cartSlice';

export default configureStore({
  reducer: {
    // en nuestro store configuramos el reducer que va a utilizar cada uno de nuestros estados
    user: userReducer,
    cart: cartReducer,
  },
});
