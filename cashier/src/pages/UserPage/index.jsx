import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Provider } from 'react-redux';
import { store } from '../../app/store.js';
import ConnexionForm from '../../components/user/connexion/ConnexionForm/index.jsx';
import UserList from '../../components/user/connexion/UserList/index.jsx';
import UserBoarder from '../../components/user/connexion/UserBoarder/index.jsx';
import UserProfile from '../../components/user/UserProfile';
import { getTime } from '../../utils/getTime/index.js';
import './index.css';

function UserPage() {
    const [isVisible, setIsVisible] = useState(true);

    const [selectedUser, setSelectedUser] = useState(null);
    
    const loggedInUser = useSelector(state => state.user.isLoggedIn);

    const [isProfileOpen, setIsProfileOpen] = useState(false); // État pour suivre si le profil utilisateur est ouvert
    const [userPageClass, setUserPageClass] = useState("midUserPage"); // État pour suivre la classe à appliquer à #userPage


   
    // Fonction pour ouvrir ou fermer le profil utilisateur
    const toggleProfile = () => {
        setIsProfileOpen(!isProfileOpen);
        setUserPageClass(isProfileOpen ? "midUserPage" : "fullUserPage"); // Changer la classe à fullUserPage lorsque le profil utilisateur est ouvert
    };

    return (
        <Provider store={store}>
            <div id="userPage" className={`${isVisible ? "slideIn" : "slideOut"} ${userPageClass}`}>
                <ConnexionForm 
                    user={selectedUser}
                    initialUsername={selectedUser ? selectedUser.UserName : ''}
                    getTime={getTime} 
                    loggedInUser={loggedInUser}
                    selectedUser={selectedUser}
                />
                {loggedInUser && (
                    <UserList 
                        setSelectedUser={setSelectedUser} 
                        selectedUser={selectedUser} 
                        loggedInUser={loggedInUser}
                        openProfile={toggleProfile}
                    />
                )}
                {selectedUser && <UserBoarder 
                        user={selectedUser}
                        selectedUser={selectedUser} 
                        openProfile={toggleProfile} // Passer la fonction toggleProfile à UserBoarder
                />}
                {/* Conditionnellement afficher UserProfile en fonction de l'état isProfileOpen */}
                {isProfileOpen && selectedUser && <UserProfile 
                    user={selectedUser}
                    selectedUser={selectedUser}
                />}
            </div>
        </Provider>
    );
}

export default UserPage;
