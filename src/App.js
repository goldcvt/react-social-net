import logo from './logo.svg';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Technologies />
    </div>
  );
}

const Technologies = () => {
  return (
    <div>
      <ul>
        <li>
          React
        </li>
        <li>
          Redux
        </li>
      </ul>
    </div>
  );
}

const Header = () => {
  return (
    <div>
      <a href="#s">Home</a>
      <a href="#s">Feed</a>
      <a href="#s">Messages</a>
    </div>
  )
}

const ReactBoilerplate = () => (
<header className="App-header">
<img src={logo} className="App-logo" alt="logo" />
<p>
  <code>JSX for gangsta life!</code>
</p>
<p>
  <a className="App-link" href="https://vk.com">Pull</a>
   &nbsp;out and spin to reload!
</p>
</header>
);

export default App;
