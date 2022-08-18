import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import reportWebVitals from './reportWebVitals';
// import { debounce } from 'lodash';
// import Test from './Test';
// import { Shadow } from './Shadow';
// import RefVSCB from './RefVSCB';
import AppTest from './AppTest';

ReactDOM.render(
  <React.StrictMode>
    <AppTest />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
