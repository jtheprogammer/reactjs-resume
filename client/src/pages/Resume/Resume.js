import React from "react";
import { Grid, Typography, Icon } from "@mui/material";
import resumeData from "../../utils/resumeData";
import skillsAndServices from "../../utils/skillsAndServices";
import CustomTimeline, {
  CustomTimelineSeparator,
} from "../../components/Timeline/Timeline";
import "./Resume.css";
import { TimelineItem, TimelineContent } from "@mui/lab";

const Resume = () => {
  return (
    <>
      {/* About Me */}
      <Grid container className="section">
        <Grid item className="section_title">
          <span />
          <h6>{resumeData.about_me.title}</h6>
        </Grid>
        <Grid item xs={12}>
          <Typography className="about_me_text" variant="subtitle1">
            {resumeData.about_me.text}
          </Typography>
        </Grid>
      </Grid>

      {/* Experience */}
      <Grid container className="section" id="experience">
        <Grid item className="section_title" id="experience">
          <h6 id="resume_title">
            {resumeData.resume_title}
            <span />
          </h6>
          <Grid item xs={12} className="timeline_holder">
            <Grid container className="exp_tl">
              <Grid item sm={12} md={6} className="work_exp">
                <CustomTimeline
                  className="header"
                  title={resumeData.work.title}
                  icon={resumeData.work.icon}
                >
                  {Object.keys(resumeData.work.experiences).map(
                    (experience) => (
                      <TimelineItem
                        key={resumeData.work.experiences[experience].exp_id}
                      >
                        <CustomTimelineSeparator />
                        <TimelineContent className="timeline_content">
                          {
                            <>
                              <Typography className="exp_title">
                                {resumeData.work.experiences[experience].title}
                              </Typography>
                              <Typography
                                className="exp_location"
                                variant="caption"
                              >
                                {
                                  resumeData.work.experiences[experience]
                                    .location
                                }
                              </Typography>
                              <span id="loc_tf_spacing" />
                              <Typography
                                className="exp_timeframe"
                                variant="caption"
                              >
                                {resumeData.work.experiences[experience].date}
                              </Typography>
                              <Typography className="exp_description">
                                {
                                  resumeData.work.experiences[experience]
                                    .description
                                }
                              </Typography>
                            </>
                          }
                        </TimelineContent>
                      </TimelineItem>
                    )
                  )}
                </CustomTimeline>
              </Grid>
              <Grid item sm={12} md={6} className="edu_hist">
                <CustomTimeline
                  title={resumeData.education.title}
                  icon={resumeData.education.icon}
                >
                  {Object.keys(resumeData.education.experiences).map(
                    (experience) => (
                      <TimelineItem
                        key={
                          resumeData.education.experiences[experience].exp_id
                        }
                      >
                        <CustomTimelineSeparator />
                        <TimelineContent className="timeline_content">
                          {
                            <>
                              <Typography className="exp_title">
                                {
                                  resumeData.education.experiences[experience]
                                    .title
                                }
                              </Typography>
                              <Typography
                                className="exp_timeframe"
                                variant="caption"
                              >
                                {
                                  resumeData.education.experiences[experience]
                                    .date
                                }
                              </Typography>
                              <Typography className="exp_description">
                                {
                                  resumeData.education.experiences[experience]
                                    .description
                                }
                              </Typography>
                            </>
                          }
                        </TimelineContent>
                      </TimelineItem>
                    )
                  )}
                </CustomTimeline>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      {/* Skills */}
      <Grid container className="section">
        <Grid item className="section_title" id="skills">
          <span />
          <h6>{resumeData.technical_skills.title}</h6>
        </Grid>
      </Grid>
      <Grid item xs={12} className="skills_container_holder">
        <Grid container className="skill_item">
          <Grid item xs={6} className="skills_half" id="left">
            <Typography className="skill_title" id="front_end">
              {skillsAndServices.skill_titles.front_end}
            </Typography>
            <div className="skill_list" id="skills_front_end">
              {Object.keys(skillsAndServices.skills.front_end).map((skill) => (
                <Grid
                  key={skillsAndServices.skills.front_end.skill}
                  item
                  xs={12}
                  sm={6}
                  md={3}
                >
                  <div className="skills_inner">
                    <Icon className="skill_icon" id="front_end_icon">
                      {skillsAndServices.skills.front_end[skill]}
                    </Icon>
                  </div>
                </Grid>
              ))}
            </div>
            <Typography className="skill_title">
              {skillsAndServices.skill_titles.software_and_cloud}
            </Typography>
            <div className="skill_list" id="skills_front_end">
              {Object.keys(skillsAndServices.skills.software_cloud).map(
                (skill) => (
                  <Grid
                    key={skillsAndServices.skills.software_cloud.skill}
                    item
                    xs={12}
                    sm={6}
                    md={3}
                  >
                    <div className="skills_inner">
                      <Icon className="skill_icon" id="front_end_icon">
                        {skillsAndServices.skills.software_cloud[skill]}
                      </Icon>
                    </div>
                  </Grid>
                )
              )}
            </div>
          </Grid>

          <Grid item xs={6} className="skills_half" id="right">
            <Typography className="skill_title" id="back_end">
              {" "}
              Back-End
            </Typography>
            <div className="skill_list" id="skills_front_end">
              {Object.keys(skillsAndServices.skills.back_end).map((skill) => (
                <Grid
                  key={skillsAndServices.skills.back_end.skill}
                  item
                  xs={12}
                  sm={6}
                  md={3}
                >
                  <div className="skills_inner">
                    <Icon className="skill_icon" id="front_end_icon">
                      {skillsAndServices.skills.back_end[skill]}
                    </Icon>
                  </div>
                </Grid>
              ))}
            </div>
            <Typography className="skill_title">
              {skillsAndServices.skill_titles.os_and_vm}
            </Typography>
            <div className="skill_list">
              {Object.keys(skillsAndServices.skills.os_and_virtual).map(
                (skill) => (
                  <Grid
                    key={skillsAndServices.skills.os_and_virtual.skill}
                    item
                    xs={12}
                    sm={6}
                    md={3}
                  >
                    <div className="skills_inner">
                      <Icon>
                        {skillsAndServices.skills.os_and_virtual[skill]}
                      </Icon>
                    </div>
                  </Grid>
                )
              )}
            </div>
          </Grid>

          <Grid item xs={6} className="skills_half" id="left">
            <Typography className="skill_title" id="back_end">
              {" "}
              Data Analysis
            </Typography>
            <div className="skill_list" id="skills_data_analysis">
              {Object.keys(skillsAndServices.skills.data_analysis).map(
                (skill) => (
                  <Grid
                    key={skillsAndServices.skills.data_analysis.skill}
                    item
                    xs={12}
                    sm={6}
                    md={3}
                  >
                    <div className="skills_inner">
                      <Icon className="skill_icon" id="front_end_icon">
                        {skillsAndServices.skills.data_analysis[skill]}
                      </Icon>
                    </div>
                  </Grid>
                )
              )}
            </div>
          </Grid>
          <Grid item xs={6} className="skills_half" id="left">
            <Typography className="skill_title" id="databases">
              {" "}
              Relational and NoSQL DBs
            </Typography>
            <div className="skill_list" id="skills_front_end">
              {Object.keys(skillsAndServices.code.databases).map((db) => (
                <Grid
                  key={skillsAndServices.code.databases[db].feature}
                  item
                  xs={12}
                  sm={6}
                  md={3}
                >
                  <div className="skills_inner">
                    <Icon className="skill_icon" id="front_end_icon">
                      {skillsAndServices.code.databases[db].icon}
                    </Icon>
                  </div>
                </Grid>
              ))}
            </div>
          </Grid>
        </Grid>
      </Grid>

      {/* Desired Positions */}
      <Grid container className="section" id="service">
        <Grid item className="section_title" id="service">
          <span />
          <h6>{resumeData.my_services.title}</h6>
        </Grid>
        <Grid item xs={12} className="services_container_holder">
          <Grid container className="service_item">
            {Object.keys(skillsAndServices.services).map((service) => (
              <Grid
                key={skillsAndServices.services[service].title}
                item
                xs={12}
                sm={6}
                md={3}
              >
                <div className="service_item_content">
                  <Icon className="service_item_icon">
                    {skillsAndServices.services[service].icon}
                  </Icon>
                  <Typography className="service_item_title">
                    {skillsAndServices.services[service].title}
                  </Typography>
                  <Typography className="service_item_description">
                    {skillsAndServices.services[service].description}
                  </Typography>
                </div>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Resume;
