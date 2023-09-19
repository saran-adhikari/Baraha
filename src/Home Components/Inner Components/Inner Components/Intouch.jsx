import React from 'react'
import { Link } from 'react-router-dom'
function Intouch() {
  return (
    <>
        <div id="carouselExampleDark" className="carousel carousel-dark slide">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="https://i.pinimg.com/564x/01/c2/18/01c218942f801d6f961da12412973b71.jpg" className="w-100" alt="..." id='img' height="600"/>
            <div className="carousel-caption" id="body">
            <h5>TALK TO US</h5>
            <p>
            We are always open to help you.
              </p>
              
              
              <Link to='/contact' id="explore" className="btn btn-primary" type="submit">GET IN TOUCH</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Intouch