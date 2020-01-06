import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App/App';
import FEATURE from './STORE'

ReactDOM.render(<App feature={FEATURE}/>, document.getElementById('root'));
