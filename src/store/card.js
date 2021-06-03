import { createSlice } from '@reduxjs/toolkit';

export const card = createSlice({
  name: 'card',
  initialState: {
    numFound: '',
    cart: [],
    cartInfo: [],
  },
  reducers: {
    distribution: (state, data) => {
      state.cart = [];
      for (let key of data.payload) {
        let obj = {};
        obj.title = key.title;
        if (key.cover_i !== undefined) {
          obj.img = key.cover_i;
        } else obj.img = false;
        if (key.author_name !== undefined) {
          obj.author = key.author_name.join(', ');
        } else {
          obj.author = 'Нет информации';
        }
        obj.key = key.key.replace(/\/works\//,'');
        if (key.isbn !== undefined) {
          obj.isbn = key.isbn.join(', ');
        } else {
          obj.isbn = 'Нет информации';
        }
        if (key.publisher !== undefined) {
          obj.publisher = key.publisher.join(', ');
        } else {
          obj.publisher = 'Нет информации';
        }
        if (key.publish_date !== undefined)
          obj.publish_date = key.publish_date.join(', ');
        state.cart.push(obj);
      }
    },
    info: (state, data) => {
      state.cartInfo = data.payload;
    },
    infoDelete: (state, data) => {
      state.cartInfo = [];
    },
  },
});
export const { distribution, info, infoDelete } = card.actions;
export const selectlist = state => state.card.cart;
export const selectInfo = state => state.card.cartInfo;
export default card.reducer;
