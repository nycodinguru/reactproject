import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from "react-router-dom";
import { hydrate, render } from 'react-dom';
import { ParallaxProvider } from 'react-scroll-parallax';

const rootElement = document.getElementById('root');

if (rootElement.hasChildNodes()) {
    hydrate(
    <BrowserRouter>
        <ParallaxProvider>
            <App />
        </ParallaxProvider>
    </BrowserRouter>, rootElement);
} else {
    render(   
    <BrowserRouter>
        <ParallaxProvider>
            <App />
        </ParallaxProvider>
    </BrowserRouter>, rootElement);
}


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
