//Project 1
import dataExploration from '../assets/dataExploration.png';
import cleaningDataSet from '../assets/cleaningDataSet.png';
import describeData from '../assets/describeData.png';
import trainingData from '../assets/trainingData.png';
import linearRegression from '../assets/linearRegression.png';
import predictionDataSet from '../assets/predictionDataSet.png';

//Project 2
import poster from '../assets/poster.png';

//Project 3
import javaGUI from '../assets/JavaGUI.png';
import relationalDatabase from '../assets/relationalDatabase.png';
import javaEventHandling from '../assets/javaEventHandling.png';

// Project 6
import serverJDBC from '../assets/serverJDBC.png';
import databaseHSQLDB from '../assets/databaseHSQLDB.png';
import configureDBConnection from '../assets/configureDBConnection.png';
import schemaHSQLDB from '../assets/schemaHSQLDB.png';
import clientSideSerializing from '../assets/clientSideSerializing.png';
import postmanSerializing from '../assets/postmanSerializing.png';
import clientSideDeserializing from '../assets/clientSideDeserializing.png';
import xmlPostmanDecerializing from '../assets/xmlPostmanDecerializing.png';
import jsonPostmanDeserializing from '../assets/jsonPostmanDeserializing.png';
import guiComponents from '../assets/guiComponents.png';
import javaHandling from '../assets/javaHandling.png';


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
  
// --------------------- Project 1 ---------------------
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

// --------------------- Project 2 ---------------------
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
  </div>
);

// --------------------- Project 3 ---------------------
export const detailedDescriptionJDBC = (
  
  <div>
    <div>
      <img
          src={javaGUI}
          alt="javaGUI"
          className="w-full h-auto mb-4 rounded-lg shadow-md"
        />
    </div>
    <h3 className="text-white text-2xl font-semibold mb-4">Introduction</h3>
    <p className="text-white mb-4">
      For the JDBC application project I decided to design a platform where a veterinary business could perform CRUD operations (Create, Remove, Update, Delete) queries
      on resources from a database schema called dbass2 which includes a ‘owner_table’ and a ‘dog_details’ tables. 
      Using GUI staff can create new users and only add new dog resources when an existing user exists, 
      ensuring that dogs data is directly connected to a user before it can be added to the database using relational keys to achieve data integrity. 
      The application enables staff to retrieve all dogs that a user has admitted to the veterinary among other functionality such as printing various data to a CSV file. 
      The application simplifies tasks, offering staff an overview of all admitted dogs and the ability to generate CSV files. 
      By digitizing record-keeping and fostering data integrity, it enhances efficiency and decision-making for the veterinary business.
    </p>
    
    <p className="text-white mb-4">
      The GUI includes a panel for user registration and dog registrations forms once inserted it adds or alters resources to the relevant database. 
      Both user and a dog have the utility to export various data from a database to a CSV File as shown in the picture above “Export Owner Data” and “Export Dog Data”. 
      The GUI includes JScrollPane that allows the user and dog tables to become interactive and scrollable alongside of defining the height and width dimensions. 
      CRUD operations are attached to the JButtons Insert, Delete, Update buttons within both user and dog panels that trigger on user interaction ActionListener's 
      enable the events to occur.
    </p>

    <h3 className="text-white text-2xl font-semibold mb-4">Relational Database Management System</h3>
    <div>
      <img
          src={relationalDatabase}
          alt="relationalDatabase"
          className="w-full h-auto mb-4 rounded-lg shadow-md"
        />
    </div>

    <p className="text-white mb-4">
      I designed a Stored Procedure that can be called when an event is triggered within the Java event handling interaction which retrieves the following attributes of a specific resource: dog name, breed, and age.<br />
      &quot;// Prepare the SQL call to the stored procedure<br />
      String storedProcedureCall = &quot;&amp;#123;CALL GetDogsByOwnerID(?)&amp;#125;&quot;;<br />
      callableStatement = con.prepareCall(storedProcedureCall);&quot;<br />
      The GUI includes 2 separate tables: owner table and dog table. I created a refreshOwnerTableFromDB &amp; refreshFromDB 
      within the QueryTableModel.java class, which iterates through the contents of the tables when CRUD operations are performed to update the table, or when the functions are directly called when the connections are established.
    </p>

    <h3 className="text-white text-2xl font-semibold mb-4">Java Event Handling</h3>
    <div>
      <img
          src={javaEventHandling}
          alt="javaEventHandling.png"
          className="w-full h-auto mb-4 rounded-lg shadow-md"
        />
    </div>

    <p className="text-white mb-4">
      <strong>Functionality</strong>
      The event handling functions are designed to respond to user interactions with GUI JButtons. 
      When a user clicks any of the buttons, it triggers events performing CRUD operations on the associated database tables.
      <strong>Data Interaction</strong>
      Data Interaction: User input from JTextFields is captured, assigned to variables, and utilized as conditions in MySQL queries. 
      This interaction allows for efficient modification of resources within the database schema tables.
      <strong>Export Functionality</strong>
      Export Functionality: The export functions within the owner and dog panels utilize the query resultSet. 
      Upon triggering, these functions execute SQL queries, retrieve the resultSet, and store it in the 'rs' variable. 
      This resultSet is then passed to the 'writeToFile' class, which efficiently generates a CSV file.
      <strong>CSV File Strucure</strong>
      CSV File Structure: The 'writeToFile' class organizes the resultSet content into a structured CSV file, defining columns and rows based on the retrieved data. 
      This digitized representation ensures clarity and ease of access to the exported data.
      <strong>Error Handling</strong>
      To ensure smooth functionality various error handling has been integrated within the functions such as when a staff attempt to create a new owner
      or dog by inserting a new resource into the database the function checks for if all the fields have been entered, if not print to console a warning alerting the staff.
    </p>

    <h3 className="text-white text-2xl font-semibold mb-4">Conclusion</h3>
    <p className="text-white mb-4">
      The JDBC application offers an intuitive interface facilitating efficient data management and CRUD operations, significantly enhancing the veterinary business workflow.
      The integration of the type 4 JDBC Driver within the Java project ensured seamless connectivity between the application and the MySQL database schema. 
      The QueryTableModel.java class played a pivotal role, enabling the population of content within the owner and dog database panels. 
      The incorporation of CRUD operations within the event handling mechanism facilitated data manipulation within the database. 
      Post-execution of SQL queries and subsequent data updates in the GUI interface, the QueryTableModel.java functions efficiently refreshed the tables, 
      ensuring real-time data representation.

      The project's success lies in its ability to streamline the process of admitting new dogs and clients to the veterinary business while 
      maintaining data accuracy and accessibility through an intuitive and responsive interface.

      Issues: I am developing on Linux due to compatibility issues between mysql servers I was not able to execute the stored procedures 
      from the database schema due to the fact that there is a difference in versions, I attempted to fix these but came no avail as the 
      MySQL servers are updated with the compile time of servers and I could not download a custom version of the MySQL as linux does not support the latest MySQL release.
    </p>
  </div>
);

// --------------------- Project 4 ---------------------
export const detailedDescriptionHDDDestruction = (
  <div>
    <h3 className="text-white text-2xl font-semibold mb-4">Introduction</h3>
    <p className="text-white mb-4">
      <span className="blinking-text">Under Construction</span>
    </p>
  </div>
);

// --------------------- Project 5 ---------------------
export const detailedDescriptionDataScraping = (
  <div>
    <h3 className="text-white text-2xl font-semibold mb-4">Introduction</h3>
    <p className="text-white mb-4">
      <span className="blinking-text">Under Construction</span>
    </p>
  </div>
);

// --------------------- Project 6 ---------------------


export const detailedDescriptionDistributedSystems = (
  <div>
    <h3 className="text-white text-2xl font-semibold mb-4">System Architecture</h3>
    <p className="text-white mb-4">
      Apache Tomcat/8.5.79 server was used to initiate port 8080 gate and enable HTTP requests and responses to be handled within the java environment, 
      a new server is created ensuring that the properties is configured correctly ensuring that the location of the Server/Tomcat v8.5 Server at localhost.server is switched, 
      within the Overview of the server config, the Server Locations allows Tomcat to handle installations to initiate the server 
      once configured the project can then be added to the Tomcat v8.5 Server at localhost once the instance Synchronizes, it enables the Jersey RESTful CRUD operation support
    </p>

    <div>
      <img
          src={serverJDBC}
          alt="serverJDBC.png"
          className="w-full h-auto mb-4 rounded-lg shadow-md"
        />
    </div>

    <h3 className="text-white text-2xl font-semibold mb-4">Implementation</h3>
    <p className="text-white mb-4">
      <strong>Database</strong>
      HSQLDB is an open-source SQL database implemented in Java, managedDB_v3.xml file contains an ANT script that is used to start/launch the database engine. 
      Due to the project being a Dynamic Web Project It requires a hsqldb-2.3.4.jar library to be added to the build path 
      of the project as well as the lib folder within the webapp hierarchy inside of the WEB-INF folder which is not added to the build path since it compiles on run time. 
      Using the Ant script View in the Java EE perspective enables a drag and drop approach of initiating the managedDB_v3.xml 
      which then allows access to its functions such as start/stop/manage. 
    </p>
    <div>
      <img
          src={databaseHSQLDB}
          alt="databaseHSQLDB.png"
          className="w-full h-auto mb-4 rounded-lg shadow-md"
        />
    </div>
    <p className="text-white mb-4">
      Configuring the database connection using the username and password through the manage function enables to connect to the MySQL server 
      that allows the generation of database Schema tables.
    </p>
    <div>
      <img
          src={configureDBConnection}
          alt="configureDBConnection.png"
          className="w-full h-auto mb-4 rounded-lg shadow-md"
        />
    </div>
    <p className="text-white mb-4">
      By creating a car table inside of the HSQLDB Schema allowed me to establish and define a table that can then be mapped 
      to an object and be handled by the java classes to perform the Jersey RESTful CRUD operations 
    </p>
    <div>
      <img
          src={schemaHSQLDB}
          alt="schemaHSQLDB.png"
          className="w-full h-auto mb-4 rounded-lg shadow-md"
        />
    </div>
    <h3 className="text-white text-2xl font-semibold mb-4">Server-Side Implementation</h3>
    <div className="text-white mb-4">
      <ol className="list-decimal pl-4">
        <li>
          <strong>Car.java</strong>: The purpose of the Car.java class is to represent the model for a car object. Its attributes are mapped to the database table columns so that this object can be then handled by the CarDAO and CarResource Java files to interact with the HSQLDB database. <br />
          <strong>Functionality</strong>
          <ul className="list-disc pl-4">
            <li>Defines attributes and methods to read and modify car objects.</li>
            <li>Contains constructors to initialize the car objects to handle specified values.</li>
            <li>Includes getters and setters.</li>
            <li>Uses JAXB (Java Architecture for XML Binding) annotations @XmlRootElement & @XmlType to enable XML serialization and deserialization.</li>
          </ul>
        </li>
        <li>
          <strong>CarDAO.java</strong>: The CarDAO.java class serves as a Data Access Object (DAO) responsible for interacting with the HSQLDB database to perform CRUD operations on the car entity. <br />
          <strong>Functionality</strong>
          <ul className="list-disc pl-4">
            <li>Provides methods to interact with the HSQLDB database, including retrieving all cars, adding a new car, updating an existing car, and deleting a car by its ID.</li>
            <li>Utilizes JDBC (Java Database Connectivity) for database connection establishment and SQL execution.</li>
            <li>Each function establishes the Class.forName class to load the JDBC driver, utilizes the DriverManager to establish a connection within the functions, and creates a statement variable `stmt` which has the connection passed to it for executing SQL queries. The `stmt` statements are initialized with the SQL query respectively to the function being called. Once the parameters are executed, the statements and connections are closed to ensure that data leaks do not occur.</li>
          </ul>
        </li>
        <li>
          <strong>CarResource.java</strong>: The CarResource.java class implements the RESTful web services endpoints for managing the car resources and acts as a resource handler for handling the HTTP requests related to the car object. <br />
          <strong>Functionality</strong>
          <ul className="list-disc pl-4">
            <li>Defines the methods annotated with HTTP request methods (@GET, @POST, @PUT, @DELETE) to handle the associated HTTP requests.</li>
            <li>Uses JAX-RS annotations to specify the path including PathParam and MIME media types for the resources, enabling the client to request specific content types such as JSON or XML.</li>
            <li>Calls methods from the CarDAO to perform CRUD operations on the car entities.</li>
            <li>Maps the HTTP requests to specific methods for retrieving all cars, adding new cars, updating an existing car, and deleting a car.</li>
            <li>JAX-RS handles serializing and deserializing Java objects to and from XML or JSON format automatically. Serialization is achieved when the JAX-RS service returns an object as a response entity; the JAX-RS runtime automatically serializes the Java object into XML or JSON format based on the media type specified in the @Produces annotation. It can be specified using the @Produces(MediaType.APPLICATION_XML) or @Produces(MediaType.APPLICATION_JSON) types, and the Java object will be serialized into JSON or XML format.</li>
          </ul>
        </li>
      </ol>
    </div>
    <h3 className="text-white text-2xl font-semibold mb-4">Client-Side serializing</h3>
    <div>
      <img
          src={clientSideSerializing}
          alt="clientSideSerializing.png"
          className="w-full h-auto mb-4 rounded-lg shadow-md"
        />
    </div>
    <h3 className="text-white text-2xl font-semibold mb-4">Postman serializing</h3>
    <div>
      <img
          src={postmanSerializing}
          alt="postmanSerializing.png"
          className="w-full h-auto mb-4 rounded-lg shadow-md"
        />
    </div>
    <p className="text-white mb-4">
      During a response request with a body containing XML or JSON data, the JAX-RS runtime automatically deserializes the request body
      in Java objects based on the media type specified in the @Consumes annotation respective to the CRUD operation, 
      for example @Consumes(MediaType.APPLICATION_XML) or @Produces(Me.._JSON) types, the JSON data in the request body will be deserialized into a Java Objects.
    </p>
    <h3 className="text-white text-2xl font-semibold mb-4">Client-Side deserializing</h3>
    <div>
      <img
          src={clientSideDeserializing}
          alt="clientSideDeserializing.png"
          className="w-full h-auto mb-4 rounded-lg shadow-md"
        />
    </div>
    <h3 className="text-white text-2xl font-semibold mb-4">Postman deserializing</h3>
    <p className="text-white mb-4"><strong>XML</strong></p>
    <div>
      <img
          src={xmlPostmanDecerializing}
          alt="xmlPostmanDecerializing.png"
          className="w-full h-auto mb-4 rounded-lg shadow-md"
        />
    </div>
    <p className="text-white mb-4"><strong>JSON</strong></p>
    <div>
      <img
          src={jsonPostmanDeserializing}
          alt="jsonPostmanDeserializing.png"
          className="w-full h-auto mb-4 rounded-lg shadow-md"
        />
    </div>
    <h3 className="text-white text-2xl font-semibold mb-4">Client-Side Implementation</h3>
    <div className="text-white mb-4">
      <ol className="list-decimal pl-4">
        <li>
          <strong>Car.java</strong>: The CarGUI.java initiates a GUI that implements the Jersey RESTful web service endpoints for executing tasks such as returning a list of all cars, creating a car resource, updating a car resource, or deleting a car resource based on its primary key. <br />
          <strong>GUI Components</strong>
          <ul className="list-disc pl-4">
            <li>The GUI imports CarDAO.java and CarResource.java classes to utilize the Jersey RESTful CRUD operations.</li>
            <li>The GUI contains text fields for user input regarding details such as an ID, make, model, year color, mileage, price and a description.</li>
            <li>The buttons are declared, and action listeners are attached to the buttons to perform specific actions such as (add, refresh, update, delete) when clicked.</li>
            <li>A list component JList&lt;Car&gt; is used to display the list of cars being retrieved from the HSQLDB database.</li>
            <li>Functionality such as refreshCarList() method retrieves all cars from the database and updates the list displayed in the GUI, addCar() method creates a new car resource based on user input, updateCar() method updates an existing car resource, deleteCar() removes a resource from a database.</li>
  	        <div>
              <img
                  src={guiComponents}
                  alt="guiComponents.png"
                  className="w-full h-auto mb-4 rounded-lg shadow-md"
                />
            </div>
          </ul>
        </li>
        <li>
          <strong>HTML/JavaScript/CSS</strong>: The implementation of HTML, JavaScript enabled the client to send requests to the server side to utilize the Jersey RESTful CRUD operations.  <br />
          <strong>HTML (index.html)</strong>
          <ul className="list-disc pl-4">
            <li>Contains forms to add, update, delete cars.</li>
            <li>Displays table to show the list of cars retrieved from the server.</li>
            <li>Imports script.js for handling the user input and rendering car data dynamically.</li>
            <li>Imports style.css for styling.</li>
          </ul>
          <strong>JavaScript(script.js)</strong>
          <ul className="list-disc pl-4">
            <li>Handles form submissions adding, updating, deleting cars.</li>
            <li>Fetches the list of cars from server and render it in the table.</li>
            <li>Uses Fetch API for making HTTP requests to the Jersey RESTful Endpoints.</li>
            <li>Converts form data to JSON before sending requests.</li>
            <div>
              <img
                  src={javaHandling}
                  alt="javaHandling.png"
                  className="w-full h-auto mb-4 rounded-lg shadow-md"
                />
            </div>
          </ul>
        </li>
      </ol>
    </div>
    <h3 className="text-white text-2xl font-semibold mb-4">Issues</h3>
    <p className="text-white mb-4">
      The xmlPullParser library was initiated correctly from the kxml2-2.3.0 jar within the lib folder, within the GUI attempts were made to parse XML data retrieved from a RESTful API however I encountered issues with the XML parsing process, and as a result I resorted to using the CarDAO class to interact with the RESTful API through the CRUD operations within the GUI application to render the data.
    </p>
  </div>
);

