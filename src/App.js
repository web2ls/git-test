import logo from './logo.svg';
import './App.css';
import { HeaderTitle } from './new/HeaderTitle';

function App() {
  return (
    <div className="App">
      <HeaderTitle text={ 'Header' } isShow={ true } />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
