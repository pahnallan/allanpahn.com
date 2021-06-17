import logo from './img/logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="App-header-container">
          <a>About</a>
          <a>Experience</a>
          <a>Education</a>
          <a>Projects</a>
          <a>Blogs</a>
        </div>
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Allan Pahn</h1>
        <div className="App-contact-container">
          <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
        <p>
          A little note about myself.
        </p>
      </header>
    </div>
  );
}

export default App;
