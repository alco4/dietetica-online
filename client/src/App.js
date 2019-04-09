import React, { Component } from 'react';
import './App.css';
import Catalog from './components/Catalog/index.js';
import Header from "./components/Header/index.js";

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
        <div className="App-body">
          <Catalog />
        </div>
        <div>
        </div>
      </div>
    );
  }
}

export default App;
