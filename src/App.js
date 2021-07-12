import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import { BrowserRouter, Route } from 'react-router-dom';
import Music from './components/Music/Music';
import Feed from './components/Feed/Feed';
import Settings from './components/Settings/Settings';
import { functions } from './redux/state';

const App = (props) => {

  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Navbar state={props.state.friends} />
        <div className="app-wrapper-content">
          <Route render={() => <Profile state={props.state.profile} functions={functions.profile} />} path="/profile" />
          <Route render={() => <Dialogs state={props.state.dialogs} functions={functions.dialogs} />} path="/dialogs" />
          <Route component={Music} path="/music" />
          <Route component={Feed} path="/feed" />
          <Route component={Settings} path="/settings" />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
