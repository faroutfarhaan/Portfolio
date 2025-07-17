import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { SiInstagram } from 'react-icons/si';

const Connect = () => {
  const socialLinks = [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/mohfarhanpatel/',
      icon: <FaLinkedin className="w-6 h-6" />,
      color: '#0A66C2'
    },
    {
      name: 'GitHub',
      url: 'https://github.com/faroutfarhaan',
      icon: <FaGithub className="w-6 h-6" />,
      color: '#181717'
    },
    {
      name: 'Twitter',
      url: 'https://x.com/farout_farhan',
      icon: <FaXTwitter className="w-6 h-6" />,
      color: '#000000'
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/faroutfarhaan_/',
      icon: <SiInstagram className="w-6 h-6" />,
      color: '#E4405F'
    }
  ];

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
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div id="Connect" className="min-h-screen bg-gradient-to-br from-[#0f172a] to-[#1e293b] py-20 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
      <div className="w-full max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-5xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Let's Connect
          </motion.h2>
          <p className="text-gray-400 text-lg">Feel free to reach out to me on these platforms</p>
        </div>
        
        <motion.div 
          className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8 px-4"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {socialLinks.map((social, index) => (
            <motion.a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center justify-center p-8 rounded-2xl bg-gray-800/40 backdrop-blur-sm hover:bg-gray-700/60 transition-all duration-300 group"
              variants={item}
              whileHover={{ 
                y: -8,
                scale: 1.03,
                boxShadow: `0 15px 30px -10px ${social.color}30`,
                backgroundColor: 'rgba(30, 41, 59, 0.7)'
              }}
            >
              <div 
                className="w-20 h-20 flex items-center justify-center rounded-2xl mb-4 transition-all duration-300 group-hover:shadow-lg"
                style={{ 
                  backgroundColor: `${social.color}15`,
                  boxShadow: `0 4px 15px ${social.color}20`
                }}
              >
                {React.cloneElement(social.icon, { 
                  className: 'w-10 h-10 transition-transform duration-300 group-hover:scale-110',
                  style: { color: social.color }
                })}
              </div>
              <span className="text-white font-medium text-lg">{social.name}</span>
            </motion.a>
          ))}
        </motion.div>

        <div className="w-full flex justify-center">
  <motion.div 
    className="p-6 mt-12 bg-gray-800/50 rounded-xl inline-block"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.4 }}
  >
    <h3 className="text-xl font-semibold text-white mb-3">Email Me</h3>
    <a 
      href="mailto:mohdfarhanofficial999@gmail.com" 
      className="text-blue-400 hover:text-blue-300 text-lg font-medium transition-colors duration-300"
    >
      mohdfarhanofficial999@gmail.com
    </a>
  </motion.div>
</div>

      </div>
    </div>
  );
};

export default Connect;