import { Web } from "@material-ui/icons"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLaptopCode } from "@fortawesome/free-solid-svg-icons"
import { faJsSquare, faPython, faHtml5, 
         faCss3Alt,   faReact, faAws, 
         faWindows, faApple, faLinux, 
         faNodeJs, faBootstrap, faGithub, faGitAlt, faSpotify, faYoutube } 
from "@fortawesome/free-brands-svg-icons";


import { GrServerCluster, GrUbuntu } from "react-icons/gr";
import { IoMdAnalytics } from "react-icons/io";
import { FaPercent } from "react-icons/fa"
import { FcStatistics } from "react-icons/fc"
import { AiOutlineFunction } from "react-icons/ai";
import { SiDjango, SiFlask, SiNumpy, 
         SiPandas, SiScikitlearn, SiMysql, 
         SiPostgresql, SiSqlite, SiMongodb, SiMicrosoftoffice, SiPowerbi, SiTableau, 
         SiMicrosoftsqlserver, SiGooglemaps, SiGooglecloud, 
         SiMatrix, SiAnaconda, SiJupyter, 
         SiRstudio, SiMicrosoftexcel, SiMaterialui,
         SiPostman, SiVirtualbox, SiVmware } 
from "react-icons/si";

const skillsAndServices = {
  services: [
    {
      title: "Web Development",
      description: "Adept at utilizing HTML, CSS and ReactJS to create aesthetic and interactive UIs.",
      icon: <Web style={{ 
        fontSize: "45px", 
        position: "relative", 
        bottom: "3.5px" }} />,
    },
    {
      title: "Software Development",
      description: "Understanding of the SDLC, with expertise making apps written in JS and Python, that also incorporate APIs.",
      icon: <FontAwesomeIcon icon={faLaptopCode} />,
    },
    {
      title: "Data Analysis",
      description: "ETL and data visualization using PowerBI or Tableau, while incorporating statistics to identify patterns and trends.",
      icon: <IoMdAnalytics style={{ 
        position: "relative", 
        bottom: "4px" }} />,
    },
    {
      title: "Information Technology",
      description: "Adept understanding of concepts pertaining hardware, networking and cybersecurity.",
      icon: <GrServerCluster style={{ 
        position: "relative", 
        bottom: "4px" }} />,
    },
  ],

  skills: {
    front_end: {
      html: <FontAwesomeIcon icon={faHtml5} size="sm" color="#F66B0E" />,
      css: <FontAwesomeIcon icon={faCss3Alt} size="sm" color="blue"  />,
      js: <FontAwesomeIcon icon={faJsSquare} size="sm" color="#F8CB2E" />,
      bootstrap: <FontAwesomeIcon icon={faBootstrap} size="sm" color="purple"  />,
      react: <FontAwesomeIcon icon={faReact} size="sm" color="#6FDFDF" style={{backgroundColor: "black", padding: "0.5px" }} />,
      mui: <SiMaterialui style={{ 
        position: "relative", 
        bottom: "3px",
        color: "#007FFF" }} />,

    },
    back_end: {
      python: <FontAwesomeIcon icon={faPython} size="sm" color="#3776ab" />,
      django: <SiDjango style={{ 
        position: "relative", 
        bottom: "1px" }} />,
      flask: <SiFlask style={{ 
        position: "relative", 
        bottom: "3px" }} />,
      node: <FontAwesomeIcon icon={faNodeJs} size="sm" color="#026e00"/>,
      mysql: <SiMysql style={{ 
        position: "relative", 
        bottom: "1px",
        color: "#e97b00" }} />,
    },
    software_cloud: {
      git: <FontAwesomeIcon icon={faGitAlt} color="#f14e32" />,
      github: <FontAwesomeIcon icon={faGithub} />,
      aws: <FontAwesomeIcon icon={faAws} size="sm" color="#ff9d00" />,
      gcp: <SiGooglecloud style={{ 
        position: "relative", 
        bottom: "2px" }} />,
      postman: <SiPostman style={{ 
        position: "relative", 
        bottom: "2px",
      color: "#FF6C37" }} />,
    },
    data_analysis: {
      anaconda: <SiAnaconda style={{ 
        position: "relative", 
        bottom: "2px",
        color:"#43b049" }} />,
      jupyter: <SiJupyter style={{ 
        position: "relative", 
        bottom: "2px",
        color: "#e46e2e" }} />,
      numpy: <SiNumpy style={{ 
        position: "relative", 
        bottom: "2px",
        color:"#3BACB6" }} />,
      pandas: <SiPandas style={{ 
        position: "relative", 
        bottom: "2px",
        color:"#130654" }} />,
      powerbi: <SiPowerbi style={{ 
        position: "relative", 
        bottom: "2px",
        color: "black",
        backgroundColor: "#F8CB2E" }} />,
      vba: <SiMicrosoftexcel style={{ 
        position: "relative", 
        bottom: "2px",
        color:"#1d6f42" }} />,
    },
    os_and_virtual: {
      windows: <FontAwesomeIcon icon={faWindows} size="sm" color="#0078d4" />,
      mac: <FontAwesomeIcon icon={faApple} color="#7d7d7d" style={{ position: "relative", bottom: "1.5px" }} />,
      linux: <FontAwesomeIcon icon={faLinux} size="sm" />,
      ubuntu: <GrUbuntu style={{ 
        position: "relative", 
        bottom: "2px",
        color: "#e95420" }} />,
      virtualbox: <SiVirtualbox style={{ 
        position: "relative", 
        bottom: "2px",
        color: "#035397" }} />,
      vmware: <SiVmware style={{ 
        position: "relative", 
        bottom: "2px", right: "2px", fontSize: "33"}} />,
    }
  },

  skill_titles: {
    front_end: "Front-End",
    backend_end: "Back-End",
    software_and_cloud: "Software and Cloud Services",
    os_and_vm: "OS and Virtualization Tools",
    data_analysis: "Data Analysis",
  },
  
  code: {
    javascript : [
      {
        feature: "Javascript",
        icon: <FontAwesomeIcon icon={faJsSquare} size="sm" />,
      },
      {
        feature: "ReactJS",
        icon: <FontAwesomeIcon icon={faReact} size="sm" />,
      },
      {
        feature: "NodeJS",
        icon: <FontAwesomeIcon icon={faNodeJs} size="sm" />,
      },
    ],

    python : [
      {
        feature: "Python",
        icon: <FontAwesomeIcon icon={faPython} size="sm" />,
      },
      {
        feature: "Anaconda",
        icon: <SiAnaconda />,
      },
      {
        feature: "Jupyter Notebook",
        icon: <SiJupyter/>,
      },
      {
        feature: "Django",
        icon: <SiDjango />,
      },
      {
        feature: "Flask",
        icon: <SiFlask />,
      },
      {
        feature: "NumPy",
        icon: <SiNumpy />,
      },
      {
        feature: "Pandas",
        icon: <SiPandas />,
      },
      {
        feature: "SciKitLearn",
        icon: <SiScikitlearn />,
      },
    ],

    web_dev : [
      {
        feature: "HTML5",
        icon: <FontAwesomeIcon icon={faHtml5} size="sm" />,
      },
      {
        feature: "CSS3",
        icon: <FontAwesomeIcon icon={faCss3Alt} size="sm" />,
      },
      {
        feature: "Bootstrap",
        icon: <FontAwesomeIcon icon={faBootstrap} size="sm" />,
      },
    ],

    databases : [
      {
        feature: "MySQL",
        icon: <SiMysql />,
      },
      {
        feature: "PostGresSQL",
        icon: <SiPostgresql />,
      },
      {
        feature: "SQLite",
        icon: <SiSqlite />,
      },
      {
        feature: "MongoDB",
        icon: <SiMongodb />,
      },
    ],

    data_analysis : [
      {
        feature: "R",
        icon: <SiRstudio />,
      },
      {
        feature: "Visual Basic for Applications",
        icon: <SiMicrosoftexcel />,
      },
    ]
  },

  os : [
    {
      feature: "Windows",
      icon: <FontAwesomeIcon icon={faWindows} size="sm" />,
    },
    {
      feature: "Mac",
      icon: <FontAwesomeIcon icon={faApple} size="sm" />,
    },
    {
      feature: "Linux",
      icon: <FontAwesomeIcon icon={faLinux} size="sm" />,
    },
  ],

  software : [
    {
      feature: "Git",
      icon: <FontAwesomeIcon icon={faGitAlt} size="sm" />,
    },
    {
      feature: "GitHub",
      icon: <FontAwesomeIcon icon={faGithub} size="sm" />,
    },
    {
      feature: "Microsoft Office",
      icon: <SiMicrosoftoffice />,
    },
    {
      feature: "Microsoft PowerBI",
      icon: <SiPowerbi />,
    },
    {
      feature: "Tableau",
      icon: <SiTableau />,
    },
    {
      feature: "Microsoft SQL Server Management Studio",
      icon: <SiMicrosoftsqlserver />,
    },
  ],

    apis : [
      {
       feature: "Google Maps",
       icon: <SiGooglemaps/>,
      },
      {
       feature: "Spotify",
       icon: <FontAwesomeIcon icon={faSpotify} size="sm" />,
      },
      {
        feature: "Youtube",
        icon: <FontAwesomeIcon icon={faYoutube} size="sm" />,
      },
    ],

    cloud : [
      {
        feature: "Amazon Web Services",
        icon: <FontAwesomeIcon icon={faAws} size="sm" />,
     },
     {
       feature: "Google Cloud Platform",
        icon: <SiGooglecloud />,
     },
    ],

    math : [
      {
        feature: "Statistics",
        icon: <FcStatistics />,
      },
      {
        feature: "Probability",
        icon: <FaPercent />,
      },
      {
        feature: "Calculus",
        icon: <AiOutlineFunction />,
      },
      {
       feature: "Linear Alegbra",
        icon: <SiMatrix />,
      },
    ]
}

export default skillsAndServices;