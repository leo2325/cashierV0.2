import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Provider } from 'react-redux';
import { store } from '../../app/store.js';
import ConnexionForm from '../../components/user/ConnexionForm/index.jsx';
import UserList from '../../components/user/UserList/index.jsx';
import UserBoarder from '../../components/user/UserBoarder/index.jsx';
import UserProfile from '../../components/user/UserProfile';
import { getTime } from '../../utils/getTime/index.js';
import './index.css';

function UserPage() {
    const [isVisible, setIsVisible] = useState(true);
    const [selectedUser, setSelectedUser] = useState(null);
    const [isProfileOpen, setIsProfileOpen] = useState(false); // État pour suivre si le profil utilisateur est ouvert
    const [userPageClass, setUserPageClass] = useState("midUserPage"); // État pour suivre la classe à appliquer à #userPage

    const loggedInUser = useSelector(state => state.user.isLoggedIn);

    const loggedInUsers = useSelector(state => state.user.loggedInUsers);
    const loggedOutUser = useSelector(state => state.user.loggedOutUser); // Tableau utilisateurs connectés
    const shiftUsers = useSelector(state => state.user.shiftUsers); // Tableau utilisateurs connectés


   
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
                    loggedInUsers={loggedInUsers}
                    loggedOutUser={loggedOutUser}
                    shiftUsers={shiftUsers}
                />
                
                {loggedInUser && (
                    <UserList 
                        setSelectedUser={setSelectedUser} 
                        selectedUser={selectedUser} 
                        loggedInUser={loggedInUser}
                        loggedInUsers={loggedInUsers}
                        openProfile={toggleProfile}
                    />
                )}
                
                {selectedUser && 
                    <UserBoarder 
                        user={selectedUser}
                        loggedInUsers={loggedInUsers}
                        selectedUser={selectedUser} 
                        openProfile={toggleProfile}
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
