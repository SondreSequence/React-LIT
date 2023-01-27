import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import localStorage from "redux-persist/lib/storage";
import translationReducer from "./Components/Reducers/translationReducer";
import apiReducer from "./Components/Reducers/apiReducer";
import userReducer from "./Components/Reducers/userReducer";
import { combineReducers } from "@reduxjs/toolkit";

const persistConfig = {
  key: "root",
  storage: localStorage,
};

const rootReducer = combineReducers({
  translation: translationReducer,
  api: apiReducer,
  user: userReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
});

const persistor = persistStore(store);

export { store, persistor };
