import data from './data.json'

import "./Crew.css"

import { useState } from 'react'

const Price = () => {

  const body = document.querySelector("body")
  body.style.backgroundImage = "url(public/background-crew-desktop.jpg)"

  const [index, setIndex] = useState(0)
  const [crew, setCrew] = useState(data.crew[index])
  
  if(index <= 3){
    setTimeout(() => {
      setIndex(index + 1)
      setCrew(data.crew[index])
    }, 6000)
  }else {
    setIndex(0)
  }
  return (
  <>
    <h3 className='title'>Meet your crew</h3>
    <div className='crew-container'>
      <div className="crew-description">
        <h3>{crew.role}</h3>
        <h2>{crew.name}</h2>
        <p>{crew.bio}</p>
      </div>
      <img id='crew-img' src={ crew.images.png.replace("./assets/crew/", " ")}alt="" />
    </div>
    <div className="selector-container">
      <button className='crew-btn' style={crew.role === "Commander" ? {opacity:'1'} : {}} onClick={() => setCrew(data.crew[0])}></button>
      <button className='crew-btn' style={crew.role === "Mission Specialist" ? {opacity:'1'} : {}} onClick={() => setCrew(data.crew[1])}></button>
      <button className='crew-btn' style={crew.role === "Pilot" ? {opacity:'1'} : {}} onClick={() => setCrew(data.crew[2])}></button>
      <button className='crew-btn' style={crew.role === "Flight Engineer" ? {opacity:'1'} : {}} onClick={() => setCrew(data.crew[3])}></button>
    </div>
  </>
  )  
}

export default Price