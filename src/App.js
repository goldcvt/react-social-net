import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import { BrowserRouter, Route } from 'react-router-dom';
import Music from './components/Music/Music';
import Feed from './components/Feed/Feed';
import Settings from './components/Settings/Settings';
import { Provider } from 'react-redux';
import store from './redux/reduxStore';
import DialogsContainer from './components/Dialogs/DialogsContainer';

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
            <Route render={() => <DialogsContainer />} path="/dialogs" />
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
