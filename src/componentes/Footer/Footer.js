import React from 'react';
import './Footer.css';
import { FaInstagram, FaPhone,FaMailBulk,FaAddressCard } from "react-icons/fa";
function Footer() {
  return (
      <div className="container-footer">
        <div className="footer">
          <a className="item-footer link" href='https://www.instagram.com/facaalgoporalguem/'> <FaInstagram className = "icon"/> facaalgoporalguem</a>
          <a className="item-footer link" href="mailto:facaalgoporalguem@gmail.com?subject=contatopelosite" target="_top"><FaMailBulk className = "icon" /> facaalgoporalguem@gmail.com</a>
          <a className="item-footer"> <FaPhone className = "icon" /> (81) 9.9878.0508</a>
        </div>
        <div className="copyright">
          <a className="item-footer link" href='https://womendevprojects.com.br'> Desenvolvido por &copy;Women Dev Projects.</a>
        </div>
      </div>
  );
}

export default Footer;
