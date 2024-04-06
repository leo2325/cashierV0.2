import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  status: "VOID",
  loggedInUser: null,
  isAuthenticated: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      return {
        ...state,
        status: "SUCCEEDED",
        loggedInUser: action.payload,
        isAuthenticated: true,
      };
    },
    loginFail: (state, action) => {
      return {
        ...state,
        status: "FAILED",
        isAuthenticated: true,
      };
    },
    logout: (state) => {
      return initialState;
    },
  },
});

export const { loginSuccess, loginFail, logout } = userSlice.actions;

export default userSlice.reducer;
