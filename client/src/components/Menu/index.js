import React, { Component } from 'react';
import './index.css';

class Menu extends Component {
  render() {
    return (
      <nav>
        <ul>
          <li>Inicio</li>
          <li>Nosotros</li>
          <li>Servicios</li>
          <li>Contáctanos</li>
        </ul>
      </nav>
    )
  }
}

export default Menu;