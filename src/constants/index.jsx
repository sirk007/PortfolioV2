//Project 1
import dataExploration from '../assets/dataExploration.png';
import cleaningDataSet from '../assets/cleaningDataSet.png';
import describeData from '../assets/describeData.png';
import trainingData from '../assets/trainingData.png';
import linearRegression from '../assets/linearRegression.png';
import predictionDataSet from '../assets/predictionDataSet.png';

//Project 2
import poster from '../assets/poster.png';

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
    The goal is to apply regression analysis on a btc-usd pair data in order to create a prediction model that considers Open, High, Low and Volume features of the data set and takes the Close as the target. 
    Predicting bitcoin daily close price, by feeding data in with higher volume can give insight to how the price would behave if the total traded volume would increase or decrease allowing investors or traders to make more informed decisions. 

    </p>

    <h3 className="text-white text-2xl font-semibold mb-4">Data Exploration</h3>
    <p className="text-white mb-4">
    The dataset is based on BTC-USD pair which represents 2 years worth of daily gathered data from yahoo finance historical data. 
    The csv file contains columns Date, Open, High, Low, Close, Adj Close, Volume, has 731 instances of data resources, each representing 1 day. 
    </p>
    <div>
      <img
          src={dataExploration}
          alt="dataExploration"
          className="w-full h-auto mb-4 rounded-lg shadow-md"
        />
        <img
          src={cleaningDataSet}
          alt="cleaningDataSet"
          className="w-full h-auto mb-4 rounded-lg shadow-md"
        />
    </div>
    <p className="text-white mb-4">
    Various columns were not needed such as Date as each row represents an instance and Adj close since it and close price were identical. 
    The dataset included NaN rows which had to be removed. 
    Open feature contains the daily open price of BTC-USD pair, High feature includes the 24 hour highest price swing, 
    Low feature represents the lowest price in 24 hour time frame, the Volume represents the total volume traded within 24 hours. 
    Overall the dataset seems to be of very good quality, it is likely that a good prediction model can be created using the data. 
    </p>
    <div>
      <img
          src={describeData}
          alt="describeData"
          className="w-full h-auto mb-4 rounded-lg shadow-md"
        />
    </div>

    <h3 className="text-white text-2xl font-semibold mb-4">Modeling</h3>
    <p className="text-white mb-4">
    The prediction uses the Linear Regression model, to train the data I used the train_test_split function from sklearn library.
    </p>
    <div>
      <img
          src={trainingData}
          alt="trainingData"
          className="w-full h-auto mb-4 rounded-lg shadow-md"
        />
    </div>
    <p className="text-white mb-4">
    X variable contains the features which are columns, y variable contains the target which will be used to attempt to predict the close price.
    train_test_split function divides the dataset into two subsets, one for training and the other for testing.
      <li>Training Set: The set will contain (X_train, y_train) which holds 80% of the dataset btc-usd, the X_train variable contains the feature list which are the columns and y_train contains the close price target price list.</li>
      <li>Testing Set: The set will contain (X_test, y_test) which is 20% of the dataset btc-usd pair data. This data is allocated to test the model and is not part of the training set. The X_test holds the features for testing and y_test contains the close target values.</li>
      <li>Random State set to 800 to repeat the results.</li>
    </p>
    <div>
      <img
          src={linearRegression}
          alt="linearRegression"
          className="w-full h-auto mb-4 rounded-lg shadow-md"
        />
    </div>
    <p className="text-white mb-4">
      Imported LinearRegression model from sklearn library, created a variable called model that holds an instance of LinearRegression, and use the .fit() function within the instance of the LinearRegression with X_train and y_train variables that hold 80% of the btc-usd dataset to train the model.
    </p>
    <h3 className="text-white text-2xl font-semibold mb-4">Evaluation</h3>
    <p className="text-white mb-4">
    The model was taught with 80% of the data using features such as Open price, highest daily price, lowest daily price and total daily volume, using daily close price as the target allowed me to design a pretty accurate prediction model by returning the RMSE I can test the deviation percentage and check the accuracy of the result.<br />
    <strong>RMSE</strong>: 488.8158317511534<br />
    <strong>Max Close</strong>: 57806.566406<br />
    <strong>Equation</strong>: (488.8158317511534/57806.566406) x 100 = 0.845606065%<br />
    <strong>Deviation</strong>: 0.85 being close to zero signifies that this data set works well with this model.<br />
    <strong>Intrecept</strong>: 172.930427171028, meaning if Open price became 0, High price was 0, lowest price was 0 and no volume = 0 the resulting price of btc would be 172 usd.<br />
    <strong>Slopes</strong>: [‘Open’: -6.25063732e-01  ‘High’: 8.40164541e-01  ‘Low’:7.79387619e-01 ‘Volume’: -1.89552598e-09]. Open price shows a negative coefficient suggesting that increase in Open price tends to decrease the predicted price, High, Low positive coefficients indicate positive correlation with the predicted close price. Volume contains a negative coefficient but its relatively low so impact is not as great as the other features.
    </p>
    <div>
      <img
          src={predictionDataSet}
          alt="predictionDataSet"
          className="w-full h-auto mb-4 rounded-lg shadow-md"
        />
    </div>
    <p className="text-white mb-4">
      The training set result matched the plotted actual line very accurately.
    </p>
    <h3 className="text-white text-2xl font-semibold mb-4">Conclusion</h3>
    <p className="text-white mb-4">
    The Linear Regression model showed a good ability to predict Bitcoin’s daily close price based on the BTC-USD historical Open, High, Low and Volume data. The RMSE returned a 488.816 and a low deviation of 0.85%, the model showed accurate predictions.
    The analysis of the coefficients showed how each feature influenced the the close price, Despite volume’s negative coefficient, its impact on predictions was relatively low.
    The model’s scope is based on 2 years worth of data from the BTC-USD pair, it does not consider many other external variables that influence cryptocurrency markets. The model serves as a valuable tool to predict closing price based on various metrics.
    </p>
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

    <div>
      <img
          src={poster}
          alt="poster"
          className="w-full h-auto mb-4 rounded-lg shadow-md"
        />
    </div>

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
        src=""
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
    <div>
      <img
          src={predictionDataSet}
          alt="predictionDataSet"
          className="w-full h-auto mb-4 rounded-lg shadow-md"
        />
    </div>
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

