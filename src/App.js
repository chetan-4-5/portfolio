import React from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './styles.css';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="content-wrapper">
        <Sidebar /> 
        <main className="main-content">
          <AboutMe />
          <Projects />
          <Contact />
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default App;
