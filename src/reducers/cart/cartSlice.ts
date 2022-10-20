import { createSlice } from '@reduxjs/toolkit';

export interface CartState {
  totalCount: number;
  productsList: Array<Product>;
}

interface Product {
  title: string;
  id: number;
  image: string;
}

const initialState: CartState = {
  totalCount: 0,
  productsList: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState: initialState,
  reducers: {
    addProductToCart: (state, action) => {
      state.productsList = [...state.productsList, action.payload];
      state.totalCount += 1;
    },
    removeProductFromCart: (state, action) => {
      // En este caso del payload vamos a recibir un id, lo que me pasan lo guardamos en una variable
      const productId = action.payload;
      // Le resto a este estado -1 por que eliminaron un producto
      state.totalCount -= 1;
      state.productsList = state.productsList.filter(product => product.id !== productId);
    },
  },
});

export const { addProductToCart, removeProductFromCart } = cartSlice.actions;

export default cartSlice.reducer;
