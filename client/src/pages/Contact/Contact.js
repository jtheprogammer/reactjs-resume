import React from "react";
import { Grid, TextField } from "@mui/material";

import CustomButton from "../../components/CustomButton/CustomButton";
import resumeData from "../../utils/resumeData";
import Maps from "../../components/Maps/Maps";

import "./Contact.css";

const Contact = () => {
  return (
    // Contact Form
    <div>
      <Grid container className="section">
        {/* "Contact Me" Header */}
        <Grid item className="section_title">
          <span />
          <h6>{resumeData.contact_page_titles.contact_form}</h6>
        </Grid>
        {/* Contact Form */}
        <Grid container className="form_container" spacing={1}>
          <Grid item xs={12} sm={6} className="input_field">
            <TextField name="name" label="Name" />
          </Grid>
          <Grid item xs={12} sm={6} className="input_field">
            <TextField name="email" label="Email Address" />
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            className="input_field"
            id="form_enter_message"
          >
            <TextField
              name="message"
              label="Message"
              fullWidth
              multiline
              minRows={4}
            />
          </Grid>
          {/* Submit Form Button */}
          <Grid container className="form_submit">
            <Grid item className="button_item">
              <CustomButton text="Submit" />
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Grid container className="section">
        {/* "Contact Map" Header */}
        <Grid item className="section_title">
          <span />
          <h6>{resumeData.contact_page_titles.contact_map}</h6>
        </Grid>
        {/* Contact Map */}
        <Grid item xs={12}>
          <Maps />
        </Grid>
      </Grid>
    </div>
  );
};

export default Contact;
