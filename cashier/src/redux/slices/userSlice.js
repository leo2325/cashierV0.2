import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    loggedInUser: null, // Utilisateur connecté avec heure de connexion
    loggedOutUser: null, // Utilisateur déconnecté avec heure de déconnexion selectedUser: null,
    loggedInUsers: [], // Liste d'utilisateurs connectés avec heure de connexion
    checkedOutUsers: [], // Liste d'utilisateurs déconnectés avec heure de déconnexion
    status: null,
    error: null,
   
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        loginSuccess: (state, action) => {
            const { user, connexionTime } = action.payload;
            const addConnexionTimeToUser = { ...user, connexionTime }; // Créer un nouvel objet utilisateur avec connexionTime inclus
            state.loggedInUsers.push(addConnexionTimeToUser); // Ajouter le nouvel utilisateur à loggedInUsers
            state.isLoggedIn = addConnexionTimeToUser; // Mettre à jour isLoggedIn avec le nouvel utilisateur
            state.status = 'SUCCEEDED';
        },
        loginFail: (state) => {
            state.status = 'FAILED';
        },
        logout: (state, action) => {
            const { user, logoutTime } = action.payload;
            
            // Apparait comme undefined - à corriger
            state.loggedOutUser = { ...user, logoutTime };
            
            const updatedLoggedInUsers = state.loggedInUsers.filter(
                loggedInUser => loggedInUser.id !== user.id // Supprimer l'utilisateur déconnecté de la liste loggedInUsers
            );
            
            state.checkedOutUsers.push(state.loggedOutUser);
            state.loggedInUsers = updatedLoggedInUsers; // Mettre à jour la liste loggedInUsers
            state.status = 'SUCCEEDED';
        },
    },
});


export const { loginSuccess, loginFail, logout } = userSlice.actions;
export default userSlice.reducer;