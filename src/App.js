import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

// Components
import { NavBar } from './components/NavBar.js';
import { Home } from './components/Home.js';
import { About } from './components/About.js';
import { Skills } from './components/Skills.js';
import { Projects } from './components/Projects.js';
import { ContactMe } from './components/ContactMe.js';
import { Footer } from './components/Footer.js';
import { ScrollToTop } from './components/ScrollToTop.js';

// 3D Background
import { Background3D } from './components/Background3D';

function App() {
  return (
    <div className="App">
      <Background3D />
      <NavBar></NavBar>
      <main>
        <Home></Home>
        <About></About>
        <Skills></Skills>
        <Projects></Projects>
        <ContactMe></ContactMe>
      </main>
      <Footer></Footer>
      <ScrollToTop></ScrollToTop>
    </div>
  );
}

export default App;
