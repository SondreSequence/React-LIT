import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import translationReducer from "./Components/Reducers/translationReducer";
import apiReducer from "./Components/Reducers/apiReducer";

export default configureStore({
  reducer: {
    translation: translationReducer,
    api: apiReducer,
    middleware: [thunk],
  },
});
