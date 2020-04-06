import React from 'react';
import logo from './logo.svg';
import './assets/css/App.css';
import Header from './components/header'
import Slider from './components/slider'
import Sidebar from './components/sidebar'
import Footer from './components/footer'
import ArticleSeccion from './components/articleSeccion'

function App() {
  return (
    <div className="App">

      <Header />
      <Slider />

      <div className="center">
        <ArticleSeccion />
        <Sidebar />

      </div>
      <div className="clearfix"></div>
      <Footer />
    </div>
  );
}

export default App;
