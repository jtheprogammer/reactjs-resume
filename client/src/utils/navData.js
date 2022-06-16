import { LinkedIn, Home, Copyright } from "@mui/icons-material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandshake } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const navData = {
  socials: {
    LinkedIn: {
      link: "https://www.linkedin.com/in/jose-cruz-9a0677220/",
      text: "LinkedIn",
      icon: <LinkedIn color="primary" fontSize="large" />,
    },
    GitHub: {
      link: "https://github.com/jtheprogammer",
      text: "GitHub",
      icon: <FontAwesomeIcon icon={faGithub} size="xl" />,
    },
  },
  Button: {
    text: "Hire Me",
    icon: <FontAwesomeIcon icon={faHandshake} size="xs" />,
  },
  Home: {
    icon: (
      <Home
        fontSize="large"
        style={{
          backgroundColor: "aqua",
          borderRadius: "50px",
          marginRight: "5px",
        }}
      />
    ),
  },
  Footer: {
    year: "2022.",
    text: "All Rights Reserved.",
    icon: <Copyright fontSize="small" style={{ marginBottom: "4px" }} />,
  },
};

export default navData;
