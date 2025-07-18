import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1 style={{ color: '#1b5e20' }}>Coach History</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="2022 - present"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title" style={{ color: '#1b5e20' }}>Football Consultant</h3>
            <h4 className="vertical-timeline-element-subtitle" style={{ color: '#1b5e20' }}>Dallas, TX</h4>
            <p style={{ color: '#1b5e20' }}>
             Coach latest details
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2020 - 2022"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title" style={{ color: '#1b5e20' }}>previous details</h3>
            <h4 className="vertical-timeline-element-subtitle" style={{ color: '#1b5e20' }}>Laie, HI</h4>
            <p style={{ color: '#1b5e20' }}>
     details previous
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2021 - 2021"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title" style={{ color: '#1b5e20' }}>Coach details</h3>
            <h4 className="vertical-timeline-element-subtitle" style={{ color: '#1b5e20' }}>Laie, HI</h4>
            <p style={{ color: '#1b5e20' }}>
             experience details
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2020 - 2020"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title" style={{ color: '#1b5e20' }}>Experience</h3>
            <h4 className="vertical-timeline-element-subtitle" style={{ color: '#1b5e20' }}>Tokyo, Japan</h4>
            <p style={{ color: '#1b5e20' }}>
                details
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;