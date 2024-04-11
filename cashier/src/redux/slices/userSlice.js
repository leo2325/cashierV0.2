// Dans userSlice.js
import { createSlice } from '@reduxjs/toolkit';
import { getTime } from '../../utils/getTime';


const initialState = {
    loggedInUser: null,
    loggedInUsers: [],
    loggedInUsersUpdatedConnexionTime: [],
    status: null,
    error: null,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        loginSuccess: (state, action) => {
            const { user } = action.payload;
            const ConnexionHour = getTime(); // Obtenir l'heure de connexion
            state.loggedInUsers.push(user);
            state.loggedInUsersUpdatedConnexionTime.push({ user, ConnexionHour });
            state.loggedInUser = user;
            state.status = 'SUCCEEDED';
        },
        loginFail: (state) => {
            state.status = 'FAILED';
        },
        logout: (state, action) => {
            const userToLogout = action.payload;
            state.loggedInUsers = state.loggedInUsers.filter(user => user.id !== userToLogout.id);
            state.loggedInUser = null;
            state.status = null;
        },
    },
});



export const { loginSuccess, loginFail, logout } = userSlice.actions;
export default userSlice.reducer;
