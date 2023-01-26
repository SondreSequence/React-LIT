import { createSlice } from "@reduxjs/toolkit";

export const userReducer = createSlice({
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

// Action creators are generated for each case reducer function
export const { setUsername, setID } = userReducer.actions;

export default userReducer.reducer;
