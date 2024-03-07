// SkillsSection.tsx
import React from 'react';
import { FaHtml5, FaCss3, FaReact, FaPhp,FaWordpress} from 'react-icons/fa';
import { SiJavascript, SiTypescript, SiTailwindcss,SiApache } from 'react-icons/si';
import { FaNode, FaPython, FaLaravel } from 'react-icons/fa';
import { SiDjango, SiFastapi } from 'react-icons/si';
import { SiMysql, SiPostgresql, SiMongodb, SiMariadb} from 'react-icons/si';
import { SiDocker, SiKubernetes, SiJenkins, SiGit,SiNginx } from 'react-icons/si';



const skills_front = [
  { id: 'html', name: 'HTML', icon: <FaHtml5 className="text-9xl text-orange-500" /> },
  { id: 'css', name: 'CSS', icon: <FaCss3 className="text-9xl text-blue-500" /> },
  { id: 'js', name: 'JavaScript', icon: <SiJavascript className="text-9xl text-yellow-400" /> },
  { id: 'ts', name: 'TypeScript', icon: <SiTypescript className="text-9xl text-blue-500" /> },
  { id: 'react', name: 'React', icon: <FaReact className="text-9xl text-cyan-400" /> },
  { id: 'tailwind', name: 'TailwindCSS', icon: <SiTailwindcss className="text-9xl text-sky-400" /> },
];

const skills_back = [
  { id: 'php', name: 'PHP', icon: <FaPhp className="text-9xl text-violet-500" /> },
  { id: 'nodejs', name: 'NodeJS', icon: <FaNode className="text-9xl text-black-400" /> },
  { id: 'python', name: 'Python', icon: <FaPython className="text-9xl text-blue-500" /> },
  { id: 'django', name: 'Django', icon: <SiDjango className="text-9xl text-green-800" /> },
  { id: 'fastapi', name: 'FastAPI', icon: <SiFastapi className="text-9xl text-emerald-600" /> },
  { id: 'laravel', name: 'Laravel', icon: <FaLaravel className="text-9xl text-red-500" /> },

];

const skills_db = [
  { id: 'mysql', name: 'MySQL', icon: <SiMysql className="text-9xl text-blue-700" /> },
  { id: 'postgresql', name: 'PostgreSQL', icon: <SiPostgresql className="text-9xl text-black-400" /> },
  { id: 'mongodb', name: 'MongoDB', icon: <SiMongodb className="text-9xl text-green-500" /> },
  { id: 'mariadb', name: 'MariaDB', icon: <SiMariadb className="text-9xl text-red-900" /> }

];


const skills_backend_others = [
  { id: 'wordpress', name: 'WordPress', icon: <FaWordpress className="text-9xl text-blue-600" /> },
  { id: 'nginx', name: 'Nginx', icon: <SiNginx className="text-9xl text-green-800"  /> },
  { id: 'apache', name: 'Apache', icon: <SiApache className="text-9xl text-red-800" /> },
  { id: 'docker', name: 'Docker', icon: <SiDocker className="text-9xl text-blue-500" /> },
  { id: 'kubernetes', name: 'Kubernetes', icon: <SiKubernetes className="text-9xl text-blue-800" /> },
  { id: 'Git', name: 'Git', icon: <SiGit className="text-9xl text-red-500" /> },
  // ...añade más si es necesario
];


const SkillsSection = () => {
  return (
    <div className="bg-custom-cream text-gray-800 py-10 px-4">
      <div className='container mx-auto max-w-6xl'>
      <h3 className="text-4xl font-semibold mb-3 ">Frontend development</h3>
      <br />
      </div>
      <div className="flex flex-row flex-wrap justify-center gap-4">
        {skills_front.map(skill => (
          <div key={skill.id} className="bg-white p-4 rounded-lg shadow-md w-50 h-50 flex flex-col items-center justify-center">
            {skill.icon}
            <span className="mt-2 text-sm font-semibold">{skill.name}</span>
          </div>
          ))}
          </div>
          <br />
        <div className='container mx-auto max-w-6xl '>
        <h3 className="text-4xl font-semibold mb-3">Backend development</h3>
        <br />
        
    <div className="flex flex-row flex-wrap justify-center gap-4">
        {skills_back.map(skill => (
          <div key={skill.id} className="bg-white p-4 rounded-lg shadow-md w-50 h-50 flex flex-col items-center justify-center">
            {skill.icon}
            <span className="mt-2 text-sm font-semibold">{skill.name}</span>
          </div>
           ))}
            </div>
           <br />

           <div className='container mx-auto max-w-6xl '>
        <h3 className="text-4xl font-semibold mb-3">Development tools </h3>
        <br />
        
    <div className="flex flex-row flex-wrap justify-center gap-4">
        {skills_backend_others.map(skill => (
          <div key={skill.id} className="bg-white p-4 rounded-lg shadow-md w-50 h-50 flex flex-col items-center justify-center">
            {skill.icon}
            <span className="mt-2 text-sm font-semibold">{skill.name}</span>
          </div>
           ))}
            </div>
           <br />
           <div className='container mx-auto max-w-6xl '>
        <h3 className="text-4xl font-semibold mb-3">Database</h3>
        <div className="flex flex-row flex-wrap justify-center gap-4">
        <br />
        </div>
          <div className="flex flex-row flex-wrap justify-center gap-4">
        {skills_db.map(skill => (
          <div key={skill.id} className="bg-white p-4 rounded-lg shadow-md w-50 h-50 flex flex-col items-center justify-center">
            {skill.icon}
            <span className="mt-2 text-sm font-semibold">{skill.name}</span>
          </div>
           ))}
           </div>
<br />
    </div>
    </div>
    </div>
    </div>
    
  );
};

export default SkillsSection;
