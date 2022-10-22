import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import axios from "axios";
import './styles/index.css';
import 'bootstrap/dist/css/bootstrap.css';
 
axios.defaults.withCredentials = true;
 
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);