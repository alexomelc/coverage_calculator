import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { INITIAL_STATE } from '../../store/state';

import { ProductItem } from '../../types/index.d';

type ID = {
  id: string;
  calculatedPrice?: number;
};

const shoppingCartSlice = createSlice({
  name: 'shoppingCart',
  initialState: INITIAL_STATE,
  reducers: {
    addAllProduct: (state, action: PayloadAction<ProductItem[]>) => {
      return action.payload; 
    },

    addProduct: (state, action: PayloadAction<ID>) => {
      return state.map((item) =>
        item.id === action.payload.id
          ? {
              ...item,
              isProductAdded: true,
              calculatedPrice: action.payload.calculatedPrice,
            }
          : item,
      );
    },

    removeProduct: (state, action: PayloadAction<ID>) => {
      return state.map((item) =>
        item.id === action.payload.id
          ? {
              ...item,
              isProductAdded: false,
              calculatedPrice: undefined,
            }
          : item,
      );
    },
  },
});

export const { addProduct, addAllProduct, removeProduct } = shoppingCartSlice.actions;

export default shoppingCartSlice.reducer;
