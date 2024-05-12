// userSlice.js
import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    userData: null,
    userDetails: null,
  },
  reducers: {
    setUser: (state, action) => {
      state.userData = action.payload.userData;
      state.userDetails = action.payload.userDetails;
    },
    logoutUser: (state) => {
      state.userData = null;
      state.userDetails = null;
    },
  },
});

export const { setUser, logoutUser } = userSlice.actions;

export default userSlice.reducer;
