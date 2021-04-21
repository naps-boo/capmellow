import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <div>
      
      <header className='topbar'>
        <img src={logo} className="App-logo" alt="logo" />
          <NavBar></NavBar>
      </header>
      <a
          className="App-link"
          href="http://localhost:3000/"
          target="_blank"
          rel="noopener noreferrer"
        >
         Home
        </a>
    </div>
  );
}

export default App;
