import React from 'react'
import { Typography } from '@material-ui/core'
import navData from '../../utils/navData'

import "./Footer.css"
import resumeData from '../../utils/resumeData'

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_left">
        <Typography className="footer_rights">
          {navData.Footer.icon}{navData.Footer.text}
        </Typography>
      </div>
      <div className="footer_right">
        <Typography className="footer_designed">
          Designed and Developed by <a className="a_link" href="www.linkedin.com" target="_blank" rel="noreferrer">{resumeData.identity.full_name}</a>.
        </Typography>
      </div>
    </div>
  )
}

export default Footer