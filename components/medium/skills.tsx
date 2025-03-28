import React from 'react';
import { SkillSet } from '../small/skillSet';
import {
  FaJs,
  FaReact,
  FaCode,
  FaDesktop,
  FaServer,
  FaPython,
  FaJava,
} from 'react-icons/fa';
import {
  SiTypescript,
  SiTailwindcss,
  SiNextdotjs,
  SiCss3,
  SiPostgresql,
  SiHtml5,
  SiMysql,
  SiFigma,
  SiGit,
  SiGithub,
  SiGitlab,
  SiVercel,
  SiVisualstudiocode,
} from 'react-icons/si';

export const Skills = () => {
  const frontendSkills = [
    {
      iconSkill: <FaJs />,
      text: 'JavaScript',
      link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
    },
    { iconSkill: <FaReact />, text: 'React', link: 'https://reactjs.org/' },
    {
      iconSkill: <SiTypescript />,
      text: 'TypeScript',
      link: 'https://www.typescriptlang.org/',
    },
    {
      iconSkill: <SiTailwindcss />,
      text: 'TailwindCSS',
      link: 'https://tailwindcss.com/',
    },
    {
      iconSkill: <SiHtml5 />,
      text: 'HTML',
      link: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
    },
    {
      iconSkill: <SiCss3 />,
      text: 'CSS',
      link: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
    },
  ];

  const backendSkills = [
    {
      iconSkill: <SiPostgresql />,
      text: 'PostgreSQL',
      link: 'https://www.postgresql.org/',
    },
    { iconSkill: <SiMysql />, text: 'MySQL', link: 'https://www.mysql.com/' },
    { iconSkill: <SiNextdotjs />, text: 'NextJS', link: 'https://nextjs.org/' },
    {
      iconSkill: <FaJava />,
      text: 'Java',
      link: 'https://www.oracle.com/java/',
    },
    {
      iconSkill: <FaPython />,
      text: 'Python',
      link: 'https://www.python.org/',
    },
  ];

  const toolSkills = [
    { iconSkill: <SiGit />, text: 'Git', link: 'https://git-scm.com/' },
    { iconSkill: <SiGithub />, text: 'GitHub', link: 'https://github.com/' },
    { iconSkill: <SiGitlab />, text: 'GitLab', link: 'https://gitlab.com' },
    { iconSkill: <SiFigma />, text: 'Figma', link: 'https://figma.com' },
    { iconSkill: <SiVercel />, text: 'Vercel', link: 'https://vercel.com' },
    // {
    //   iconSkill: <SiVisualstudiocode />,
    //   text: 'Visual Studio Code',
    //   link: 'https://code.visualstudio.com/',
    // },
  ];

  return (
    <div>
      <h2 className="text mb-32 flex flex-col items-center justify-center text-5xl font-bold text-text">
        Skills
        <div className=" h-1 w-28 bg-accent-blue"></div>
      </h2>
      <div className="grid grid-cols-1 gap-20 md:grid-cols-3 md:gap-48">
        <SkillSet skills={frontendSkills} title="Frontend" icon={<FaCode />} />
        <SkillSet skills={backendSkills} title="Backend" icon={<FaServer />} />
        <SkillSet skills={toolSkills} title="Tools" icon={<FaDesktop />} />
      </div>
    </div>
  );
};
