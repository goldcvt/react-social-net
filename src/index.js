import reportWebVitals from './reportWebVitals';
import store from './redux/reduxStore';
import App from './App';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


export const rerenderTree = (store) => ReactDOM.render(
    <React.StrictMode>
      <App store={store} />
    </React.StrictMode>,
    document.getElementById('root')
  );

rerenderTree(store);

store.subscribe(() => {
  rerenderTree(store)
}); // Yay! Observer pattern


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
