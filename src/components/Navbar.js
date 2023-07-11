import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export default function Navbar(props) {
  return (
<nav className={`navbar navbar-expand-lg bg-${props.mode} navbar-${props.mode} `}>

  <div className="container-fluid">
    <Link className={`navbar-brand text-${props.Mode==='light'?'dark':'light'}`} to="/">{props.title}</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className={`nav-link active text-${props.Mode==='light'?'dark':'light'}`} aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link text-${props.Mode==='light'?'dark':'light'}`} to="/about">{props.aboutText}</Link>
        </li>
      </ul>

      <div className={`form-check form-switch text-${props.Mode==='light'?'dark':'light'}`}>
        <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
        <label className={`form-check-label text-${props.Mode==='light'?'dark':'light'}`} htmlFor="flexSwitchCheckDefault" >{props.Mode==='light'?'LightMode':"DarkMode"} </label>
      </div>
    </div>
  </div>
  </nav>

  )
}

// above code is to determine datatype of props, if other datatype props is passed then it will throw warning
// Navbar works without above code but this is for precautions and helps catching errors
Navbar.propTypes = {
    title : PropTypes.string,
    aboutText: PropTypes.string
}

// If title and aboutText props attribute is not given then above code works
Navbar.defaultProps = {
    title : "default Title",
    aboutText:"Default AboutText"
}