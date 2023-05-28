import React from 'react'
import './Contact.css';

export const Contact = () => {
  return (
    
              <div className="container">
                  <div className="row">
                      <div className="section-title padd-15">
                          <h2>Contact Me</h2>
                      </div>
                  </div>
                  <div className="row">
                    
                    <div className="contact-info-item padd-15">
                      <a href="tel:+917356264323"><div className="icon"><i className="fa fa-phone"></i></div></a>
                      <h4>Call Us On</h4>
                      <p>+91 73 5626 4323</p>
                    </div>
                    
                    <div className="contact-info-item padd-15">
                      <a href="mailto:mialungal@outlook.com"><div className="icon"><i className="fa fa-envelope"></i></div></a>
                      <h4>Email</h4>
                      <p>mialungal@outlook.com</p>
                    </div>
                    
                    <div className="contact-info-item padd-15">
                      <a href="https://www.linkedin.com/in/muhammad-irshad-k-472401185/"><div className="icon"><i className="fa-brands fa-linkedin-in"></i></div></a>
                      <h4>LinkedIn</h4>
                      <p>Muhammed Irshad K</p>
                    </div>
                
                    <div className="contact-info-item padd-15">
                      <a href="https://www.instagram.com/irshad_alungal/"><div className="icon"><i className="fa-brands fa-instagram"></i></div></a>
                      <h4>Instagram</h4>
                      <p>irshad_alungal</p>
                    </div>
                  </div>
                  </div>
  )
}
