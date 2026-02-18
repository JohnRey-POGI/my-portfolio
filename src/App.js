// import logo from './logo.svg';
import './App.css';
import { NavBar } from './components/NavBar.js';
import { Home } from './components/Home.js';
import { About } from './components/About.js';
import { Skills } from './components/Skills.js';
import { ContactMe } from './components/ContactMe.js';
import { Footer } from './components/Footer.js';
import { ScrollToTop } from './components/ScrollToTop.js';
import 'bootstrap/dist/css/bootstrap.min.css'
import Projects from './components/Projects.js';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Home></Home>
      <About></About>
      <Skills></Skills>
      <Projects></Projects>
      <ContactMe></ContactMe>
      <Footer></Footer>
      <ScrollToTop></ScrollToTop>
    </div>
  );
}

export default App;
