import React from 'react'

function Contact() {
  return (
    <>
      <div className="container">
        <h2> CONTACT US </h2>
        </div>

      <div className="section-primary" id='contact-value'>
        <div className="row">
          <div className="col">
          {/* <img src="https://i.pinimg.com/564x/01/ad/2e/01ad2e71560779c0304f9b3302bc4249.jpg"  alt="" height='550' width='650'/> */}
          <div className="credentials">
        <div className="header">Get in Touch </div>
        <div className="content">
        <input id="email" type="text" placeholder="Your Name" size={40}></input>
        <input id="email" type="tel" placeholder="Phone Nummber" size={40}></input>
        <input id='email' type="email" placeholder="Email" size={40}></input>
        <textarea id='text' type="password" placeholder="Message"></textarea>
        <input id='signin' className="btn btn-primary" type="submit" value="SEND NOW"></input>
        </div>
        </div>
          </div>
          <div className="col" id="contact"> 
            <h2>Talk to Us</h2>
           <p>Email: support@barahafoundation.com</p>
           <p>Phone no: +977 9808123123</p>
           <p>Address: Jhamsikhel, Lalitpur, Bagmati 44700</p>
           <p>Follow us @barahafoundationnp across all social media platforms</p>

          </div>
        </div>
        </div>
    </>
  )
}

export default Contact