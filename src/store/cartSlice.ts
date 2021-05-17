import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./configureStore";
import { Product } from "./productSlice";
type ProductCart = Product & {
  amount: number;
};
const cartSlice = createSlice({
  name: "cart",
  initialState: [] as ProductCart[],
  reducers: {
    addToCart: (state, action: PayloadAction<ProductCart>) => {
      const productIndex = state.findIndex((pd) => pd.id === action.payload.id);
      if (productIndex !== -1) {
        state[productIndex].amount += 1;
      } else {
        state.push({ ...action.payload, amount: 1 });
      }
    },
    removeToCart: (state, action: PayloadAction<string>) => {
      const pdIndex = state.findIndex((pd) => pd.id === action.payload);
      if (state[pdIndex].amount > 1) {
        state[pdIndex].amount -= 1;
      } else {
        return state.filter((pd) => pd.id === action.payload);
      }
    },
  },
});
export const getCartProductSelector = (state: RootState) => state.cart;
export const getTotalPriceSelector = (state: RootState) =>
  state.cart.reduce((acc, next) => (acc += next.amount * next.price), 0);
export const { addToCart, removeToCart } = cartSlice.actions;
export default cartSlice.reducer;
