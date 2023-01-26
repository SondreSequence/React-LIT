import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import translationReducer from "./Components/Reducers/translationReducer";
import apiReducer from "./Components/Reducers/apiReducer";
import userReducer from "./Components/Reducers/userReducer";

export default configureStore({
  reducer: {
    translation: translationReducer,
    user: userReducer,
    api: apiReducer,
    middleware: [thunk],
  },
});
