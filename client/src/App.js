import React, { Component } from 'react';
import './App.css';
import Catalog from './components/Catalog/index.js';
import Header from "./components/Header/index.js";
import Offer from "./components/Offer/index.js";

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
          <div className="rombo"></div>
        </div>
        <div className="App-offers">
          <Offer />
          <Offer />
          <Offer />
        </div>
        <div className="App-body">
        </div>
        <div>
        </div>
      </div>
    );
  }
}

export default App;
