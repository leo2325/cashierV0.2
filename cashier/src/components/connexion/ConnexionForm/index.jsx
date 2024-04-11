// Importez useState et useEffect si nécessaire
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loginSuccess, loginFail } from '../../../redux/slices/userSlice';
import { teamDatas } from '../../../datas/teamDatas';
import logoCashierCompany from "../../../assets/logo/logoCashierCompany.png";
import logInOutIcon from '../../../assets/connexion/logInOutIcon.png';
import { updateLoggedInUser } from '../../../redux/slices/userSlice';

import './index.css';
import '../../../style/animations.css';

function ConnexionForm({ onSuccessfulLogin, getTime, loggedInUser, selectedUser }) {
    
    // États locaux
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [formState, setFormState] = useState({
        rotateEffect: false,
        showError: false,
        showSuccess: false
    });

    const dispatch = useDispatch();

    const loginSuccessStatus = useSelector(state => state.user.status === "SUCCEEDED");
    const loginFailStatus = useSelector(state => state.user.status === "FAILED");

    useEffect(() => {
        if (loginSuccessStatus) {
            // Active l'effet de rotation
            setFormState(prevState => ({
                ...prevState,
                rotateEffect: true,
                showError: false,
                showSuccess: true
            }));
            // Réinitialiser les champs du formulaire après une connexion réussie
            //  setUsername('');
            //  setPassword('');
        } else {
            setFormState(prevState => ({
                ...prevState,
                showError: true,
                showSuccess: false
            }));
        }
    }, [loginSuccessStatus, loginFailStatus, getTime]);

    // Mettre à jour la valeur du champ 'username' lorsque selectedUser change
    useEffect(() => {
        if (selectedUser) {
            setUsername(selectedUser.UserName);
        }
    }, [selectedUser]);

    // Dans la fonction handleLogin
    const handleLogin = async (event) => {
        event.preventDefault();
        const user = teamDatas.find(user => user.UserName === username && user.Password === password);
        if (user) {
            dispatch(loginSuccess({ user, connexionTime: getTime() }));
            onSuccessfulLogin();
        } else {
            dispatch(loginFail()); 
        }
    };
    
    

    return (
        <form id="connexionForm" onSubmit={handleLogin}>
            <img 
                src={logoCashierCompany}
                className={`logoCashierCompany ${formState.rotateEffect ? "rotate-effect" : ""}`}
                alt='Logo CashierCompany'
            />
            <div className="edit-input">
                <label htmlFor="userName"></label>
                <input
                    type="text"
                    id="userName"
                    placeholder='Username'
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
            </div>
            <div className="edit-input">
                <label htmlFor="password"></label>
                <input
                    type="password"
                    id="password"
                    placeholder='Password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>

            <input type="button" id="recoveringPasswordBtn" value="Forgot something ?" />
            
            <button type="submit" name="submit" className="connexionButton_container">
                <img src={logInOutIcon} className="logInOutIcon" alt='logInOutIcon'/>
            </button>    
            
            <div className='connexionTryStatus'>
                {loginFailStatus && (
                    <div className={`infoCardsUser ${formState.showError ? "scaleIn" : ""}`}>
                        <p className="errorMessage">Non reconnu</p>
                    </div>
                )}
                {loginSuccessStatus && (
                    <div className={`infoCardsUser ${formState.showSuccess ? "scaleIn" : ""}`}>
                        <p className="successMessage"> Hello {loggedInUser ? loggedInUser.UserName : 'User not logged in'}</p>
                    </div>
                )}
            </div>   
        </form>
    );
}

export default ConnexionForm;
