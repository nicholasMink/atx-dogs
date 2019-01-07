import React, { Component } from 'react'
import axios from 'axios'
import Dog from './Dog/Dog'
import './Dogs.scss'

export class Dogs extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       isLoading: true,
       dogs: null,
    }
  }

  getDogs() {
    axios.get('https://data.austintexas.gov/resource/h8x4-nvyi.json')
    .then(res => {
      const dogs = res.data.map(dog => [dog]);
      this.setState({dogs: dogs, isLoading: false})
    })
  }
  
  componentDidMount() {
    this.setState({isLoading: true})
    this.getDogs()
  }

  render() {
    const {
      dogs,
      isLoading,
    } = this.state
    if (isLoading) return <p>Loading</p>
    return (
      <div className='Dogs-wrapper'>
        {
          dogs.map(dog => (dog) ? <Dog key={dog[0].description_of_dog} dog={dog[0]} /> : null)
        }
      </div>
    )
  }
}

export default Dogs
