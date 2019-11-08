import React from 'react';
import './Footer.css';
import { FaInstagram, FaPhone,FaMailBulk,FaAddressCard } from "react-icons/fa";
function Footer() {
  return (
    <div className="Footer gray-light-color p-0">
        <div className  = "container-fluid p-0">
            <div className = "container">
            <div className = "row h-100 w-100 d-flex justify-content-center align-items-center">
            <div className = "col-md-6">
                <span> <FaInstagram className = "icon" /> @facaalgoporalguem</span>
                <br></br>
                <span> <FaPhone className = "icon" /> (81) 9.9878.0508 / (81) 9.9113.5886</span>
            </div>
            <div className = "col-md-6">
                
                <span><FaMailBulk className = "icon" /> facaalgoporalguem@gmaill.com</span>
                <br></br>
                <span><FaAddressCard className = "icon" /> CNPJ: 472891902948</span>
            </div>

    
        </div>
    </div>
        </div>
    
    </div>
  );
}

export default Footer;