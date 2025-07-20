import React from "react";
import '@fortawesome/free-regular-svg-icons'
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1 style={{ color: '#1b5e20' }}>Age Groups</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="2022 - present"
                 iconStyle={{ background: '#5000ca', color: 'yellow'}}
         icon={<SportsSoccerIcon />}

          >
            <h3 className="vertical-timeline-element-title" style={{ color: '#1b5e20' }}>Age range - U6</h3>
            <h4 className="vertical-timeline-element-subtitle" style={{ color: '#1b5e20' }}>Upto 6</h4>
            <p style={{ color: '#1b5e20' }}>
          Active start
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2020 - 2022"
            iconStyle={{ background: '#5000ca', color: 'yellow'}}
        icon={<SportsSoccerIcon />}

          >
            <h3 className="vertical-timeline-element-title" style={{ color: '#1b5e20' }}>Age range-6 to 8</h3>
            <h4 className="vertical-timeline-element-subtitle" style={{ color: '#1b5e20' }}>u7-u9</h4>
            <p style={{ color: '#1b5e20' }}>
Fundamentals
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2021 - 2021"
               iconStyle={{ background: '#5000ca', color: 'yellow'}}
            icon={<SportsSoccerIcon />}

          >
            <h3 className="vertical-timeline-element-title" style={{ color: '#1b5e20' }}>Age range- 9 to 11</h3>
            <h4 className="vertical-timeline-element-subtitle" style={{ color: '#1b5e20' }}>U10-U12</h4>
            <p style={{ color: '#1b5e20' }}>
     Learning to Train 
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2020 - 2020"
            iconStyle={{ background: '#5000ca', color: 'yellow'}}
          icon={<SportsSoccerIcon />}

          >
            <h3 className="vertical-timeline-element-title" style={{ color: '#1b5e20' }}>Age range- 12 to 15</h3>
            <h4 className="vertical-timeline-element-subtitle" style={{ color: '#1b5e20' }}>U13-U15</h4>
            <p style={{ color: '#1b5e20' }}>
            Training to Train
            </p>
          </VerticalTimelineElement>
           <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2020 - 2020"
            iconStyle={{ background: '#5000ca', color: 'yellow'}}
         icon={<SportsSoccerIcon />}

          >
            <h3 className="vertical-timeline-element-title" style={{ color: '#1b5e20' }}>Age range- 16 to 18+</h3>
            <h4 className="vertical-timeline-element-subtitle" style={{ color: '#1b5e20' }}>U16-U19-seniors</h4>
            <p style={{ color: '#1b5e20' }}>
                Training to complete  
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;