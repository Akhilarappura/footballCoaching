import React from "react";
import '../assets/styles/Main.scss';
// import logo from '../assets/images/logo.jpg';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
           {/* <img src={logo} alt="Edu Sports logo" width="100%" /> */}
        </div>
        <div className="content">
          <div className="social_icons">

          </div>
          <h1>Edu Sports</h1>
          <p>Football</p>
        </div>
      </div>
    </div>
  );
}

export default Main;