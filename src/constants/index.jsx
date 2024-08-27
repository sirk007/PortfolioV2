export const navItems = [
    { label: "Home", href: "#" },
    { label: "About Me", href: "#" },
    { label: "Skills", href: "#" },
    { label: "Projects", href: "#" },
    { label: "Resume/CV", href: "#" },
    { label: "Contact", href: "#" },
  ];
  
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
  import { faJava, faPython, faPhp, faNodeJs, faReact, faGithub } from '@fortawesome/free-brands-svg-icons';
  
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
      icon: <FontAwesomeIcon icon={faGithub} size="2x" />,
      text: "GitHub",
      description: "A platform for version control and collaboration, allowing developers to manage code repositories using Git. GitHub facilitates code sharing, collaboration, and version tracking with tools for project management and code review.",
    },
  ];
  

  export const contactInformation = [
    { href: "#", text: "pepe@gmail.com" },
    { href: "#", text: "087-123456" },
    { href: "#", text: "Co. Street, Street" },
    { href: "#", text: "Resume" },
  ];
  
  export const socialMediaLinks = [
    { href: "#", text: "GitHub" },
    { href: "#", text: "LinkedIn" },
  ];
  
  export const navigationLinks = [
    { href: "#", text: "Home" },
    { href: "#", text: "About Me" },
    { href: "#", text: "Skills" },
    { href: "#", text: "Projects" },
    { href: "#", text: "Contact" },
  ];
  