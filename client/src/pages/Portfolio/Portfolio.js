import React, { useState } from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
  Grow,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import { Box, Tabs, Tab } from "@mui/material";

import CustomImageGallery from "../../components/ImageGallery/CustomImageGallery";
import portfolioData from "../../utils/portfolioData";

import "./Portfolio.css";

const Portfolio = () => {
  const [tabValue, setTabValue] = useState("all");
  const [projectDialog, setProjectDialog] = useState(false);

  return (
    <Grid container className="section">
      {/* "Title */}
      <Grid item className="section_title">
        <span />
        <h6>{portfolioData.title}</h6>
      </Grid>

      <Grid container>
        {/* Tabs */}
        <Grid item xs={12} sm={7} md={4}>
          <Box>
            <Tabs
              className="customTabs"
              value={tabValue}
              textColor="primary"
              TabIndicatorProps={{
                style: {
                  display: "none",
                },
              }}
              onChange={(event, newValue) => setTabValue(newValue)}
            >
              <Tab
                value="all"
                label="All"
                className={
                  tabValue === "all"
                    ? "customTabs_item active"
                    : "customTabs_item"
                }
              />

              {/* creates a set of all the tags */}
              {[...new Set(portfolioData.projects.map((item) => item.tag))].map(
                (tag) => (
                  <Tab
                    label={tag}
                    value={tag}
                    className={
                      tabValue === tag
                        ? "customTabs_item active"
                        : "customTabs_item"
                    }
                  />
                )
              )}
            </Tabs>
          </Box>
        </Grid>
        {/* Projects */}
        <Grid item xs={12}>
          <Grid
            className="card_container"
            container
            spacing={6}
            style={{ marginLeft: 0 }}
          >
            {portfolioData.projects.map((project) => (
              <>
                {tabValue === project.tag || tabValue === "all" ? (
                  <Grid 
                    item
                    style={{ paddingLeft: "40px" }}
                  >
                    <Grow in timeout={1000}>
                      <Card
                        className="card"
                        onClick={() => setProjectDialog(project)}
                      >
                        <CardActionArea>
                          <CardMedia
                            className="card_image"
                            image={project.images[0]}
                            title={project.title}
                          />
                          <CardContent>
                            <Typography variant="body2" className="card_title">
                              {project.title}
                            </Typography>
                            <Typography
                              className="card_caption"
                              variant="body2"
                            >
                              {project.caption}
                            </Typography>
                          </CardContent>
                        </CardActionArea>
                      </Card>
                    </Grow>
                  </Grid>
                ) : null}
              </>
            ))}
          </Grid>
        </Grid>
        <Dialog
          className="projectDialog"
          open={projectDialog ? true : false}
          maxWidth={"lg"}
          fullWidth
          onClose={() => setProjectDialog(false)}
        >
          <DialogTitle onClose={() => setProjectDialog(false)}>
            {" "}
            {projectDialog.title}{" "}
          </DialogTitle>
          <img
            src={projectDialog.images}
            alt=""
            className="projectDialog_image"
          />
          <DialogContent>
            {projectDialog.images && (
              <CustomImageGallery images={projectDialog.images} />
            )}

            <Typography className="projectDialog_description">
              {projectDialog.description}
            </Typography>
          </DialogContent>
          <DialogActions className="projectDialog_actions">
            {projectDialog?.links?.map((link) => (
              <a
                href={link.link}
                target="_blank"
                rel="noreferrer"
                className="projectDialog_icons"
              >
                {link.icon}
              </a>
            ))}
          </DialogActions>
        </Dialog>
      </Grid>
    </Grid>
  );
};

export default Portfolio;
