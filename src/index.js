import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
    <React.StrictMode>
        <App /> /* invoco al componente sin nada adentro*/ 
    </React.StrictMode>,
    document.getElementById('root')
)

reportWebVitals();