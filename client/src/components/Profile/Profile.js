import React from "react";

import resumeData from "../../utils/resumeData";
import CustomTimeline from "../Timeline/Timeline";
import CustomButton from "../CustomButton/CustomButton";

import { Typography } from "@mui/material";
import {
  TimelineItem,
  TimelineContent,
  TimelineDot,
  TimelineConnector,
  TimelineSeparator,
} from "@mui/lab";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

import "./Profile.css";

const CustomTimelineItem = ({ title, text, link, dot }) => {
  return (
    <TimelineItem>
      <TimelineSeparator className="separator_padding">
        {dot ? (
          <TimelineDot variant="outlined" className="timeline_dot">
            {" "}
            {dot}{" "}
          </TimelineDot>
        ) : (
          <TimelineDot variant="outlined" className="timeline_dot" />
        )}
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent className="timeline_content">
        {link ? (
          <Typography className="timeline_item_text">
            <span>{title} :</span>{" "}
            <a href={link} target="_blank" rel="noreferrer">
              {text}
            </a>
          </Typography>
        ) : (
          <Typography className="timeline_item_text">
            {" "}
            <span>{title} :</span> {text}{" "}
          </Typography>
        )}
      </TimelineContent>
    </TimelineItem>
  );
};

const Profile = () => {
  return (
    <div className="profile_background">
      <div className="profile_name">
        <Typography className="name">
          {resumeData.identity.full_name}
        </Typography>
        <Typography className="title">{resumeData.position}</Typography>
      </div>

      <figure className="profile_image">
        <img
          src={require("../../assets/images/stock_profile_picture.jpg")}
          alt=""
        />
      </figure>

      <div>
        <div className="profile_info">
          <CustomTimeline icon={resumeData.profile_icons.main}>
            <CustomTimelineItem
              title="Aspiration"
              text={resumeData.goal.job}
              dot={resumeData.goal.icon}
            />
            <CustomTimelineItem
              title="Email"
              text={resumeData.email.email}
              dot={resumeData.email.icon}
            />
            <CustomTimelineItem
              id="location_text"
              title="Location"
              text={resumeData.location.city}
              dot={resumeData.location.icon}
            />

            {Object.keys(resumeData.socials).map((key) => (
              <CustomTimelineItem
                key={resumeData.socials[key].text}
                title={key}
                text={resumeData.socials[key].text}
                link={resumeData.socials[key].link}
                dot={resumeData.socials[key].icon}
              />
            ))}
          </CustomTimeline>
        </div>

        <div className="btn_container">
          <CustomButton
            onClick={(e) => {
              console.log("hello");
            }}
            className="resume_btn"
            text={resumeData.download}
            icon={<FontAwesomeIcon icon={faDownload} size="xs" />}
          />
        </div>
      </div>
    </div>
  );
};

export default Profile;
