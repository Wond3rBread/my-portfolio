import React from 'react';
import Project from '../small/projectCard';
import img from '#/assets/portfolio.png';

export const Projects = () => {
  const projects = [
    {
      title: 'Project One',
      description: 'A cool project with awesome features.',
      image: img.src,
    },
    {
      title: 'Project Two',
      description: 'Another amazing project.',
      image: 'https://via.placeholder.com/150',
    },
  ];

  return (
    <div className="grid h-auto w-full grid-cols-1 gap-8 border md:grid-cols-3 ">
      {projects.map((project, index) => (
        <Project
          key={index}
          title={project.title}
          description={project.description}
          image={project.image}
          // link={project.link}
        />
      ))}
    </div>
  );
};
