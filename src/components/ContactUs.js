import React, { Component } from 'react';
export default class ContactUs extends Component {
  render() {
     return (
      <section id="contact">
          <div className="row section-head">
            <div className="ten columns">
              <p className="lead">
              Feel Free To Contact Me for Any Work Or Suggestions Below
              </p>
            </div>
          </div>
          <div className="row">
            {/* <aside className="eigth columns footer-widgets"> */}
              {/* <div className="widget">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3466.437472029839!2d76.99854197473573!3d29.6780938358369!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390e71078ea92e4b%3A0x3d650eaca4ecf986!2s201%2C%20Sector%2014%2C%20Karnal%2C%20Haryana%20132001!5e0!3m2!1sen!2sin!4v1692204901685!5m2!1sen!2sin" width="100%" height="300" style={{border:0}} allowFullScreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
              </div> */}
            {/* </aside> */}
            <div className='container'>
          <div className='contact-form'>
            <form action ='https://formspree.io/f/xgejajrv' method = 'POST'>
              <input type = 'text' name= 'name' placeholder='Name' autoComplete='off' required />
              <input type = 'text' name= 'email' placeholder='Email' autoComplete='off' required />
              <textarea name = 'message' cols = '30' row = '6' autoComplete='off' placeholder='Message' required></textarea>
              <input type = 'submit' value = 'Send'/>
            </form>
          </div>

          </div>
          </div>
          
        </section>
        );
  }
}