// $ Imports
import React from 'react';
import ReactDOM from 'react-dom';
import './stylesheets/index.css';
import Title from './components/Title';
import Main from './components/Main';
import Contact from './components/Contact';
import Typing from './components/Typing';


// $ Rendering

ReactDOM.render(<Typing />, document.getElementById('typing'));
ReactDOM.render(<Main />, document.getElementById('main'));
