import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } 
from "@fortawesome/free-brands-svg-icons";

const portfolioData = {
  title: "Portfolio",
  projects: [
    {
      tag: "javascript",
      images: [
        "https://img.freepik.com/free-vector/hand-painted-watercolor-pastel-sky-background_23-2148902771.jpg?w=2000", "https://cdn.pixabay.com/photo/2016/06/02/02/33/triangles-1430105__480.png",
      ],
      title: "Project 1",
      description: "A project 3rr 32r 3rt",
      caption: "A short caption of my project",
      links: [
        {link: "www.github.com", icon: <FontAwesomeIcon icon={faGithub} size="lg" /> }
      ]
    },
    {
      tag: "python",
      images: [
        "https://img.freepik.com/free-vector/hand-painted-watercolor-pastel-sky-background_23-2148902771.jpg?w=2000", "https://cdn.pixabay.com/photo/2016/06/02/02/33/triangles-1430105__480.png",
      ],
      title: "Project 2",
      description: "A project 3rr 32r 3rt",
      caption: "A short caption",
      links: [
        {link: "www.github.com", icon: <FontAwesomeIcon icon={faGithub} size="lg" /> }
      ]
    },
    {
      tag: "javascript",
      images: [
        "https://img.freepik.com/free-vector/hand-painted-watercolor-pastel-sky-background_23-2148902771.jpg?w=2000", "https://cdn.pixabay.com/photo/2016/06/02/02/33/triangles-1430105__480.png",
      ],
      title: "Project 3",
      description: "A project 3rr 32r 3rt",
      caption: "A short caption",
      links: [
        {link: "www.github.com", icon: <FontAwesomeIcon icon={faGithub} size="lg" /> }
      ]
    },
  ]
}

export default portfolioData;