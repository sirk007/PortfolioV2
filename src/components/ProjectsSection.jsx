import React from 'react';
import ProjectCard from './ProjectCard';

const ProjectsSection = () => {
  const projects = [
    {
      title: 'Project 1',
      description: 'This is a brief description of Project 1. It highlights the main features and technologies used.',
      imageUrl: 'https://via.placeholder.com/300x200', // Replace with your project image
      technologies: ['React', 'Tailwind CSS', 'Axios', 'React Router'],
      liveLink: 'https://example.com',
      codeLink: 'https://github.com/example/project1',
    },
    {
      title: 'Project 2',
      description: 'This is a brief description of Project 2. It highlights the main features and technologies used.',
      imageUrl: 'https://via.placeholder.com/300x200', // Replace with your project image
      technologies: ['Node.js', 'Express', 'MongoDB', 'JWT'],
      liveLink: 'https://example.com',
      codeLink: 'https://github.com/example/project2',
    },
    // Add more projects as needed
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
