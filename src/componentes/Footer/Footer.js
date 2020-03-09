import React from 'react';
import './Footer.css';
import { FaInstagram, FaPhone,FaMailBulk,FaAddressCard } from "react-icons/fa";
function Footer() {
  return (
    <div className="Footer gray-light-color p-0">
        <div className  = "container">
            <div className = "row h-100 w-100 d-flex justify-content-center align-items-center">
              <div className = "col-md-5">
                  <a className="item-footer" href='https://www.instagram.com/facaalgoporalguem/'> <FaInstagram className = "icon"/> facaalgoporalguem</a>
                  <br></br>
                  <span className="item-footer"> <FaPhone className = "icon" /> (81) 9.9878.0508</span>
              </div>
              <div className = "col-md-4">
                  <a className="item-footer" href="mailto:facaalgoporalguem@gmail.com?subject=contatopelosite" target="_top"><FaMailBulk className = "icon" /> facaalgoporalguem@gmail.com</a>
                  <br></br>
              </div>
             </div>
        </div>
  </div>
  );
}

export default Footer;
