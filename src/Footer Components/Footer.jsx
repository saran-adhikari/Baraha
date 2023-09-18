import React from 'react'
import { Link } from 'react-router-dom'
function Footer() {
  return (
    <>
        <div className="col md-12">
            <div className="list ">
            <div className="col">
            
            <h2><Link to='/' id='footer'>BARAHA</Link></h2>
            </div>
                <div className="col">
            <li>HOME</li>
            <li>ABOUT</li>
            <li>SERVICES</li>
            <li>CONTACT</li>
            </div>
            
            <div className="col">
           <footer> &copy; BARAHA FOUNDATION, 2023</footer>
            </div>
            </div>
        </div>
        
            
        
    </>
  )
}

export default Footer