import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    loggedInUser: null,
    loggedInUsers: [], // Initialisez loggedInUsers avec un tableau vide
    status: null,
    error: null,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        loginSuccess: (state, action) => {
            state.loggedInUsers.push(action.payload);
            state.loggedInUser = action.payload;
            state.status = 'SUCCEEDED';
        },
        loginFail: (state) => {
            state.status = 'FAILED';
        },
        logout: (state) => {
            state.loggedInUsers = [];
            state.loggedInUser = null;
            state.status = null;
        },
    },
});

export const { loginSuccess, loginFail, logout } = userSlice.actions;
export default userSlice.reducer;
