import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          {/* <img src="https://images.unsplash.com/photo-1486286701208-1d58e9338013?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Zm9vdGJhbGx8ZW58MHx8MHx8fDA%3D" alt="Avatar" /> */}
        </div>
        <div className="content">
          <div className="social_icons">
          
            {/* <a href="https://www.linkedin.com/in/yujisato/" target="_blank" rel="noreferrer"><LinkedInIcon/></a> */}
          </div>
          <h1>Edu Sports</h1>
          <p>Football</p>

          {/* <div className="mobile_social_icons">
            <a href="https://github.com/yujisatojr" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/yujisato/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default Main;