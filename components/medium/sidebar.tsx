import React from 'react';
import { FaFacebookF, FaGithub, FaLinkedin } from 'react-icons/fa';

export const Sidebar = () => {
  return (
    <div className=" fixed bottom-0 flex h-screen w-24 items-end justify-center text-text">
      <ul className=" mb-10 space-y-10">
        {/* <li className=" rounded-full p-2 hover:cursor-pointer hover:bg-accent-dark hover:bg-opacity-90"> */}
        <li className=" transition duration-300 ease-in-out hover:text-accent-blue">
          <a href="" className=" ">
            <FaFacebookF size={32} />
          </a>
        </li>
        <li className=" transition duration-300 ease-in-out hover:text-accent-blue">
          <a href="">
            <FaGithub size={32} />
          </a>
        </li>
        <li className=" transition duration-300 ease-in-out hover:text-accent-blue">
          <a href="">
            <FaLinkedin size={32} />
          </a>
        </li>
      </ul>
    </div>
  );
};
