import React from 'react';
import ProjectCard from './ProjectCard';
import regression from "../assets/regression.png";
import DogoHome from "../assets/DogoHome.png";
import JavaGUI from "../assets/JavaGUI.png";
import Php from "../assets/Php.png";
import dataScrap from "../assets/dataScrap.png";
import java from "../assets/java.png";

dataScrap
const ProjectsSection = () => {
  const projects = [
    {
      title: 'BTC-USD Regression Analysis',
      description: 'Developed a prediction model using Linear Regression on BTC-USD data to forecast daily closing prices based on Open, High, Low, and Volume metrics.',
      imageUrl: regression, // Replace with your actual project image
      technologies: ['Python', 'Pandas', 'Scikit-learn', 'Matplotlib'],
    },
    {
      title: 'DogoHome',
      description: 'A (MySQL)ERN) stack web app for shelters and users to manage lost and found pets, offering profiles, search functionality, and secure user authentication.',
      imageUrl: DogoHome, // Replace with your project image
      technologies: ['Node.js', 'React.js', 'Express','Axios','CORS','Bcrypt', 'MySQL','Sequelize', 'JWT', 'Bootstrap'],
    },
    // Add more projects as needed
    {
      title: 'Database JDBC Assignment',
      description: 'Developed a platform for a veterinary business to perform CRUD operations on database resources, enabling staff to manage owner and dog records through a Java-based GUI.',
      imageUrl: JavaGUI, // Replace with your project image
      technologies: ['Java', 'JDBC', 'MySQL', 'Swing'],
    },
    {
      title: 'Full-Stack Development: HDD Destruction Website',
      description: 'Developed a full-stack website for a business specializing in HDD destruction, featuring user authentication, staff management, and proof-of-destruction certificates.',
      imageUrl: Php, // Replace with your project image
      technologies: ['HTML', 'CSS', 'JavaScript', 'PHP', 'Slim Framework', 'MySQL', 'jQuery', 'Bootstrap'],
    },
    {
      title: 'Data Scraping Website',
      description: 'A comprehensive tool for scraping and analyzing data from various sources, featuring an intuitive UI and robust backend.',
      imageUrl: dataScrap,
      technologies: ['Python', 'Jupyter Notebooks', 'BeautifulSoup', 'Pandas', 'Requests', 'NumPy', 'Matplotlib'],
    },
    {
      title: 'Distributed Systems Assignment 2024',
      description: 'A distributed system project featuring a Java-based web application with a RESTful API, HSQLDB database, and Swing GUI. Implemented CRUD operations with Jersey and integrated server-side and client-side technologies.',
      imageUrl: java, // Replace with your project image
      technologies: ['Java 1.8', 'HSQLDB', 'Jersey', 'Tomcat 8.5', 'Swing', 'HTML', 'CSS', 'JavaScript'],
    },
  ];

  return (
    <section className="py-16 bg-neutral-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-blue-500 text-sm font-medium">Projects</span>
          <h2 className="text-4xl font-semibold text-white mt-4">My Recent Work</h2>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              imageUrl={project.imageUrl}
              technologies={project.technologies}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
