import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import { BrowserRouter, Route } from 'react-router-dom';
import Music from './components/Music/Music';
import Feed from './components/Feed/Feed';
import Settings from './components/Settings/Settings';
import { Provider } from 'react-redux';
import store from './redux/reduxStore';

const App = (props) => {

  return (
    <BrowserRouter>
      <Provider store={store}>
        <div className='app-wrapper'>
          <Header />
          <Navbar state={props.store.getState().friends} />
          <div className="app-wrapper-content">
            <Route render={() => <Profile state={props.store.getState().profile}
              dispatch={props.store.dispatch.bind(props.store)} />} path="/profile" />
            <Route render={() => <Dialogs state={props.store.getState().dialogs}
              dispatch={props.store.dispatch.bind(props.store)} />} path="/dialogs" />
            <Route component={Music} path="/music" />
            <Route component={Feed} path="/feed" />
            <Route component={Settings} path="/settings" />
          </div>
        </div>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
