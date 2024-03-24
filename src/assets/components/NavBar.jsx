import { Link } from "react-router-dom"
import { useState } from "react"

import './NavBar.css'

const NavBar = () => {

  const [clicked, setClicked] = useState(false)

  function handleClick(e) {
    if(clicked) {
      setClicked(false)
      e.target.src = 'public/icon-hamburger.svg'
    }else {
      setClicked(true)
      e.target.src = 'public/icon-close.svg'
    }
  }

  return (
    <nav>
        <div className="brand-logo">
            <img src="/logo.svg" alt="Logo" />
        </div>
        <div className="line"></div>
        <img id="mobile-icon" onClick={(e) => handleClick(e)} src="public/icon-hamburger.svg" alt="Mobile Menu" />
        <div className="nav-links" style={clicked ? {display: 'flex'} : {}}>
            <Link to="/">
              <p><span>00</span> Home</p>
            </Link>
            <Link to="/destination">
              <p><span>01</span> Destination</p>
            </Link>
            <Link to="/crew">
              <p><span>02</span> Crew</p>
            </Link>
            <Link to="/technology">
              <p><span>03</span> Technology</p>
            </Link>
        </div>
    </nav>
  )
}

export default NavBar