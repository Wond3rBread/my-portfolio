import React from 'react';

export const NameHello = () => {
  return (
    <div>
      <p className=" text-text text-2xl">Bengt Andreas Rotheim</p>
      <p className=" text-text text-7xl font-semibold">
        Hello{' '}
        <span className=" text-accent-blue font-bold">
          <u>World!</u>
        </span>
      </p>
    </div>
  );
};
