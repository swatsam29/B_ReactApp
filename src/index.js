import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import SignUp from './SignUp';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Clear the existing HTML content
document.body.innerHTML = '<div id="app"></div>';

// Render your React component instead
const root = createRoot(document.getElementById('app'));
root.render(<SignUp />);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
