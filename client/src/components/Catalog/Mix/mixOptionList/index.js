import React, { Component } from 'react';

class mixOptionList extends Component {

  activeCheck = () => {
    this.props.onCheckClick(this.props.seedData);
  }

  render() {
    return (
      <div className='mix-item' key={this.props.name}>
        <label htmlFor={this.props.name}>{this.props.name} </label>
        <input id={this.props.name} onChange={ this.activeCheck } type="checkbox" disabled={this.props.disabled} />
        <label htmlFor={this.props.name}> </label>
      </div>
    );
  }
}
export default mixOptionList;