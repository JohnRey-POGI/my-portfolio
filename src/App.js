// import logo from './logo.svg';
import './App.css';
import { NavBar } from './components/NavBar.js';
import { Home } from './components/Home.js';
import { Skills } from './components/Skills.js';
import { ContactMe } from './components/ContactMe.js';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Home></Home>
      <Skills></Skills>
      <ContactMe></ContactMe>
    </div>
  );
}

export default App;
