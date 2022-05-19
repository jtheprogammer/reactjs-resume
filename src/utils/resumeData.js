import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
import HistoryEduIcon from '@mui/icons-material/HistoryEdu';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUserTie, faLocationDot, faAt, faLaptopCode, faSignature, faMessage } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";



const resumeData = {
  position: "Former PhD in Immunology",

  identity: {
    full_name: "Jose Luis Cruz",
    icon: <FontAwesomeIcon icon={faSignature} size="xs" />,
  },

  goal: {
    job: "Software Developer",
    icon: <FontAwesomeIcon icon={faLaptopCode} size="xs" />,
  },
  
  location: {
    city: "Bronx, NY",
    icon: <FontAwesomeIcon icon={faLocationDot} size="xs" />,
  }, 

  email: {
    email: "jlcjobsearch@gmail.com",
    icon: <FontAwesomeIcon icon={faAt} size="xs" />,
  },

  message: {
    icon: <FontAwesomeIcon icon={faMessage} size="xs" flip="horizontal" />
  },

  download: "Download Resume",
  resume_title: "Resume",
  profile_icons: {
    main: <FontAwesomeIcon icon={faUserTie} />
  },

  socials: {
    LinkedIn: {
      link: "https://www.linkedin.com/in/jose-cruz-9a0677220/",
      text: "My LinkedIn Profile",
      icon: <FontAwesomeIcon icon={faLinkedin} size="xs" />,
    },
    GitHub: {
      link: "https://github.com/jtheprogammer",
      text: "My GitHub Portfolio",
      icon: <FontAwesomeIcon icon={faGithub} size="xs" />
    },
  },

  about_me: {
    title: "About Me",
    text: "Former PhD student-turned aspiring developer, who is interested in pursuing a career within the tech field, while continuing to learn more about the various langugages, tools and software booming within the field today. Learning how to program has been a truly exciting experience, and has given me a largely different perspective on how I see the technology I interact with. This project is one work which displays only a fraction of the work I've put into programming and my devotion towards becoming a programmer."
  },

  education: {
    title: "Academic History",
    icon: <HistoryEduIcon />,
    experiences: [
      {
        exp_id: 3,
        title: '"Self-Taught" Route',
        date: "March 2021 - Present",
        description: "During my final 6 months at AMC, I had truly come to terms that a career as a research wasn't right for me, while also discovering my passion for IT and programming. Since the completion of this project, it's been about a year since I've left the doctoral program. During this time, I've gotten intimately familiar with the various technologies listed on, displayed throughout and/or used to create this website."
      },
      {
        exp_id: 2,
        title: "Albany Medical College",
        date: "August 2018 - May 2021",
        description: "My first year attending the Immunology and Microbial Disease doctoral program was spent rotating in labs, whose focused ranged from bacterial diseases, like Tuberculosis, to the neurological disease Alzheimer's. Eventually, I had decided to join Dr. Katherine MacNamara's lab, in which I studied the effects of tick-borne diseases on hematopoiesis (the process of producing blood cells).",
      },
      {
        exp_id: 1,
        title: "College of Saint Rose",
        date: "August 2014 - May 2018",
        description: "My 4-year period at Saint Rose is when I truly began recognizing and acting on my passion for academics and natural sciences, and took great pride in it. In addition to my required coursework, I was president of the Minority Association of Pre-medical Students (MAPS, while also conducting research on antibiotic resistant in bacteria. I eventually graduated Saint Rose, having attained a BS in Biology, and minor in Chemistry, with cum laude honors.",
      }
    ]
  },

  work: {
    title: "Work Experience",
    icon: <WorkHistoryIcon />,
    experiences: [
      {
        exp_id: 4,
        title: "Secretary & Project Assistant",
        location: "Welfare Research, Inc.",
        date: "May 2021 - November 2021",
        description: "Processing of grant applications for daycare reimbursement expenses during COVID-19. Written and verbal communication with English- and Spanish-speaking daycare providers",
      },
      {
        exp_id: 3,
        title: "Ph.D Research Student",
        location: "Albany Medical College",
        date: "August 2018 - May 2021",
        description: "The summer following my graduation from undergrad, I had joined the Immunology and Microbial Disease program at AMC as a PhD student. After completing freshman year courses and lab rotations, I joined Dr. Katherine MacNamara's lab. While the biology isn't important at this moment, performing research at AMC required me to constantly collect, analyze, interpret and visualize data. This data is not only analyzed carefully, but also collected after I had created detailed scientific protocol, which was reviewed by my principal investigator.",
      },
      {
        exp_id: 2,
        title: "Research Experience for Undergraduates (REU) Student",
        location: "Unversity of Massachusetts Boston",
        date: "June 2017 - August 2017",
        description: "During the Spring of 2017, I had been fortunate enough to be accepted an REU program, which is summer research opportunity funded by the National Science Foundation (NSF). My summer here was spent working in the lab of Dr. Katherine McCusker, a developmental biologist whose lab studies the properities of limb regeneration within an amphibian known as the axolotl.",
      },
      {
        exp_id: 1,
        title: "Natural Sciences Tutor",
        location: "College of Saint Rose",
        date: "September 2016 - December 2017",
        description: "Assisted undergraduate students at any level in preparing for exams and understanding concepts within natural science courses. \n Expertise ranges from introductory (ie. BIO1/2, PHY1/2) to more advanced courses (ie. BIOCHEM1, Immunology)."
      },
    ]
  },

  my_services: {
    title: "Services and Expertise",
  },

  technical_skills: {
    title: "Technical Skills",
  },

  contact_page_titles: {
    contact_form: "Contact Me",
    contact_map: "Contact Map"
  }
}

export default resumeData;