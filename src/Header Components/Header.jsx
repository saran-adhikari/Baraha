import React from "react";
import { Link } from "react-router-dom";
import Connections from "../Connections";
function Header() {
  // <img src="https://i.pinimg.com/564x/53/62/ad/5362aded1aa14a6199a7f5673d41c6d8.jpg" height='100'></img>
  return (
    <>
    
      <nav
        className="navbar navbar-expand-lg bg-body-tertiary"
        id="heading" 
      >
        <div className="container-fluid">
          <Link to='/' className="navbar-brand">
            BARAHA
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              
              <li className="nav-item">
                <Link to='/' className="nav-link active" aria-current="page">
                  HOME
                </Link>
              </li>
              <li className="nav-item">
                <Link to='/football' className="nav-link active" aria-current="page">
                  ABOUT
                </Link>
              </li>
              <li className="nav-item">
                <Link to='/casual' className="nav-link active" aria-current="page">
                  SERVICES
                </Link>
              </li>
              <li className="nav-item">
                <Link to='/formal' className="nav-link active" aria-current="page">
                  CONTACT
                </Link>
              </li>
              
            </ul>
          </div>
        </div>
       
      </nav>
      <Connections/>
    </>
  );
}

export default Header;
