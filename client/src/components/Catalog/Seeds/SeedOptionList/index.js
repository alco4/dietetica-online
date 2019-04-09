import React, { Component } from 'react';

class SeedOptionList extends Component {
  handleClick = () => {
    this.props.onSeedClick(this.props.seedData);
  }

  render() {
    return (
      <li className='seed-item' onClick={this.handleClick} >{this.props.name}</li>
    );
  }
}
export default SeedOptionList;