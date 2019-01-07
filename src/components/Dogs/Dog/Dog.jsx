import React, { Component } from 'react'

export class Dog extends Component {
  render() {
    return (
      <div className='Dog-wrapper'>
        <div className='Dog-header'>
          <h4>Betsy</h4>
          <p className='Dog-breed'>Pitbull</p>
        </div>
        <div className='Dog-body'>
        <p>Dog info</p>
        <p>Owner info</p>
        <p>Address</p>
        </div>
        <div className='Dog-footer'>
          <p className='Dog-action'>Dog Action</p>
        </div>
      </div>
    )
  }
}

export default Dog
