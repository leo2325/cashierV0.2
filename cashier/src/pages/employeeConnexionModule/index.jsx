// Dans votre fichier employeeConnexionModule.jsx
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'; // Importez useDispatch et useSelector
import { Provider } from 'react-redux';
import { store } from '../../app/store.js';
import ConnexionForm from '../../components/connexion/ConnexionForm';
import EmployeeList from '../../components/connexion/EmployeeList';
import TeamMateBoarder from '../../components/connexion/TeamMateSettings/TeamMateBoarder';

import { loginSuccess, logout } from '../../redux/actions/loginActions.jsx';

function EmployeeConnexionModule() {
    const dispatch = useDispatch();
    const [isVisible, setIsVisible] = useState(true);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isConnexionFormVisible, setConnexionFormVisible] = useState(false);

    const handleSuccessfulLogin = () => {
        setIsLoggedIn(true);
        setConnexionFormVisible(false);
        setTimeout(() => { 
          setConnexionFormVisible(false); 
        }, 2000);
    };

    return (
        <Provider store={store}>
            <div id="employeeConnexionModule" className={isVisible ? "slideIn" : "slideOut"}>
                <ConnexionForm 
                    onSuccessfulLogin={handleSuccessfulLogin} 
                    setIsLoggedIn={setIsLoggedIn} 
                    setConnexionFormVisible={setConnexionFormVisible} />
                {isLoggedIn && <EmployeeList />}
                {isLoggedIn && <TeamMateBoarder />}
            </div>
        </Provider>
    );
}

export default EmployeeConnexionModule;
