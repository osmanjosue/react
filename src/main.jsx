import React from 'react';
import ReactDOM from 'react-dom/client';

import {FirsApp} from './FirsApp';
/* import {HelloWorldApp} from './HelloWorldApp' */
import './styles.css';


    ReactDOM.createRoot(document.getElementById('root')).render(
        <React.StrictMode>
            <FirsApp title = "Hola soy goku" subTitle={123} />  {/* subTitle = "123" asigna un string pero subTitle = { 123 } asigna numero */}
        </React.StrictMode>
    );
