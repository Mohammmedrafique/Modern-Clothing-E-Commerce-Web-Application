import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  productData: [],
  userInfo: null,
};

export const bazarSlice = createSlice({
  name: "bazar",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      console.log(typeof state.productData,"state")
      const item = state.productData.find((item) => item._id === action.payload._id);

      if (item) {
        item.quantity += action.payload.quantity;
      } else {
        console.log(state.productData,"state.productData")
        state.productData.push(action.payload);
      }
      
      //state.productData = action.payload;
    },

    deleteItem: (state, action) => {
      state.productData = state.productData.filter(
        (item) => item._id !== action.payload
      );
    },

    resetCart: (state) => {
      state.productData = [];
    },

    incrementQuantity: (state, action) => {
      const item = state.productData.find(
        (item) => item._id === action.payload._id
      );

      if (item) {
        item.quantity++;
      }
    },

    decrementQuantity: (state, action) => {
      const item = state.productData.find(
        (item) => item._id === action.payload._id
      );

      if (item.quantity === 1) {
        item.quantity = 1;
      } else {
        item.quantity--;
      }
    },
  },
});

export const { addToCart,deleteItem,resetCart ,incrementQuantity,decrementQuantity} = bazarSlice.actions;
export default bazarSlice.reducer;
