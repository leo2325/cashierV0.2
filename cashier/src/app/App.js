import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import TopNav from '../components/navs/TopNav';
import Home from '../components/Home';
import UserPage from '../pages/UserPage';
import { Provider } from 'react-redux';
import { store } from '../app/store.js'; // Importez votre store Redux ici

function App() {
  const [isConnexionModuleVisible, setConnexionModuleVisible] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Ajoutez un état pour la connexion de l'utilisateur

  const toggleConnexionModule = () => {
    setConnexionModuleVisible(!isConnexionModuleVisible);
  };

  const handleSuccessfulLogin = () => {
    setIsLoggedIn(true); // Mettre à jour l'état d'authentification après une connexion réussie
    //setConnexionFormVisible(!isConnexionFormVisible); // Cacher le formulaire de connexion après une connexion réussie
    setTimeout(() => { 
      setConnexionModuleVisible(false); 
    }, 2000);
  };

  return (
    <div className="App">
      <Provider store={store}> {/* Fournissez votre store Redux */}
        <BrowserRouter>
          <TopNav toggleConnexionModule={toggleConnexionModule} isLoggedIn={isLoggedIn} />
        
          <div id="main_container">
            {isConnexionModuleVisible && <UserPage onSuccessfulLogin={handleSuccessfulLogin} />}
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </div>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
