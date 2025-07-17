import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt, FaGithub, 
  FaNpm, FaAws, FaBootstrap, FaServer, FaDatabase, FaDocker
} from 'react-icons/fa';
import { 
  SiCplusplus, SiRedux, SiExpress, SiMongodb, SiNginx, SiVite, 
  SiBabel, SiMysql, SiPostman, SiOpenai, SiVercel, SiJsonwebtokens,
  SiAnthropic, SiGooglecloud, SiTailwindcss
} from 'react-icons/si';
import { DiVisualstudio } from 'react-icons/di';
import { FaWind } from 'react-icons/fa';
import { GiArtificialIntelligence } from 'react-icons/gi';
import { TbApi } from 'react-icons/tb';

// Icon component mapping for each skill
const SkillIcon = ({ name, color }) => {
  const iconStyle = { color, fontSize: '1.75rem' };
  
  const iconMap = {
    'HTML': <FaHtml5 style={iconStyle} />,
    'CSS': <FaCss3Alt style={iconStyle} />,
    'JavaScript': <FaJs style={iconStyle} />,
    'C++': <SiCplusplus style={iconStyle} />,
    'React': <FaReact style={iconStyle} />,
    'Tailwind': <SiTailwindcss style={iconStyle} />,
    'Redux': <SiRedux style={iconStyle} />,
    'Node.js': <FaNodeJs style={iconStyle} />,
    'Express': <SiExpress style={iconStyle} />,
    'MongoDB': <SiMongodb style={iconStyle} />,
    'Git': <FaGitAlt style={iconStyle} />,
    'GitHub': <FaGithub style={iconStyle} />,
    'Nginx': <SiNginx style={iconStyle} />,
    'Vite': <SiVite style={iconStyle} />,
    'Babel': <SiBabel style={iconStyle} />,
    'AWS': <FaAws style={iconStyle} />,

    'SQL': <FaDatabase style={iconStyle} />,
    'MySQL': <SiMysql style={iconStyle} />,
    'Bootstrap': <FaBootstrap style={iconStyle} />,
    'REST API': <TbApi style={iconStyle} />,
    'Postman': <SiPostman style={iconStyle} />,
    'ChatGPT': <SiOpenai style={iconStyle} />,
    'Claude': <SiAnthropic style={iconStyle} />,
    'Gemini': <SiGooglecloud style={iconStyle} />,
    'Gen AI': <SiGooglecloud style={iconStyle} />,
    'Vercel': <SiVercel style={iconStyle} />,
    'VSCode': <DiVisualstudio style={iconStyle} />,
    'Windsurf': <FaWind style={iconStyle} />,
    'Grok': <GiArtificialIntelligence style={iconStyle} />,
    'JWT': <SiJsonwebtokens style={iconStyle} />,
  };

  return iconMap[name] || <FaServer style={iconStyle} />;
};

const skills = [
  { name: 'HTML', color: '#E34F26' },
  { name: 'CSS', color: '#1572B6' },
  { name: 'JavaScript', color: '#F7DF1E' },
  { name: 'C++', color: '#00599C' },
  { name: 'React', color: '#61DAFB' },
  { name: 'Tailwind', color: '#06B6D4' },
  { name: 'Redux', color: '#764ABC' },
  { name: 'Node.js', color: '#339933' },
  { name: 'Express', color: '#000000' },
  { name: 'MongoDB', color: '#47A248' },
  { name: 'Git', color: '#F05032' },
  { name: 'GitHub', color: '#181717' },
  { name: 'Nginx', color: '#009639' },
  { name: 'Vite', color: '#646CFF' },
  { name: 'Babel', color: '#F9DC3E' },
  { name: 'AWS', color: '#FF9900' },

  { name: 'SQL', color: '#336791' },
  { name: 'MySQL', color: '#4479A1' },
  { name: 'Bootstrap', color: '#7952B3' },
  { name: 'REST API', color: '#FF6B6B' },
  { name: 'Postman', color: '#FF6C37' },
  { name: 'ChatGPT', color: '#74AA9C' },
  { name: 'Claude', color: '#F4B73F' },
  { name: 'Gemini', color: '#A2C4E0' },
  { name: 'Gen AI', color: '#8A2BE2' },
  { name: 'Vercel', color: '#000000' },
  { name: 'VSCode', color: '#007ACC' },
  { name: 'Windsurf', color: '#00A4EF' },
  { name: 'Grok', color: '#8A2BE2' },
  { name: 'JWT', color: '#000000' },
];

const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { 
      y: 0, 
      opacity: 1,
      transition: {
        duration: 0.5
      }
    },
    hover: {
      scale: 1.1,
      transition: { duration: 0.2 }
    }
  };

  return (
    <section className="w-full py-16 bg-gradient-to-br from-[#0f172a] to-[#1e293b] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-white mb-12 text-center">
          My <span className="text-cyan-400">Skills</span>
        </h2>
        
        <motion.div 
          className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4 p-4"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center"
              variants={item}
              whileHover="hover"
              onMouseEnter={() => setHoveredSkill(skill.name)}
              onMouseLeave={() => setHoveredSkill(null)}
            >
              <motion.div 
                className="w-16 h-16 rounded-xl flex items-center justify-center mb-2 shadow-lg"
                style={{ 
                  backgroundColor: `${skill.color}20`,
                  border: `2px solid ${skill.color}`,
                  backdropFilter: 'blur(10px)'
                }}
                whileHover={{ 
                  backgroundColor: `${skill.color}40`,
                  boxShadow: `0 0 20px ${skill.color}80`
                }}
              >
                <SkillIcon name={skill.name} color={skill.color} />
              </motion.div>
              {hoveredSkill === skill.name && (
                <motion.span 
                  className="text-xs text-white bg-gray-800/80 px-2 py-1 rounded-md mt-1"
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -5 }}
                >
                  {skill.name}
                </motion.span>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;