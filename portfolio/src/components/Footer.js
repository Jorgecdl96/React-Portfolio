import React from 'react';
import { IoLogoLinkedin, IoLogoGithub, IoLogoStackoverflow  } from "react-icons/io5";
import '../styles/Footer.css';

function Footer() {
  return (
    <div className='footer'>
        <div className='footerIcons'>
            <a href='https://www.linkedin.com/in/jorgecdl96/' target='_blank' rel='noopener noreferrer'><IoLogoLinkedin /></a>
            <a href='https://github.com/Jorgecdl96' target='_blank' rel='noopener noreferrer'><IoLogoGithub/></a>
            <a href='https://stackoverflow.com/users/18249123/jorgehcl96?tab=profile' target='_blank' rel='noopener noreferrer'><IoLogoStackoverflow/></a>
        </div>
        <p> &copy; 2022 Jorge Cardenas </p>
    </div>
  )
}

export default Footer