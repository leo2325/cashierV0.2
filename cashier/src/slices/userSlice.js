import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    loggedInUser: null, // User qui se connecte
    loggedOutUser: null, // User qui se déconnecte
    loggedInUsers: [], // Tableau user connectés
    shiftUsers: [], // Tableau user en service
    status: null,
    error: null,
   
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        loginSuccess: (state, action) => {    
            const { user, connexionTime } = action.payload;
            const addConnexionTimeToUser = { ...user, connexionTime }; // Créer nouvel objet user avec connexionTime inclus
            state.loggedInUsers.push(addConnexionTimeToUser); // Ajouter user à loggedInUsers
            state.shiftUsers.push(addConnexionTimeToUser); // Ajouter le nouvel utilisateur à loggedInUsers
            state.loggedInUser = addConnexionTimeToUser; // Mettre à jour isLoggedIn avec le nouvel utilisateur
            state.isLoggedIn = addConnexionTimeToUser; // Mettre à jour isLoggedIn avec le nouvel utilisateur
            state.status = 'SUCCEEDED';
        },
        loginFail: (state) => {
            state.status = 'FAILED';
        },
        logout: (state, action) => {
            const { user, logoutTime } = action.payload;
            const userIndex = state.shiftUsers.findIndex(
                (u) => u.id === user.id
            );
            state.loggedOutUser = { ...user, logoutTime };
            if (userIndex !== -1) {
                state.shiftUsers[userIndex].logoutTime = logoutTime;
                state.loggedInUsers = state.loggedInUsers.filter(
                    (loggedInUser) => loggedInUser.id !== user.id
                );
            } else {
                console.log('there is a problem in the UserSlice')
            }
            state.status = 'SUCCEEDED';
        },        
    },
});


export const { loginSuccess, loginFail, logout } = userSlice.actions;
export default userSlice.reducer;