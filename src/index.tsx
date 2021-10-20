import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// Firebase
import './services/firebase';

// Style
import './styles/global.scss';

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);

