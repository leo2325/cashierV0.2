// store.js
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import userReducer from '../redux/slices/userSlice'; // Importez le slice de l'utilisateur

// Combinez les reducers
const rootReducer = combineReducers({
  user: userReducer, // Utilisez le slice de l'utilisateur
});

// Créez le store
export const store = configureStore({
  reducer: rootReducer,
});
