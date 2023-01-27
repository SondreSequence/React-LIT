import { createSlice } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

const persistConfig = {
  key: "user",
  storage: storage,
  whitelist: ["userName", "id"], // only userName and id will be persisted
};

const userSlice = createSlice({
  name: "user",
  initialState: {
    id: 0,
    userName: "",
  },
  reducers: {
    setUsername: (state, action) => {
      state.userName = action.payload;
    },
    setID: (state, action) => {
      state.id = action.payload;
    },
  },
});

export const { setUsername, setID } = userSlice.actions;
export default persistReducer(persistConfig, userSlice.reducer);
