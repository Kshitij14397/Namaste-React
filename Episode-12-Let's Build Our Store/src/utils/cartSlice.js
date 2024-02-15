import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      // Vanilla Redux (Old Redux) => DON'T MUTATE STATE AND RETURN NEW STATE IS MANDATORY
      // const newState = [...state];
      // newState.items.push(action.payload);
      // return newState;

      // Redux Toolkit
      // We HAVE to mutate the state
      state.items.push(action.payload);
    },

    removeItem: (state, action) => {
      state.items.pop();
    },

    // originalState = {items: ["pizza"]}
    clearCart: (state) => {
      // state = [] Not mutating the state, actually changing the reference. Will not work.
      // RTK - either Mutate the existing state or return a new state.
      // return {items: []}; This new object will be replaced inside originalState = {items: []}. Also correct way to mutate the state.
      state.items.length = 0; // {items: []}
    },
  },
});

console.log("kp1", cartSlice);

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
