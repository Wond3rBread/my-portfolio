import React from 'react';
import { FaFacebookF, FaGithub, FaLinkedin } from 'react-icons/fa';

export const Sidebar = () => {
  return (
    <div className=" fixed bottom-0 flex h-screen w-24 items-end justify-center border border-white text-text">
      <ul className=" mb-10 space-y-10">
        <li>
          <a href="">
            <FaFacebookF size={32} />
          </a>
        </li>
        <li>
          <a href="">
            <FaGithub size={32} />
          </a>
        </li>
        <li>
          <a href="">
            <FaLinkedin size={32} />
          </a>
        </li>
      </ul>
    </div>
  );
};
