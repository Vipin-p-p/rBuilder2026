import React from 'react'
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function Footer() {
  return (
    <div style={{ backgroundColor: '#6b5548', height: "330px" }} className='container-fluid text-light p-5'>
      <div className="row">
        <div className="col-lg-4">
          <h2 className='mb-3'>Ai rBuilder</h2>
          <p style={{ textAlign: "justify" }}>An AI Powered Resume Builder is a web application that helps users create professional resumes quickly and efficiently using artificial intelligence. Traditional resume creation can be time-consuming and difficult, especially for freshers who may not know the correct format or keywords required for modern recruitment systems.</p>
        </div>
        <div className="col-lg-4"></div>
        <div className="col-lg-4 mt-3">
          <h4>Contact Us</h4>
          <p><MdEmail />resumebuilder@gmail.com</p>
          <p> <FaPhoneAlt /> 1234567890</p>
          <h4>Connect With Us</h4>
          <div className='fs-5'>
            <FaInstagram />
            <FaFacebook className='mx-3' />
            <FaWhatsapp />
            <FaXTwitter className='mx-3' />

          </div>
        </div>

      </div>
      <h4 className='text-center'>Designed & built with ❤️ using React</h4>
    </div>
  )
}

export default Footer
