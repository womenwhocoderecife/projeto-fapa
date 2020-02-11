import React from 'react';
import './Footer.css';
import { FaInstagram, FaPhone,FaMailBulk,FaAddressCard } from "react-icons/fa";
function Footer() {
  return (
    <div className="Footer gray-light-color p-0">
        <div className  = "container">
            <div className = "row h-100 w-100 d-flex justify-content-center align-items-center">
              <div className = "col-md-5">
                  <span> <FaInstagram className = "icon" /> @facaalgoporalguem</span>
                  <br></br>
                  <span> <FaPhone className = "icon" /> (81) 9.9878.0508</span>
              </div>
              <div className = "col-md-4">
                  <span><FaMailBulk className = "icon" /> facaalgoporalguem@gmail.com</span>
                  <br></br>
                  <span><FaAddressCard className = "icon" /> CNPJ: 472891902948</span>
              </div>
             </div>
        </div>
  </div>
  );
}

export default Footer;
