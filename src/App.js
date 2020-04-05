import React from 'react';
import logo from './logo.svg';
import './assets/css/App.css';
import Header from './components/header'
import Slider from './components/slider'
import Sidebar from './components/sidebar'
import Footer from './components/footer'

function App() {
  return (
    <div className="App">
      
      <Header />
      <Slider />

      <div className="center">
        <section id="content">

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

        </section>
        <Sidebar />

      </div>
    </div>

  );
}

export default App;
