import React from 'react';
import ProjectCard from './ProjectCard';
import regression from "../assets/regression.png";

const ProjectsSection = () => {
  const projects = [
    {
      title: 'BTC-USD Regression Analysis',
      description: 'Developed a prediction model using Linear Regression on BTC-USD data to forecast daily closing prices based on Open, High, Low, and Volume metrics.',
      imageUrl: regression, // Replace with your actual project image
      technologies: ['Python', 'Pandas', 'Scikit-learn', 'Matplotlib'],
      liveLink: 'https://example.com', // Replace with actual link if available
      codeLink: 'https://github.com/example/btc-usd-regression', // Replace with actual GitHub repo link
    },
    {
      title: 'DogoHome',
      description: 'A (MySQL)ERN) stack web app for shelters and users to manage lost and found pets, offering profiles, search functionality, and secure user authentication.',
      imageUrl: 'https://via.placeholder.com/300x200', // Replace with your project image
      technologies: ['Node.js', 'React.js', 'Express','Axios','CORS','Bcrypt', 'MySQL','Sequelize', 'JWT'],
      liveLink: 'https://example.com',
      codeLink: 'https://github.com/example/project2',
    },
    // Add more projects as needed
    {
      title: 'Project 2',
      description: 'This is a brief description of Project 2. It highlights the main features and technologies used.',
      imageUrl: 'https://via.placeholder.com/300x200', // Replace with your project image
      technologies: ['Node.js', 'Express', 'MongoDB', 'JWT'],
      liveLink: 'https://example.com',
      codeLink: 'https://github.com/example/project2',
    },
    {
      title: 'JDBC',
      description: 'This is a brief description of Project 2. It highlights the main features and technologies used.',
      imageUrl: 'https://via.placeholder.com/300x200', // Replace with your project image
      technologies: ['Node.js', 'Express', 'MongoDB', 'JWT'],
      liveLink: 'https://example.com',
      codeLink: 'https://github.com/example/project2',
    },
    {
      title: 'Data Mining - Regression',
      description: 'This is a brief description of Project 2. It highlights the main features and technologies used.',
      imageUrl: 'https://via.placeholder.com/300x200', // Replace with your project image
      technologies: ['Node.js', 'Express', 'MongoDB', 'JWT'],
      liveLink: 'https://example.com',
      codeLink: 'https://github.com/example/project2',
    },
    {
      title: 'Data Scraping Website',
      description: 'This is a brief description of Project 2. It highlights the main features and technologies used.',
      imageUrl: 'https://via.placeholder.com/300x200', // Replace with your project image
      technologies: ['Node.js', 'Express', 'MongoDB', 'JWT'],
      liveLink: 'https://example.com',
      codeLink: 'https://github.com/example/project2',
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
              liveLink={project.liveLink}
              codeLink={project.codeLink}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
