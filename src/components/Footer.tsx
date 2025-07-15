import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Footer.scss'

function Footer() {
  return (
    <footer>
      <div>
      
        <a href="https://www.linkedin.com/in/yujisato/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
      </div>
      <p>A Football concern <a href="" target="_blank" rel="noreferrer">Football</a> with 💜</p>
    </footer>
  );
}

export default Footer;