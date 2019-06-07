import React, { Component } from 'react';
import './App.css';
import Catalog from './components/Catalog/index.js';
import Header from "./components/Header/index.js";
import Offer from "./components/Offer/index.js";
import Footer from "./components/Footer/index.js";

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      scrollPosition: window.scrollY,
      collapsedMenu: false
    }
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <Header />
        </div>
        <div className="App-promotion">
        </div>
        <div className="App-offers">
          <Offer />
          <Offer />
          <Offer />
        </div>
        <div className="App-offers">
          <Offer />
          <Offer />
          <Offer />
        </div>
        <Footer/>
      </div>
    );
  }
}

export default App;
