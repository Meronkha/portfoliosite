// $ Imports
import React from 'react';
import ReactDOM from 'react-dom';
import './stylesheets/index.css';
import App from './components/App';
import {Button} from './components/App';
import Header from './components/Header';
import Title from './components/Title';
import Main from './components/Main';
import Contact from './components/Contact';
import Typing from './components/Typing';


// $ Rendering


//ReactDOM.render(<Button />, document.getElementById('root'));
ReactDOM.render(<Header />, document.getElementById('header'));
ReactDOM.render(<Typing />, document.getElementById('typing'));
ReactDOM.render(<Main />, document.getElementById('main'));
// ReactDOM.render(<Title />, document.getElementById('title'));
// ReactDOM.render(<Contact />, document.getElementById('contact'));
