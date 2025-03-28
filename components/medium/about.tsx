import React from 'react';
import meg from '#/assets/megMedT.jpg';

export const About = () => {
  return (
    <div className=" flex flex-col items-center justify-center space-x-10 lg:flex-row">
      <div className=" space-x-10 space-y-5 md:w-1/2 md:space-x-0">
        <h2 className=" text-center text-3xl font-semibold text-text md:text-left lg:text-5xl">
          I'm Bengt Rotheim
        </h2>
        <p className=" text-xl text-text lg:text-3xl">
          Currently studying{' '}
          <span className=" font-semibold text-accent-blue">
            Computer Science
          </span>{' '}
          at the Norwegian University of Science and Technology (NTNU) in
          Trondheim. I consider myself an aspiring{' '}
          <span className=" font-semibold text-accent-blue">
            Fullstack Delevoper
          </span>
          , but I am considerably better at Frontend.
        </p>
      </div>
      <div className=" w-1/2 rounded-xl md:w-1/3 lg:w-1/4">
        <img src={meg.src} alt="Picture of me" className=" rounded-xl" />
      </div>
    </div>
  );
};
