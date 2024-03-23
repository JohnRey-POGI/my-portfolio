// import logo from './logo.svg';
import './App.css';
import { NavBar } from './components/NavBar.js';
import { Home } from './components/Home.js';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Home></Home>

    </div>
  );
}

export default App;
