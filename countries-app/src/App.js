import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <Home />
        <About />
        <Contact/>
      </div>
    </div>
  );
}

export default App;
