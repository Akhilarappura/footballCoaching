import React from "react";
// import mock01 from '../assets/images/mock01.png';
// import mock02 from '../assets/images/mock02.png';
// import mock03 from '../assets/images/mock03.png';
// import mock04 from '../assets/images/mock04.png';
// import mock05 from '../assets/images/mock05.png';
// import mock06 from '../assets/images/mock06.png';
// import mock07 from '../assets/images/mock07.png';
// import mock08 from '../assets/images/mock08.png';
// import mock09 from '../assets/images/mock09.png';
// import gallery1 from '../assets/images/gallery1.jpg';
import gallery2 from '../assets/images/gallery2.jpg';       
// import gallery3 from '../assets/images/gallery3.jpg';
// import gallery4 from '../assets/images/gallery4.jpg';   
// import gallery5 from '../assets/images/gallery5.jpg';
// import gallery6 from '../assets/images/gallery6.jpg';
    


// import gallery7 from '../assets/images/gallery7.jpg';
// import gallery8 from '../assets/images/gallery8.jpg';
// import gallery9 from '../assets/images/gallery9.jpg';
// import gallery10 from '../assets/images/gallery10.jpg';
// import gallery11 from '../assets/images/gallery11.jpg';
// import gallery12 from '../assets/images/gallery12.jpg';
// import gallery13 from '../assets/images/gallery13.jpg';
// import gallery14 from '../assets/images/gallery14.jpg';

// import gallery15 from '../assets/images/gallery15.jpg';
// import gallery16 from '../assets/images/gallery16.jpg';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Trainings</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="#service1" target="_blank" rel="noreferrer"><img src={gallery2} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="#service1" target="_blank" rel="noreferrer"><h2>Filmate AI</h2></a>
                <p>lorem details.</p>
            </div>
            <div className="project">
                <a href="#service2" target="_blank" rel="noreferrer"><img src={gallery2} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="#service2  " target="_blank" rel="noreferrer"><h2>High Speed Chase</h2></a>
                <p>lorem details..</p>
            </div>
            <div className="project">
                <a href="#service3" target="_blank" rel="noreferrer"><img src={gallery2} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="#service3" target="_blank" rel="noreferrer"><h2>lorem</h2></a>
                <p>lorem details..</p>
            </div>
            <div className="project">
                <a href="#service4" target="_blank" rel="noreferrer"><img src={gallery2} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="#service4" target="_blank" rel="noreferrer"><h2>lorem </h2></a>
                <p>lorem details..</p>
            </div>
            <div className="project">
                <a href="#service5" target="_blank" rel="noreferrer"><img src={gallery2} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="#service5" target="_blank" rel="noreferrer"><h2>lorem</h2></a>
                <p>lorem details..</p>
            </div>
            <div className="project">
                <a href="#service6" target="_blank" rel="noreferrer"><img src={gallery2} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="#service6" target="_blank" rel="noreferrer"><h2>lorem</h2></a>
                <p>lorem details..</p>
            </div>
            <div className="project">
                <a href="#service7" target="_blank" rel="noreferrer"><img src={gallery2} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="#service7" target="_blank" rel="noreferrer"><h2>lorem</h2></a>
                <p>lorem details..</p>
            </div>
            <div className="project">
                <a href="#service8" target="_blank" rel="noreferrer"><img src={gallery2} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="#service8" target="_blank" rel="noreferrer"><h2>Programs of Study</h2></a>
                <p>lorem details..</p>
            </div>
            <div className="project">
                <a href="#service9" target="_blank" rel="noreferrer"><img src={gallery2} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="#service9" target="_blank" rel="noreferrer"><h2>lorem  </h2></a>
                <p>lorem details..</p>
            </div>
            <div className="project">
                <a href="#service10" target="_blank" rel="noreferrer"><img src={gallery2} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="#service10" target="_blank" rel="noreferrer"><h2>lorem</h2></a>
                <p>lorem details..</p>
            </div>
        </div>
    </div>
    );
}

export default Project;