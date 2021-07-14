import reportWebVitals from './reportWebVitals';
import { state, subscribe } from './redux/state';
import App from './App';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


export const rerenderTree = (state) => ReactDOM.render(
    <React.StrictMode>
      <App state={state} />
    </React.StrictMode>,
    document.getElementById('root')
  );

rerenderTree(state);

subscribe(rerenderTree); // Yay! Observer pattern


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
