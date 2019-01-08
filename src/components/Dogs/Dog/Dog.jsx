import React, { Component } from 'react'

export class Dog extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       dog: props.dog,
    }
  }

  getOwnerName(first, last) {
    return `${first} ${last}`
  }

  getDogName(str) {
    let lastQuote = str.indexOf(',') || str.indexOf('"') || str.indexOf('”', 0);
    let dogName = str.substring(1, lastQuote);
    if (dogName.includes('"')) {
      lastQuote = dogName.indexOf('"');
      dogName = dogName.substring(0, lastQuote);
    }
    if (dogName.includes('”')) {
      lastQuote = dogName.indexOf('”');
      dogName = dogName.substring(0, lastQuote);
    }
    return dogName
  }

  render() {
    const {
      dog,
    } = this.state;
    return (
      <div className='Dog-wrapper'>
        <div className='Dog-header'>
          <h4>{this.getDogName(dog.description_of_dog)}</h4>
          <p className='Dog-breed'>{dog.zip_code}</p>
        </div>
        <div className='Dog-body'>
          <p>{dog.description_of_dog}</p>
          <p>{this.getOwnerName(dog.first_name, dog.last_name)}</p>
          <p>{`${dog.address}, ${dog.zip_code}`}</p>
        </div>
        <div className='Dog-footer'>
          <button className='Dog-action'>Dog Action</button>
        </div>
      </div>
    )
  }
}

export default Dog
