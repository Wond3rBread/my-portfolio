import React, { useRef } from 'react';

interface CardProps {
  image: string;
  title: string;
  description: string;
  link?: string;
}

const Project: React.FC<CardProps> = ({ image, title, description, link }) => {
  return (
    <div
      className={`' w-1-2 transform overflow-hidden rounded-2xl bg-background shadow-lg transition
      duration-300  ease-in-out hover:scale-105`}
    >
      {/* Ensure this div has overflow-hidden */}
      <img
        className="h-auto w-full overflow-hidden"
        src={image}
        alt={`${title} image`}
      />
      <div className="px-5 pt-2">
        <h1 className=" text-lg font-semibold text-text">{title}</h1>
        <p className="mb-2 text-text">{description}</p>
        {/* <a
          href={link}
          rel="noopener noreferrer"
          className="cursor-pointer self-start align-text-bottom font-semibold text-blue-400 hover:text-blue-800"
        >
          Les mer...
        </a> */}
      </div>
    </div>
  );
};

export default Project;
