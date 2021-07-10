import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import { BrowserRouter, Route } from 'react-router-dom';
import Music from './components/Music/Music';
import Feed from './components/Feed/Feed';
import Settings from './components/Settings/Settings';

const App = (props) => {

  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Navbar/>
        <div className="app-wrapper-content">
          <Route render={() => <Profile posts={props.state.profile.postsData} user={props.state.profile.userData} />} path="/profile" />
          <Route render={() => <Dialogs messageData={props.state.dialogs.messageData} dialogItemsData={props.state.dialogs.dialogItemsData} />} path="/dialogs" />
          <Route component={Music} path="/music" />
          <Route component={Feed} path="/feed" />
          <Route component={Settings} path="/settings" />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
