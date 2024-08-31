export const navItems = [
  { label: "Home", href: "Header" },
  { label: "Skills", href: "Skills" },
  { label: "Projects", href: "ProjectsSection" },
  { label: "Resume/CV", href: "DownloadCV" },
  { label: "Contact", href: "Footer" },
];

  
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
  import { faJava, faPython, faPhp, faNodeJs, faReact, faGithub, faLinux } from '@fortawesome/free-brands-svg-icons';
  import { faCodeBranch, faCogs, faTools, faDatabase  } from '@fortawesome/free-solid-svg-icons';
  
  // Create an array of skill objects
  export const skills = [
    {
      icon: <FontAwesomeIcon icon={faJava} size="2x" />,
      text: "Java",
      description: "A versatile and widely-used object-oriented programming language known for its portability across platforms and robustness. Commonly used in enterprise applications, Android app development, and large systems.",
    },
    {
      icon: <FontAwesomeIcon icon={faPython} size="2x" />,
      text: "Python",
      description: "A high-level programming language with an emphasis on code readability and simplicity. Popular for web development, data analysis, artificial intelligence, scientific computing, and automation.",
    },
    {
      icon: <FontAwesomeIcon icon={faPhp} size="2x" />,
      text: "PHP",
      description: "A server-side scripting language designed for web development but also used as a general-purpose language. Known for its ease of integration with databases and HTML, making it a popular choice for building dynamic websites.",
    },
    {
      icon: <FontAwesomeIcon icon={faNodeJs} size="2x" />,
      text: "Node.js",
      description: "A runtime environment that allows JavaScript to be used for server-side scripting. Known for its non-blocking, event-driven architecture, Node.js is popular for building scalable network applications and APIs. Experienced with tools and libraries such as Express.js for web servers, CORS for handling cross-origin requests, BCrypt for password hashing, and JSON Web Tokens (JWT) for secure user authentication.",
    },
    {
      icon: <FontAwesomeIcon icon={faReact} size="2x" />,
      text: "React.js",
      description: "A JavaScript library for building user interfaces, particularly single-page applications where a responsive and interactive user experience is crucial. Experienced with React Router DOM for client-side routing, Formik for form handling, Yup for schema validation, and Axios for making HTTP requests.",
    },
    {
      icon: <FontAwesomeIcon icon={faDatabase} size="2x" />,
      text: "MySQL",
      description: "A relational database management system that uses SQL for accessing and managing data.",
    },
  ];

  export const miscellaneous = [
    {
      icon: <FontAwesomeIcon icon={faLinux} size="2x" />,
      text: "Linux",
      description: "An open-source operating system known for its stability and flexibility.",
    },
    {
      icon: <FontAwesomeIcon icon={faCodeBranch} size="2x" />, // Placeholder for Postman
      text: "Postman",
      description: "A tool for API testing and development.",
    },
    {
      icon: <FontAwesomeIcon icon={faTools} size="2x" />, // Placeholder for Insomnia
      text: "Insomnia",
      description: "A REST client for API testing and debugging.",
    },
    {
      icon: <FontAwesomeIcon icon={faCogs} size="2x" />, // Placeholder for Adobe
      text: "Adobe Suite",
      description: "Experience with Adobe Suite including Photoshop, Illustrator, etc.",
    },
    {
      icon: <FontAwesomeIcon icon={faCodeBranch} size="2x" />, // Placeholder for Jira
      text: "Jira",
      description: "A tool for project management and issue tracking.",
    },
    {
      icon: <FontAwesomeIcon icon={faCodeBranch} size="2x" />, // Placeholder for Git
      text: "Git",
      description: "A distributed version control system for tracking changes in source code.",
    },
  ];
  

  export const contactInformation = [
    { href: "#", text: "kristijonas.ch@gmail.com" },
    { href: "#", text: "087-7149990" },
    { href: "#", text: "Kildare Town, Co.Kildare" },
  ];
  
const linkedInProfileUrl = 'https://www.linkedin.com/in/kris-ch-42446329b/';
const githubProfileUrl = 'https://github.com/sirk007';

export const socialMediaLinks = [
  { href: githubProfileUrl, text: "GitHub" },
  { href: linkedInProfileUrl, text: "LinkedIn" },
];
  
  export const navigationLinks = [
    { href: "#", text: "Home" },
    { href: "#", text: "About Me" },
    { href: "#", text: "Skills" },
    { href: "#", text: "Projects" },
    { href: "#", text: "Contact" },
  ];
  
// Project Array detailedDescriptions
export const detailedDescriptionBTCUSD = (
  <div>
    <h3 className="text-white text-2xl font-semibold mb-4">Introduction</h3>
    <p className="text-white mb-4">
      This project involved analyzing historical BTC-USD data to develop a
      model that predicts future prices.
    </p>

    <h3 className="text-white text-2xl font-semibold mb-4">Objective</h3>
    <p className="text-white mb-4">
      The goal was to apply regression analysis to forecast Bitcoin’s daily
      close price using features like Open, High, Low, and Volume.
    </p>

    <h3 className="text-white text-2xl font-semibold mb-4">Methodology</h3>
    <p className="text-white mb-4">
      The model was trained using Linear Regression, and various metrics such
      as R-squared and Mean Absolute Error were used to evaluate its
      performance.
    </p>

    <h3 className="text-white text-2xl font-semibold mb-4">Visualization</h3>
    <p className="text-white mb-4">
      The final model was visualized using Matplotlib to showcase the
      predictions against actual data.
    </p>

    <h3 className="text-white text-2xl font-semibold mb-4">Images</h3>
    <div>
      <img
        src="path/to/image1.jpg"
        alt="Visualization 1"
        className="w-full h-auto mb-4 rounded-lg shadow-md"
      />
      <img
        src="path/to/image2.jpg"
        alt="Visualization 2"
        className="w-full h-auto mb-4 rounded-lg shadow-md"
      />
    </div>
  </div>
);

// Project Array detailedDescriptions
export const detailedDescriptionDogoHome = (
  <div>
    <h3 className="text-white text-2xl font-semibold mb-4">Introduction</h3>
    <p className="text-white mb-4">
      DogoHome is a full-stack web application that enables users and shelters to manage lost and found pets. 
      The application supports user authentication, profile management, and advanced search functionality. 
      It was built using the MERN stack with MySQL for data persistence.
    </p>

    <h3 className="text-white text-2xl font-semibold mb-4">Objective</h3>
    <p className="text-white mb-4">
      The goal was to apply regression analysis to forecast Bitcoin’s daily
      close price using features like Open, High, Low, and Volume.
    </p>

    <h3 className="text-white text-2xl font-semibold mb-4">Methodology</h3>
    <p className="text-white mb-4">
      The model was trained using Linear Regression, and various metrics such
      as R-squared and Mean Absolute Error were used to evaluate its
      performance.
    </p>

    <h3 className="text-white text-2xl font-semibold mb-4">Visualization</h3>
    <p className="text-white mb-4">
      The final model was visualized using Matplotlib to showcase the
      predictions against actual data.
    </p>

    <h3 className="text-white text-2xl font-semibold mb-4">Images</h3>
    <div>
      <img
        src="path/to/image1.jpg"
        alt="Visualization 1"
        className="w-full h-auto mb-4 rounded-lg shadow-md"
      />
      <img
        src="path/to/image2.jpg"
        alt="Visualization 2"
        className="w-full h-auto mb-4 rounded-lg shadow-md"
      />
    </div>
  </div>
);

export const detailedDescriptionJDBC = (
  <div>
    <h3 className="text-white text-2xl font-semibold mb-4">Introduction</h3>
    <p className="text-white mb-4">
    JDBC
    </p>

    <h3 className="text-white text-2xl font-semibold mb-4">Objective</h3>
    <p className="text-white mb-4">
      The goal was to apply regression analysis to forecast Bitcoin’s daily
      close price using features like Open, High, Low, and Volume.
    </p>

    <h3 className="text-white text-2xl font-semibold mb-4">Methodology</h3>
    <p className="text-white mb-4">
      The model was trained using Linear Regression, and various metrics such
      as R-squared and Mean Absolute Error were used to evaluate its
      performance.
    </p>

    <h3 className="text-white text-2xl font-semibold mb-4">Visualization</h3>
    <p className="text-white mb-4">
      The final model was visualized using Matplotlib to showcase the
      predictions against actual data.
    </p>

    <h3 className="text-white text-2xl font-semibold mb-4">Images</h3>
    <div>
      <img
        src="path/to/image1.jpg"
        alt="Visualization 1"
        className="w-full h-auto mb-4 rounded-lg shadow-md"
      />
      <img
        src="path/to/image2.jpg"
        alt="Visualization 2"
        className="w-full h-auto mb-4 rounded-lg shadow-md"
      />
    </div>
  </div>
);

export const detailedDescriptionHDDDestruction = (
  <div>
    <h3 className="text-white text-2xl font-semibold mb-4">Introduction</h3>
    <p className="text-white mb-4">
    HDD Destruction
    </p>

    <h3 className="text-white text-2xl font-semibold mb-4">Objective</h3>
    <p className="text-white mb-4">
      The goal was to apply regression analysis to forecast Bitcoin’s daily
      close price using features like Open, High, Low, and Volume.
    </p>

    <h3 className="text-white text-2xl font-semibold mb-4">Methodology</h3>
    <p className="text-white mb-4">
      The model was trained using Linear Regression, and various metrics such
      as R-squared and Mean Absolute Error were used to evaluate its
      performance.
    </p>

    <h3 className="text-white text-2xl font-semibold mb-4">Visualization</h3>
    <p className="text-white mb-4">
      The final model was visualized using Matplotlib to showcase the
      predictions against actual data.
    </p>

    <h3 className="text-white text-2xl font-semibold mb-4">Images</h3>
    <div>
      <img
        src="path/to/image1.jpg"
        alt="Visualization 1"
        className="w-full h-auto mb-4 rounded-lg shadow-md"
      />
      <img
        src="path/to/image2.jpg"
        alt="Visualization 2"
        className="w-full h-auto mb-4 rounded-lg shadow-md"
      />
    </div>
  </div>
);

export const detailedDescriptionDataScraping = (
  <div>
    <h3 className="text-white text-2xl font-semibold mb-4">Introduction</h3>
    <p className="text-white mb-4">
    DataScraping!
    </p>

    <h3 className="text-white text-2xl font-semibold mb-4">Objective</h3>
    <p className="text-white mb-4">
      The goal was to apply regression analysis to forecast Bitcoin’s daily
      close price using features like Open, High, Low, and Volume.
    </p>

    <h3 className="text-white text-2xl font-semibold mb-4">Methodology</h3>
    <p className="text-white mb-4">
      The model was trained using Linear Regression, and various metrics such
      as R-squared and Mean Absolute Error were used to evaluate its
      performance.
    </p>

    <h3 className="text-white text-2xl font-semibold mb-4">Visualization</h3>
    <p className="text-white mb-4">
      The final model was visualized using Matplotlib to showcase the
      predictions against actual data.
    </p>

    <h3 className="text-white text-2xl font-semibold mb-4">Images</h3>
    <div>
      <img
        src="path/to/image1.jpg"
        alt="Visualization 1"
        className="w-full h-auto mb-4 rounded-lg shadow-md"
      />
      <img
        src="path/to/image2.jpg"
        alt="Visualization 2"
        className="w-full h-auto mb-4 rounded-lg shadow-md"
      />
    </div>
  </div>
);

export const detailedDescriptionDistributedSystems = (
  <div>
    <h3 className="text-white text-2xl font-semibold mb-4">Introduction</h3>
    <p className="text-white mb-4">
    Distributed Systems Assignment
    </p>

    <h3 className="text-white text-2xl font-semibold mb-4">Objective</h3>
    <p className="text-white mb-4">
      The goal was to apply regression analysis to forecast Bitcoin’s daily
      close price using features like Open, High, Low, and Volume.
    </p>

    <h3 className="text-white text-2xl font-semibold mb-4">Methodology</h3>
    <p className="text-white mb-4">
      The model was trained using Linear Regression, and various metrics such
      as R-squared and Mean Absolute Error were used to evaluate its
      performance.
    </p>

    <h3 className="text-white text-2xl font-semibold mb-4">Visualization</h3>
    <p className="text-white mb-4">
      The final model was visualized using Matplotlib to showcase the
      predictions against actual data.
    </p>

    <h3 className="text-white text-2xl font-semibold mb-4">Images</h3>
    <div>
      <img
        src="path/to/image1.jpg"
        alt="Visualization 1"
        className="w-full h-auto mb-4 rounded-lg shadow-md"
      />
      <img
        src="path/to/image2.jpg"
        alt="Visualization 2"
        className="w-full h-auto mb-4 rounded-lg shadow-md"
      />
    </div>
  </div>
);

