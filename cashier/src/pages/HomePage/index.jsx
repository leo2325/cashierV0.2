import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Provider } from 'react-redux';
import { store } from '../../app/store.js';
import ConnexionForm from '../../components/connexion/ConnexionForm/index.jsx';
import EmployeeList from '../../components/connexion/EmployeeList/index.jsx';
import TeamMateBoarder from '../../components/connexion/TeamMateSettings/TeamMateBoarder/index.jsx';

function HomePage() {
    const dispatch = useDispatch();
    const [isVisible, setIsVisible] = useState(true);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isConnexionFormVisible, setConnexionFormVisible] = useState(false);
    const [selectedUser, setSelectedUser] = useState(null); // État local pour stocker les informations de l'utilisateur sélectionné
    const loggedInUsers = useSelector(state => state.user.loggedInUsers);


    return (
        <Provider store={store}>
            <div className="homePage" >
                <ConnexionForm />
                <EmployeeList />
                <TeamMateBoarder />
            </div>
        </Provider>
    );
}

export default HomePage;
