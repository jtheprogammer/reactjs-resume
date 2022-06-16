import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const crypto1 = require("./../assets/CryptoAPI/btc.JPG");
const crypto2 = require("./../assets/CryptoAPI/btc.JPG");
const crypto3 = require("./../assets/CryptoAPI/eth.JPG");

const portfolioData = {
  title: "Portfolio",
  projects: [
    {
      tag: "javascript",
      images: [crypto1, crypto2, crypto3],
      title: "Cryptocurrency Market API",
      description:
        "This ReactJS application retrieves cryptocurrency information using the CoinGecko API using Axios. No API key needed, just download the source code from Github and try it out. \n Searching is case insensitive and uses the complete name of the crypto token. (ie Bitcoin not BTC)",
      caption: "Cryptocurrency app using ReactJS and CoinGecko API.",
      links: [
        {
          link: "https://github.com/jtheprogammer/ReactJS_CryptoSearch_API",
          icon: <FontAwesomeIcon icon={faGithub} size="48px" />,
        },
      ],
    },
    {
      tag: "javascript",
      images: [
        "https://img.freepik.com/free-vector/hand-painted-watercolor-pastel-sky-background_23-2148902771.jpg?w=2000",
        "https://cdn.pixabay.com/photo/2016/06/02/02/33/triangles-1430105__480.png",
      ],
      title: "Project 2",
      description: "A project 3rr 32r 3rt",
      caption: "A short caption",
      links: [
        {
          link: "www.github.com",
          icon: <FontAwesomeIcon icon={faGithub} size="lg" />,
        },
      ],
    },
    {
      tag: "python",
      images: [
        "https://img.freepik.com/free-vector/hand-painted-watercolor-pastel-sky-background_23-2148902771.jpg?w=2000",
        "https://cdn.pixabay.com/photo/2016/06/02/02/33/triangles-1430105__480.png",
      ],
      title: "Project 3",
      description: "A project 3rr 32r 3rt",
      caption: "A short caption",
      links: [
        {
          link: "www.github.com",
          icon: <FontAwesomeIcon icon={faGithub} size="lg" />,
        },
      ],
    },
  ],
};

export default portfolioData;
