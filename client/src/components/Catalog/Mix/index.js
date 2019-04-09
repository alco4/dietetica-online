import React, { Component } from 'react';
import './index.scss';
import MixOptionList from './mixOptionList';
import { Link } from 'react-router-dom';


class ProductRepeater extends Component {
  constructor(props) {
    super(props);
    this.state = {
      seeds: this.props.seeds,
      mixArray: [],
      disableChecks: false
    }
    this.makeMix = this.makeMix.bind(this);
  }


  makeMix = (props) => {
    let arr = []
    if (this.state.mixArray.includes(props.name)) {
      arr = this.state.mixArray;
      arr.splice(this.state.mixArray.indexOf(props.name), 1);
      this.setState({
        mixArray: arr
      })
    } else if (this.state.mixArray.length >= 4 && !this.state.mixArray.includes(props.name)) {
      this.setState({
        disableChecks: true
      })
    } else {
      arr = this.state.mixArray;
      arr.push(props.name);
      this.setState({
        mixArray: arr
      })
    }
  };

  renderData() {
    let data =
      <ul className='mix-list'>
        {this.state.seeds.map(seed => (
          <MixOptionList key={seed['name']} name={seed['name']} ref="check_me" seedData={seed} onCheckClick={this.makeMix} disabled={this.state.disableChecks} />
        ))}
      </ul>
    return (data)
  }
  render() {
    return (
      <div className='main-container'>
   
        <div className='mix-title'>
          <h3>Activá los ingredientes que le quieras agregar a tu mix!</h3>

        </div>
        <div className='frasco-container'>
          <span>
            {this.renderData()}
          </span>
          <div className='frasco-mix'>
            <div className='selected-seed' style={{ backgroundColor: 'blue' }} >
              {this.state.mixArray[0]}
            </div>
            <div className='selected-seed' style={{ backgroundColor: 'violet' }} >
              {this.state.mixArray[1]}
            </div>
            <div className='selected-seed' style={{ backgroundColor: 'red' }} >
              {this.state.mixArray[2]}
            </div>
            <div className='selected-seed' style={{ backgroundColor: 'orange' }} >
              {this.state.mixArray[3]}
            </div>
            <div className='selected-seed' style={{ backgroundColor: 'green' }} >
              {this.state.mixArray[4]}
            </div>

          </div>
          <div className="footerMix">
            <Link to="/"><i className="fas fa-arrow-left"> Página principal</i></Link>
           
            <span className="btn">
              <span className="btn-content">Agregar a carrito</span>
              <span className="icon"><i className="fa fa-arrow-right" aria-hidden="false"></i></span>
            </span>
          </div>
        </div>
      </div>
    )
  }
}
export default ProductRepeater;