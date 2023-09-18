import React from 'react'
import { Link } from 'react-router-dom'
function Carousel() {
  return (
    <>
        <div id="carouselExampleDark" className="carousel carousel-dark slide">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="https://images.unsplash.com/photo-1535025075092-5a1cf795130b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80" className="w-100" alt="..." height="700"/>
            <div className="carousel-caption" id="body">
              <h5>BARAHA</h5>
              <p>
              ENDLESS POTENTIAL
              </p>
              <button id="explore" className="btn btn-primary" type="submit">EXPLORE</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Carousel