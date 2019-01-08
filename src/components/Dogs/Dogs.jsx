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
       zipCodes: null,
    }
  }

  getDogs(e) {
    let zip = 'all';
    if (e) {
      zip = e.target.value;
    }
    axios.get('https://data.austintexas.gov/resource/h8x4-nvyi.json')
    .then(res => {
      const dogs = res.data.map(dog => [dog])
      const zips = res.data.map(dog => dog.zip_code);
      const zipCount = zips.reduce(function (obj, item) {
        if (!obj[item]) {
          obj[item] = 0;
        }
        obj[item]++;
        return obj;
      }, {})
      this.setState({ dogs: dogs, zipCodes: zipCount, isLoading: false })
      if (zip !== 'all') {
        const filteredDogs = this.state.dogs.filter(dog => dog[0].zip_code === zip)
        this.setState({ dogs: filteredDogs })
      }
    });
  }

  getDogsByZip(zip) {
    const filteredDogs = this.state.dogs.filter(dog => dog[0].zip_code === zip)
    this.setState({ dogs: filteredDogs})
  }

  componentDidMount() {
    this.setState({isLoading: true})
    this.getDogs()
  }

  render() {
    const {
      dogs,
      zipCodes,
      isLoading,
    } = this.state
    if (isLoading) return <p>Loading</p>
    return (
      <div className='Dogs-wrapper'>
      <div className='Dogs-filter'>
        <select onChange={this.getDogs.bind(this)}>
          <option value='all'>All</option>
          {
            Object.entries(zipCodes).map(zip => <option key={zip[0]} value={zip[0]}>{`${zip[0]} (${zip[1]})`}</option> )
          }
        </select>
      </div>
        {
          dogs.map(dog => (dog) ? <Dog key={dog[0].description_of_dog} dog={dog[0]} /> : null)
        }
      </div>
    )
  }
}

export default Dogs
