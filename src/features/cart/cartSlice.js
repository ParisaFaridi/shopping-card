import { createSlice } from "@reduxjs/toolkit";
import { sumProducts } from "../../helpers/Helper";

const initialState = {
  selectedItems: [],
  itemsCounter: 0,
  total: 0,
  checkout: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      if (!state.selectedItems.find((item) => item.id === action.payload.id))
        state.selectedItems.push({ ...action.payload, quantity: 1 });
      const { itemsCounter, total } = sumProducts(state.selectedItems);
      state.itemsCounter = itemsCounter;
      state.total = total;
      state.checkout = false;
    },
    deleteItem: (state, action) => {
      let newSelectedItems = state.selectedItems.filter(
        (item) => item.id !== action.payload.id
      );
      state.selectedItems = newSelectedItems;
      const { itemsCounter, total } = sumProducts(state.selectedItems);
      state.itemsCounter = itemsCounter;
      state.total = total;
    },
    increase: (state, action) => {
      const index = state.selectedItems.findIndex(
        (item) => item.id === action.payload.id
      );
      state.selectedItems[index].quantity++;
      const { itemsCounter, total } = sumProducts(state.selectedItems);
      state.itemsCounter = itemsCounter;
      state.total = total;
    },
    decrease: (state, action) => {
      state.selectedItems[
        state.selectedItems.findIndex((item) => item.id === action.payload.id)
      ].quantity--;
      const { itemsCounter, total } = sumProducts(state.selectedItems);
      state.itemsCounter = itemsCounter;
      state.total = total;
    },
    checkout: (state) => {
      state.selectedItems = [];
      state.checkout = true;
      state.total = 0;
      state.itemsCounter = 0;
    },
  },
});
export default cartSlice.reducer;
export const { addItem, deleteItem, increase, decrease, checkout } =
  cartSlice.actions;
