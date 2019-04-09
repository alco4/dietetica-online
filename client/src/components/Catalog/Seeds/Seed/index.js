import React, { Component } from 'react';
import './index.scss'

class Seed extends Component {
  constructor(props){
    super(props)
    this.checkboxHandler = this.checkboxHandler.bind(this);
  }
  checkboxHandler(status){
    console.log(status);
  }
  render() {
    return (
      <div>
        <div>{this.props.seedData['name']}</div>
        <div>
          <img alt="" src="data:image/jpeg;base64,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" />
        </div>
        <div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
           sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Turpis nunc eget lorem dolor sed. Neque convallis a cras semper auctor neque vitae tempus.
             Sit amet volutpat consequat mauris nunc congue nisi vitae.
              Felis donec et odio pellentesque diam.
               Etiam non quam lacus suspendisse faucibus interdum posuere lorem.
               </p>
        </div>
        <div className="buy-container">
          <input type="radio" name="foo" onChange={ this.checkboxHandler } />
            <input type="radio" name="foo" onChange={ this.checkboxHandler } />
              <input type="radio" name="foo" onChange={ this.checkboxHandler } />
                <span className="btn">
                  <span className="btn-content">Agregar a carrito</span>
                  <span className="icon"><i className="fa fa-arrow-right" aria-hidden="false"></i></span>
                </span>
        </div>
      </div>
            );
          }
        }
export default Seed;