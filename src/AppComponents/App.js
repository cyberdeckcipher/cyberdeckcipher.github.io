import logo from '../Images/logo.svg';
import AppHeader from './AppHeader';
import './App.css';



function App() {
  return (
    <div className="App">
      <AppHeader />
      <img src={logo} className="App-logo" alt="logo" />
    </div>
  );
}

export default App;
