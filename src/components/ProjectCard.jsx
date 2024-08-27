import React from 'react';

const ProjectCard = ({ title, description, imageUrl, technologies, liveLink, codeLink }) => {
  return (
    <div className="bg-neutral-900 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
      <img src={imageUrl} alt={title} className="w-full h-48 object-cover rounded-md mb-4" />
      <h3 className="text-xl font-semibold text-white">{title}</h3>
      <p className="text-neutral-400 mt-2">{description}</p>
      <div className="mt-4">
        <h4 className="text-neutral-300 font-medium">Technologies:</h4>
        <ul className="flex flex-wrap mt-2">
          {technologies.map((tech, index) => (
            <li key={index} className="bg-neutral-800 text-yellow-500 text-xs font-semibold px-2 py-1 rounded-full mr-2 mt-2">
              {tech}
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-6 flex space-x-4">
        {liveLink && (
          <a href={liveLink} className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700">
            Live Demo
          </a>
        )}
        {codeLink && (
          <a href={codeLink} className="bg-neutral-800 text-neutral-200 px-4 py-2 rounded-md text-sm font-medium hover:bg-neutral-700">
            View Code
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
