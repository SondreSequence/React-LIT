import { createSlice } from "@reduxjs/toolkit";

REACT_APP_API_URL = "https://glaze-thankful-wombat.glitch.me/translations";

export function fetchData(REACT_APP_API_URL) {
  return async (dispatch) => {
    try {
      dispatch({ type: "FETCH_START" });
      const response = await fetch(url);
      if (!response.ok) throw new Error(response.statusText);
      const data = await response.json();
      dispatch({ type: "FETCH_SUCCESS", payload: data });
    } catch (error) {
      dispatch({ type: "FETCH_ERROR", payload: error.message });
    }
  };
}

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
