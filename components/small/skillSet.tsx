import React from 'react';

interface SkillsProps {
  iconSkill: React.ReactNode;
  text: string;
  link: string;
}

interface SkillsPropsList {
  skills: SkillsProps[];
  title: string;
  icon: React.ReactNode;
}

export function SkillSet({ skills, title, icon }: SkillsPropsList) {
  return (
    <div>
      <h3 className="flex items-center space-x-2 text-4xl font-semibold text-text">
        <span>{title}</span>
        <span>{icon}</span>
      </h3>
      <ul className="mt-4 space-y-2">
        {skills.map((skill, index) => (
          <li
            key={index}
            className="flex items-center space-x-2 text-xl text-text"
          >
            <a
              href={skill.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 transition duration-200 hover:scale-105 hover:text-accent-blue"
            >
              <span className="text-2xl">{skill.iconSkill}</span>
              <span>{skill.text}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
