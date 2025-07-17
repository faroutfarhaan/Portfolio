import React from 'react';
import { motion } from 'framer-motion';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const About = () => {
  return (
    <section id="about" className="min-h-screen flex items-center py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 transition-colors duration-300 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div 
          className="max-w-5xl mx-auto"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={container}
        >
          <motion.div className="text-center mb-12 md:mb-16" variants={item}>
            <motion.span 
              className="inline-block text-sm font-semibold py-2 px-4 rounded-full bg-indigo-100 text-indigo-800 dark:bg-indigo-900/50 dark:text-indigo-200 mb-3 shadow-sm"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Who am I?
            </motion.span>
            <motion.h2 
              className="text-4xl md:text-5xl lg:text-6xl font-bold mt-2 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Not Your Average <span className="text-gray-900 dark:text-white">Techie</span> 😎
            </motion.h2>
          </motion.div>
          
          <motion.div 
            className="flex flex-col lg:flex-row gap-8 md:gap-12 items-center"
            variants={container}
          >
            <motion.div 
              className="lg:w-2/5 flex justify-center"
              variants={item}
            >
              <motion.div 
                className="relative group"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-300"></div>
                <motion.div 
                  className="relative w-64 h-64 md:w-72 md:h-72 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 p-1"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <div className="w-full h-full bg-gray-200 dark:bg-gray-800 rounded-2xl overflow-hidden shadow-xl">
                    <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 flex items-center justify-center">
                      <span className="text-lg md:text-xl font-medium text-gray-500 dark:text-gray-400">👨‍💻 Your Pic Here</span>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
            
            <motion.div 
              className="lg:w-3/5 mt-8 lg:mt-0"
              variants={item}
            >
              <div className="space-y-6 md:space-y-8">
                <motion.div 
                  className="space-y-2 md:space-y-3"
                  variants={item}
                >
                  <motion.h3 
                    className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-gray-900 dark:text-white"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    Farhan | MERN Stack Wizard 🧙‍♂️
                  </motion.h3>
                  <motion.p 
                    className="text-base md:text-lg text-indigo-600 dark:text-indigo-400 font-medium tracking-wide"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    B.E. in Electronics & Telecommunication • IET 2025 • Building Digital Magic
                  </motion.p>
                </motion.div>
                
                <motion.div 
                  className="space-y-4 md:space-y-6 text-gray-700 dark:text-gray-300"
                  variants={container}
                >
                  <motion.p 
                    className="text-base md:text-lg leading-relaxed tracking-wide"
                    variants={item}
                  >
                    Hey there! I'm Farhan—a <span className="font-bold text-gray-900 dark:text-white">full-stack dev</span> who's all about turning caffeine into clean, efficient code. When I'm not busy making the web a cooler place, you can find me debugging life's problems (or at least trying to).
                  </motion.p>
                  
                  <motion.p 
                    className="text-base md:text-lg leading-relaxed"
                    variants={item}
                  >
                    Just wrapped up my <span className="font-medium text-indigo-600 dark:text-indigo-400">B.E. in Electronics & Telecommunication</span> at IET (Class of '25), I've been cooking up some serious tech magic in the MERN stack. From sleek UIs to robust backends, I love building stuff that actually makes a difference.
                  </motion.p>
                  
                  <motion.p 
                    className="text-base md:text-lg leading-relaxed"
                    variants={item}
                  >
                    When I'm not in front of a screen, I'm probably nerding out about the latest tech trends, sipping on chai ☕, or trying to convince my friends that no, I can't "just fix their WiFi."
                  </motion.p>
                </motion.div>
                
                <motion.div 
                  className="flex flex-wrap gap-3 md:gap-4 pt-2"
                  variants={item}
                >
                  <motion.a 
                    href="#contact" 
                    className="px-5 py-2.5 md:px-6 md:py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl hover:shadow-lg hover:shadow-indigo-500/20 transition-all duration-300 font-medium flex items-center gap-2 group"
                    whileHover={{ y: -2, scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Let's Build Something Cool
                    <span className="group-hover:translate-x-1 transition-transform">🚀</span>
                  </motion.a>
                  <motion.a 
                    href="#projects" 
                    className="px-5 py-2.5 md:px-6 md:py-3 border-2 border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-300 font-medium"
                    whileHover={{ y: -2, scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    See My Work
                  </motion.a>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;