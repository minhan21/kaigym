// userSlice.js
import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    userData: null,
    userDetails: null,
    isLoading: false,
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
    setLoadingState: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});

export const { setUser, logoutUser, setLoadingState } = userSlice.actions;

export default userSlice.reducer;
