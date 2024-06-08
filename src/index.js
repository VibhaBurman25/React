import React from 'react';
import ReactDOM from 'react-dom/client';


import App from './App';
// import Header from './components/Header';
// import Mainpage from './components/Mainpage';
// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
  <App />
  {/* <Mainpage />
  <Header /> */}

  </div>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
