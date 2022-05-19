import React from 'react'
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot
} from "@material-ui/lab"

import "./Timeline.css"
import { Typography } from "@material-ui/core"
// import WorkIcon from "@material-ui/icons/Work"

const CustomTimeline = ({ title, icon, children }) => {
  return (
    <Timeline className="timeline">
      {/* Timeline Header */}
      <TimelineItem className="timeline_firstItem">
        <TimelineSeparator>
          <TimelineDot className="timeline_dot_header"> 
            {icon} 
          </TimelineDot>
          <TimelineConnector className="header_connector" />
        </TimelineSeparator>
        <TimelineContent>
          <Typography variant="h6" className="timeline_header"> {title} </Typography>
        </TimelineContent>
      </TimelineItem>
      { children }
    </Timeline>
  );
};

// for remaining items
export const CustomTimelineSeparator = () => {
  return (
    <TimelineSeparator className="separator_padding">
      <TimelineDot variant="outlined" className="timeline_dot" />
      <TimelineConnector />
    </TimelineSeparator>
  );
};

export default CustomTimeline;