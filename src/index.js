import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import '../src/Sass/sass.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Sdata from './Component/Sdata';
console.log(Sdata[0]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <App/>
  </React.StrictMode>
);


reportWebVitals();
