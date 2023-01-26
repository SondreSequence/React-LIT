import { createSlice } from "@reduxjs/toolkit";

export const translationReducer = createSlice({
  //Rename translationReport
  name: "translation",
  initialState: {
    currentTranslation: "",
    translations: [],
    imageData: [],
    translationUserName: "",
  },
  reducers: {
    setTranslation: (state, action) => {
      state.currentTranslation = action.payload;
    },
    setImageData: (state, action) => {
      state.imageData = action.payload;
    },
    setTranslations: (state, action) => {
      state.translations = action.payload;
    },
    setTranslationUserName: (state, action) => {
      state.translationUserName = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setTranslation,
  setImageData,
  setTranslations,
  setTranslationUserName,
} = translationReducer.actions;

export default translationReducer.reducer;
