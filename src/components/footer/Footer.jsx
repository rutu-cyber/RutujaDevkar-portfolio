import React from 'react';
import './footer.css';
import {FaFacebookF} from 'react-icons/fa';
import {BsInstagram} from 'react-icons/bs';
import {ImTwitter} from 'react-icons/im';

const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer__logo'>Rutuja</a>
      
      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.facebook.com/rutuja.devkar.3"><FaFacebookF/></a>
        <a href="https://www.instagram.com/__.r_u_t_u.__2411/"><BsInstagram/></a>
        <a href="https://twitter.com/"><ImTwitter/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Rutuja. All rights Reserved.</small>
      </div>
    </footer>
  )
}

export default Footer