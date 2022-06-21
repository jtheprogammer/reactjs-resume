import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const crypto1 = require("./../assets/CryptoAPI/btc.JPG");
const crypto2 = require("./../assets/CryptoAPI/btc.JPG");
const crypto3 = require("./../assets/CryptoAPI/eth.JPG");

const robinhood1 = require("./../assets/RobinhoodClone/UI.JPG");

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
          icon: <FontAwesomeIcon icon={faGithub} size="lg" />,
        },
      ],
    },
    {
      tag: "javascript",
      images: [
        robinhood1
      ],
      title: "Robinhood Home Page UI",
      description: 'This application retrieves stock price information using the Finnhub API via Axios. Firebase is used to store information regarding the number of shares a user "owns", in which they can buy more shares or sell their current ones. The graph displayed was created using ChartJS. ',
      caption: "Clone of the Robinhood stock trading app, created with ReactJS, Google Firebase and the Finnhub API.",
      links: [
        {
          link: "https://github.com/jtheprogammer/robinhood_clone",
          icon: <FontAwesomeIcon icon={faGithub} size="lg" />,
        },
      ],
    },
    {
      tag: "javascript",
      images: [
        "https://img.freepik.com/free-vector/hand-painted-watercolor-pastel-sky-background_23-2148902771.jpg?w=2000",
        "https://cdn.pixabay.com/photo/2016/06/02/02/33/triangles-1430105__480.png",
      ],
      title: "E-Commerce Site",
      description: "An e-commerce website created using the MERN Stack, along with a REST API which allows users to register, login, add to/update their cart, and submit orders using Stripe. Admins are able to view all orders and carts, update products and delete users. ",
      caption: "MERN Stack E-Commerce Project. Coming Soon.",
      links: [
        {
          link: "https://github.com/jtheprogammer",
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
      title: "Mock Python Project Slot",
      description: "",
      caption: "Notice the extra python tab above.",
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
