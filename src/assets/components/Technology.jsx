import data from './data.json'

import './Technology.css'

import { useState } from 'react'

const Technology = () => {

  const body = document.querySelector("body")
  body.style.backgroundImage = "url(/background-technology-desktop.jpg)"

  const [technology, setTechnology] = useState(data.technology[0])


  return (
    <>
      <h3 className='title'>Space Launch 101</h3>
      <div className='technology-container'>
        <div className="selec-technology">
          <button className='select-btn' id='btn3' style={technology.name === "Launch vehicle" ? {backgroundColor: 'white' , color: 'black', fontSize: "1.2rem"} : {}} onClick={() => setTechnology(data.technology[0])}>3</button>
          <button className='select-btn' id='btn2' style={technology.name === "Spaceport" ? {backgroundColor: 'white', color: 'black', fontSize: "1.2rem"} : {}} onClick={() => setTechnology(data.technology[1])}>2</button>
          <button className='select-btn' id='btn1' style={technology.name === "Space capsule" ? {backgroundColor: 'white', color: 'black', fontSize: "1.2rem"} : {}} onClick={() => setTechnology(data.technology[2])}>1</button>
        </div>
        <div className="technology-description">
          <h3>The technology...</h3>
          <h2>{technology.name}</h2>
          <p>{technology.description}</p>
        </div>
        <img id='technology-img' src={technology.images.portrait.replace("./assets/technology/", " ")} alt="Technology Image" />
      </div>
    </>
  )
}

export default Technology