import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';
// import axios from 'axios';

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);

// axios.get('https://rickandmortyapi.com/api/episode/')

//         .then(response => console.log(response))
//         .catch(errors => console.log('And that\'s the wayyyy the news goes!', errors))


