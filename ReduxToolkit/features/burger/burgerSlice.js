const createSlice = require("@reduxjs/toolkit").createSlice;
const initialState = {
  burgerBuns: 1000,
};
const burgerSlice = createSlice({
  name: "burger",
  initialState,
  reducers: {
    burger_order: (state) => {
      state.burgerBuns--;
    },
  },
});
console.log(burgerSlice);
//noq to export so everything is accessible by import
module.exports = burgerSlice.reducer;
module.exports.burgerAction = burgerSlice.actions;
