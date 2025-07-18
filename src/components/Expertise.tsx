import React from "react";
import '@fortawesome/free-regular-svg-icons'
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "4s Football",
    "4s Football",
    "4s Football",
    "4s Football",
    "4s Football",
    "4s Football",
    "4s Football",
    " 4s Football",
    "4s Football",
    "4s Football",
    "4s Football"
];

const labelsSecond = [
     "4s Football",
    "4s Football",
    "4s Football",
    "4s Football",
    "4s Football",
    "4s Football",
    "4s Football",
    " 4s Football",
    "4s Football",
    "4s Football",
    "4s Football"
];

const labelsThird = [
    "4s Football",
    "4s Football",
    "4s Football",
    "4s Football",
    "4s Football",
    "4s Football",
    "4s Football",
    " 4s Football",
    "4s Football",
    "4s Football",
    "4s Football"
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1 style={{ color: '#1b5e20' }}>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    {/* <FontAwesomeIcon icon={faReact} size="3x"/> */}
                    <h3 style={{ color: '#1b5e20' }}>Football</h3>
                    <p style={{ color: '#1b5e20' }}>Football details</p>
                    <div className="flex-chips">
                        <span className="chip-title">Football types:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    {/* <FontAwesomeIcon icon={faDocker} size="3x"/> */}
                    <h3 style={{ color: '#1b5e20' }}>Football 4s 3s coaching details</h3>
                    <p style={{ color: '#1b5e20' }}>Football coaching details</p>
                    <div className="flex-chips">
                        <span className="chip-title">Timgs:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    {/* <FontAwesomeIcon icon={faPython} size="3x"/> */}
                    <h3 style={{ color: '#1b5e20' }}>Football 4s 3s coaching details</h3>
                    <p style={{ color: '#1b5e20' }}>Football coaching details</p>
                    <div className="flex-chips">
                        <span className="chip-title">Details:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;