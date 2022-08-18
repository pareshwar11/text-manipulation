import React, {useEffect} from 'react'
import PropTypes from 'prop-types'
import { Link, useLocation } from "react-router-dom";

export default function Navbar(props) {
  let location = useLocation();

  useEffect(() => {
    console.log(location.pathname)
  }, [location]);
  
    return (
        <>
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
        <Link className={`nav-link ${location.pathname==="/"?"active": ""}`} to="/">{props.title}</Link>
        
        <button className="navbar-toggler " type="button" >
        <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
          <i className="fa-solid fa-moon my-1"></i>
            <input className="form-check-input " type="checkbox" role="switch" onClick={props.togglemode} id="flexSwitchCheckDefault"/>
          </div>
        </button>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {/* <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/text">Home</Link>
            </li> */}
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname==="/about"?"active": ""}`} to="/about">About</Link>
            </li>
          </ul>
          <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
            <input className="form-check-input" type="checkbox" role="switch" onClick={props.togglemode} id="flexSwitchCheckDefault"/>
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.text}</label>
          </div>
        </div>
      </div>
    </nav>
    </>
      )
    }
    
    Navbar.protoType={
        // it means we can set the correct type of content
        title:PropTypes.string.isRequired,
    }
    
    Navbar.defaultProps={
        title:"Text Organizer",
    };
    
