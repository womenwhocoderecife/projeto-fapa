import React from 'react';
import './Footer.css';
import { FaInstagram, FaPhone,FaMailBulk,FaAddressCard } from "react-icons/fa";
function Footer() {
  return (
      <div className="container-footer">
        <a className="item-footer" href='https://www.instagram.com/facaalgoporalguem/'> <FaInstagram className = "icon"/> facaalgoporalguem</a>
        <a className="item-footer" href="mailto:facaalgoporalguem@gmail.com?subject=contatopelosite" target="_top"><FaMailBulk className = "icon" /> facaalgoporalguem@gmail.com</a>
        <a className="item-footer"> <FaPhone className = "icon" /> (81) 9.9878.0508</a>
      </div>
  );
}

export default Footer;
