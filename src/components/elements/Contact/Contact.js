import React from 'react';
// import { Link } from 'react-router-dom';
// import Media from "react-media";
import './Contact.css';

const Contact = () => {

  return (

    <section className="contact p-5 ">

      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-5 pb-4">
            <h3 className="display-4 mb-5 text-white">Get In Touch</h3>
            <form className="contact-form">

              <div className="form-group py-4">
                <input type="text" className="form-control my-2 p-2 input" placeholder="Name" />
                <label className="label">Name</label>
              </div>

              <div className="form-group py-4">
                <input type="email" className="form-control my-2 p-2 input" placeholder="Email Address" />
                <label className="label">Email Address</label>
              </div>

              <div className="form-group py-4 my-4">
                <input type="checkbox" />
                <label className="text-white pl-2">Send Announcemets</label>
              </div>

              <button type="submit"
                className="btn btn-block p-2 font-weight-bold text-uppercase submit-button">Subscribe</button>

            </form>
          </div>
        </div>
      </div>

    </section>

  )
}

export default Contact;