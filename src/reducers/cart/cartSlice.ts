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
  },
});

export const { addProductToCart } = cartSlice.actions;

export default cartSlice.reducer;
