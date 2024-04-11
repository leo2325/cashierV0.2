import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Provider } from 'react-redux';
import { store } from '../../app/store.js';
import ConnexionForm from '../../components/connexion/ConnexionForm/index.jsx';
import EmployeeList from '../../components/connexion/UserList/index.jsx';
import UserBoarder from '../../components/connexion/UserBoarder/index.jsx';
import { getTime } from '../../utils/getTime';
import { loginSuccess, logout } from '../../redux/slices/userSlice.js';

import './index.css';

function MemberPage() {
    const dispatch = useDispatch();
    // États locaux :
    
    // Visibilité MemberPage
    const [isVisible, setIsVisible] = useState(true);

    // États local utilisateur connecté
    const [isLoggedIn, setIsLoggedIn] = useState(false); 
    
    // État local pour stocker les informations de l'utilisateur sélectionné
    const [selectedUser, setSelectedUser] = useState(null);
    
    const [isConnexionFormVisible, setConnexionFormVisible] = useState(false); // ?
    
    // utilisateur connecté
    const [connexionTour, setConnexionTour] = useState(null); // ?
// État local pour stocker les informations de l'utilisateur connecté
const [loggedInUserDetails, setLoggedInUserDetails] = useState(null);

    // Utilisez le hook useSelector pour accéder au state Redux et récupérer le tableau loggedInUsers
    const loggedInUser = useSelector(state => state.user.loggedInUser);
    const loggedInUsers = useSelector(state => state.user.loggedInUsers);

    
// Utilisez une vérification conditionnelle pour éviter l'accès à la propriété ConnexionHour si loggedInUser est null
const connexionHour = loggedInUser ? loggedInUser.ConnexionHour : null;

    // Fonction de connexion
    const handleSuccessfulLogin = () => {
        setIsLoggedIn(true);
        updateLoggedInUser(selectedUser); // Appel de la fonction pour mettre à jour loggedInUser
        setConnexionFormVisible(false); // Masquer le formulaire de connexion après la connexion
        console.log('isLoggedIn:', isLoggedIn);
        console.log('connexionTour:', connexionTour);
        console.log('connexionHour:', connexionHour);
        console.log('loggedInUser:', loggedInUser);
        console.log('loggedInUsers:', loggedInUsers);
        setTimeout(() => { 
            setConnexionFormVisible(false); 
        }, 2000);
    };


   // MemberPage/index.jsx

// ...

// Fonction mise à jour données utilisateur connecté dans le state
const updateLoggedInUser = (user) => {
    const timeString = getTime();
    // Mettre à jour l'utilisateur connecté dans le state
    setConnexionTour(timeString);
    // Mettre à jour loggedInUser avec les données de l'utilisateur connecté
    setLoggedInUserDetails(user);
    // Vérification que user n'est pas null et qu'il contient les propriétés user et connexionTime
    if (user && user.user && user.connexionTime) {
        // Mettre à jour loggedInUsers avec l'utilisateur mis à jour
        dispatch(loginSuccess(user)); // Assurez-vous d'envoyer l'utilisateur en tant que payload
    } else {
        console.error("Erreur : L'objet user est null ou ne contient pas les propriétés nécessaires.");
    }
};



    // Utilisation de la fonction getTime pour obtenir l'heure exacte
    const timeString = getTime();

    // Fonction de déconnexion
    const handleLogout = (user) => {
        dispatch(logout(user)); 
        const updatedLoggedInUsers = loggedInUser.filter(u => u.id !== user.id);
        setSelectedUser(null);   
        setIsLoggedIn(updatedLoggedInUsers.length > 0); 
    };

    return (
        <Provider store={store}>
            <div id="memberPage" className={isVisible ? "slideIn" : "slideOut"}>
                <ConnexionForm 
                    onSuccessfulLogin={handleSuccessfulLogin} 
                    user={selectedUser}
                    initialUsername={selectedUser ? selectedUser.UserName : ''}
                    getTime={getTime} 
                    loggedInUser={loggedInUser}
                    selectedUser={selectedUser}
                />
                {loggedInUser && (
                    <EmployeeList 
                        setSelectedUser={setSelectedUser} 
                        selectedUser={selectedUser} 
                        loggedInUser={loggedInUser}
                    />
                )}
                {selectedUser && <UserBoarder user={selectedUser} onLogout={handleLogout} />}
            </div>
        </Provider>
    );
    }

export default MemberPage;
