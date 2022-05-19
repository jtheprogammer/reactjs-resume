import { LinkedIn, Home, Copyright } from "@material-ui/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHandshake } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const navData = {
  socials: {
    LinkedIn: {
      link: "https://www.linkedin.com/in/jose-cruz-9a0677220/",
      text: "LinkedIn",
      icon: <LinkedIn color="primary" fontSize="medium"  />
    },
    GitHub: {
      link: "https://github.com/jtheprogammer",
      text: "GitHub",
      icon: <FontAwesomeIcon icon={faGithub} size="lg" />
    },
  },
  Button : {
    text: "Hire Me",
    icon: <FontAwesomeIcon icon={faHandshake} size="xs" />,
  },
  Home : {
    icon: <Home fontSize="large" style={{ "margin" : "6px 0px 4.5px 16.5px" }} />
  },
  Footer : {
    text: "  2022. All Rights Reserved.",
    icon: <Copyright fontSize="small" style={{ "marginBottom" : "4px" }} />,
  },
}

export default navData;