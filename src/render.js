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