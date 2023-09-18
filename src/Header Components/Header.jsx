import React from "react";
import { Link } from "react-router-dom";
function Header() {
  // <img src="https://i.pinimg.com/564x/53/62/ad/5362aded1aa14a6199a7f5673d41c6d8.jpg" height='100'></img>
  return (
    <>
    
      <nav
        className="navbar navbar-expand-lg"
        id="heading"
      >
        <div className="container-fluid">
          <Link to='/' className="navbar-brand" href="#">
            <img src="https://i.pinimg.com/564x/53/62/ad/5362aded1aa14a6199a7f5673d41c6d8.jpg" height='100'></img>
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
                <Link to='/running' className="nav-link active" aria-current="page">
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
        <nav className="navbar-2">
          <div className="container-fluid">
            <form className="d-flex" role="search">
              <input id="searchbox" size="40"
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button
                id="search"
                className="btn btn-outline-success"
                type="submit"
              >
              <i class="fa-solid fa-magnifying-glass"></i>
              </button>
              <Link to='/login' id="user" class="btn" href="#" role="button">
              <i class="fa-regular fa-user"></i>
              </Link>
              
              
            </form>
          </div>
        </nav>
      </nav>
    </>
  );
}

export default Header;
