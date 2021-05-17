import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./configureStore";
export type Product = {
  /**id should be unique */
  id: string;
  title: string;
  price: number;
};
const initialData = [
  { id: "1", title: "mcBook pro", price: 1300 },
  { id: "2", title: "mcBook Air", price: 999 },
  { id: "3", title: "iPhon 12 pro max", price: 1000 },
];

const productSlice = createSlice({
  name: "products",
  initialState: initialData,
  reducers: {
    addProduct: (state, action: PayloadAction<Product>) => {
      state.push(action.payload);
    },
    removeProduct: (state, action: PayloadAction<string>) => {
      return state.filter((pd) => pd.id !== action.payload);
    },
  },
});
export const getProductSelector = (state: RootState) => state.products;
export const { addProduct, removeProduct } = productSlice.actions;
export default productSlice.reducer;
