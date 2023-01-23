import { createSlice } from "@reduxjs/toolkit";

export const translationReducer = createSlice({
  //Rename translationReport
  name: "translation",
  initialState: {
    currentTranslation: "",
    imageData: [],
  },
  reducers: {
    setTranslation: (state, action) => {
      state.currentTranslation = action.payload;
    },
    setImageData: (state, action) => {
      state.imageData = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setTranslation, setImageData } = translationReducer.actions;

export default translationReducer.reducer;
