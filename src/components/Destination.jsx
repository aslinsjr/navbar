import './Destination.css'

import data from './data.json'

import { useState } from 'react'

const Destination = () => {

  const [destination, setDestination] = useState(data.destinations[0])

  return (
    <>
    <div className="destination bg"></div>
      <h3 className='title'>Pick your destination</h3>
      <div className='destination-container'>
        <img  id="show-image"  src={destination.images.png.replace("./assets/destination/", " ")} alt="Destination Image" />
        <div className="select-container">
          <div className="destination-select">
            <button onMouseOver={() => setDestination(data.destinations[0])}>Moon</button>
            <button onMouseOver={() => setDestination(data.destinations[1])}>Mars</button>
            <button onMouseOver={() => setDestination(data.destinations[2])}>Europa</button>
            <button onMouseOver={() => setDestination(data.destinations[3])}>Titan</button>
          </div>
          <h2>{destination.name}</h2>
          <p id='description'>{destination.description}</p>
          <div className="destination-travel-info">
            <div className="distance">
              <p>Avg. Distance</p>
              <span>{destination.distance}</span>
            </div>
            <div className="duration">
              <p>Est. Travel Time</p>
              <span>{destination.travel}</span>
            </div>
          </div>
        </div> 
      </div>
    </>
  )
}

export default Destination