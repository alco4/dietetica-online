import React, { Component } from 'react';
import './index.css';
import SeedOptionList from './SeedOptionList';
import Seed from './Seed';
import { Link } from 'react-router-dom';

class Seeds extends Component {
  constructor(props) {
    super(props)
    this.state = {
      seeds: this.props.seeds,
      showLoader: true,
      seedClicked: false,
      seedData: {}
    }
    this.renderData = this.renderData.bind(this);
    this.renderProductView = this.renderProductView.bind(this);

  }
  renderProductView(props) {
    this.setState({
      seedClicked: true
    })
    return (
      <div>ASPDOSAKOPD,ASPODSA,</div>
    )
  }
  renderData() {
    let data = '';
    if (this.state.seedClicked === true) {
      data = <Seed seedData={this.state.seedData} />
    }
    else {
      data =
        <ul id="seedsList">
          {this.state.seeds.map(seed => (
            <SeedOptionList key={seed['name']} name={seed['name']} seedData={seed} onSeedClick={this.renderProductView} />
          ))}
        </ul>

    }
    return (
      data
    )
  }
  render() {

    return (
      <div className='main-container'>
        {this.renderData()}
        <Link to="/"><i className="fas fa-arrow-left"> Página principal</i></Link>
      </div>
    )
  }
}
export default Seeds;