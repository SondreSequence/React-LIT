import { createSlice } from "@reduxjs/toolkit";

export const translationReducer = createSlice({
  name: "translation",
  initialState: {
    currentTranslation: "YOOOOO",
  },
  reducers: {
    setTranslation: (state, action) => {
      state.currentTranslation = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setTranslation } = translationReducer.actions;

export default translationReducer.reducer;
