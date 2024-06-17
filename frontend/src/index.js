import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { WorkoutsContextProvider } from './context/WorkoutContext';
import { MealsContextProvider } from './context/MealContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <WorkoutsContextProvider>
      <MealsContextProvider>
        <App />
      </MealsContextProvider>
    </WorkoutsContextProvider>
  </React.StrictMode>
);