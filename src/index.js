import reportWebVitals from './reportWebVitals';
import store from './redux/reduxStore';
import App from './App';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


// initial fetch of data should happen here via dispatches, see
// https://stackoverflow.com/questions/36784139/where-do-i-fetch-initial-data-from-server-in-a-react-redux-app

ReactDOM.render(
    <React.StrictMode>
      <App store={store} />
    </React.StrictMode>,
    document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
