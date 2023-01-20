import { configureStore } from "@reduxjs/toolkit";
import translationReducer from "./Components/Reducers/translationReducer";

export default configureStore({
  reducer: {
    translation: translationReducer,
  },
});
