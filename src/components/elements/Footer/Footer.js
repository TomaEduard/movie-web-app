import React from 'react';
import { Link } from 'react-router-dom';
import Media from "react-media";
import './Contact.css';

const Contact = () => {

  // var bg = require('./images/1asd.png');
  // var bg = require('../../../../public/images/form-img.jpeg');
  // url(../../../../public/images/form-img.jpeg)

  // src="./images/1asd.png"
  return (

    <section className="contact p-5">

      {/* <img className="rmdb-logo"
        src="./images/form-img.jpeg"
        style={{
          background: 'no-repeat center center no-repeat / cover',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      /> */}

      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-5 pb-4">
            <h3 className="display-4 mb-5 text-white">Get In Touch</h3>
            <form className="contact-form">

              <div className="form-group py-4">
                <input type="text" className="form-control my-2 p-2 input" placeholder="Name" />
                <label for="name" class="label">Name</label>
              </div>

              <div className="form-group py-4">
                <input type="email" class="form-control my-2 p-2 input" placeholder="Email Address" />
                <label for="email" class="label">Email Address</label>
              </div>

              <div class="form-group py-4 my-4">
                <input type="checkbox" checked />
                <label for="check" class="text-white pl-2">Send Announcemets</label>
              </div>

              <button type="submit"
                class="btn btn-block p-2 font-weight-bold text-uppercase submit-button">Subscribe</button>

            </form>
          </div>
        </div>
      </div>


    </section >

  )
}

export default Contact;