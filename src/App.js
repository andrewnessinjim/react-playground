import logo from './logo.svg';
import './App.css';
import AppList from './AppsList';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <AppList/>

    </div>
  );
}

export default App;
