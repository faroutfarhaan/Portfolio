import React, { useRef, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Text, OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { motion } from 'framer-motion';
import * as THREE from 'three';

const ParticleField = ({ count = 2000 }) => {
  const meshRef = useRef();
  const { viewport } = useThree();
  const particles = useRef([]);

  useEffect(() => {
    particles.current = Array(count).fill().map(() => ({
      position: [
        (Math.random() - 0.5) * 2000,
        (Math.random() - 0.5) * 2000,
        (Math.random() - 0.5) * 2000
      ],
      velocity: [
        (Math.random() - 0.5) * 0.5,
        (Math.random() - 0.5) * 0.5,
        (Math.random() - 0.5) * 0.5
      ],
      color: new THREE.Color().setHSL(Math.random(), 0.7, 0.5)
    }));
  }, [count]);

  useFrame(({ clock }) => {
    if (!meshRef.current) return;
    
    const positions = meshRef.current.geometry.attributes.position.array;
    const colors = meshRef.current.geometry.attributes.color.array;
    const time = clock.getElapsedTime();
    
    for (let i = 0; i < particles.current.length; i++) {
      const i3 = i * 3;
      const particle = particles.current[i];
      
      positions[i3] += Math.sin(time * 0.1 + i) * 0.1;
      positions[i3 + 1] += Math.cos(time * 0.1 + i) * 0.1;
      positions[i3 + 2] += Math.sin(time * 0.1 + i * 0.5) * 0.1;
      
      const color = new THREE.Color(particle.color);
      color.offsetHSL(0.0005, 0, 0);
      colors[i3] = color.r;
      colors[i3 + 1] = color.g;
      colors[i3 + 2] = color.b;
    }
    
    meshRef.current.geometry.attributes.position.needsUpdate = true;
    meshRef.current.geometry.attributes.color.needsUpdate = true;
    meshRef.current.rotation.y = time * 0.05;
  });

  return (
    <points ref={meshRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particles.current.length}
          array={new Float32Array(particles.current.flatMap(p => p.position))}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={particles.current.length}
          array={new Float32Array(particles.current.flatMap(p => [p.color.r, p.color.g, p.color.b]))}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial 
        size={1.5} 
        sizeAttenuation={true} 
        vertexColors 
        transparent 
        opacity={0.8}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
};

const FloatingText = ({ children, position = [0, 0, 0], size = 1, color = 'white' }) => {
  const textRef = useRef();
  
  useFrame(({ clock }) => {
    if (textRef.current) {
      textRef.current.position.y = position[1] + Math.sin(clock.getElapsedTime() * 0.5) * 0.1;
    }
  });
  
  return (
    <Text
      ref={textRef}
      position={position}
      fontSize={size}
      color={color}
      maxWidth={10}
      lineHeight={1}
      letterSpacing={0.02}
      textAlign="center"
      anchorX="center"
      anchorY="middle"
    >
      {children}
      <meshStandardMaterial 
        color={color} 
        emissive={color} 
        emissiveIntensity={0.5}
        metalness={0.8}
        roughness={0.2}
      />
    </Text>
  );
};

const Hero = () => {
  const [isHovered, setIsHovered] = React.useState(false);
  
 
  
  return (
    <div className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900">
      <div className="absolute inset-0">
        <Canvas>
          <PerspectiveCamera makeDefault position={[0, 0, 50]} fov={75} />
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={1} />
          <ParticleField count={2000} />
          <FloatingText position={[0, 5, 0]} size={2} color="#8B5CF6">
            Moh Farhan
          </FloatingText>
          <FloatingText position={[0, -2, 0]} size={1} color="#A78BFA">
            Full Stack Developer
          </FloatingText>
          <OrbitControls 
            enableZoom={false}
            enablePan={false}
            enableRotate={false}
          />
        </Canvas>
      </div>
      
      <div className="relative z-10 text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <motion.h1 
            className="text-5xl md:text-7xl font-bold text-white mb-4"
            animate={isHovered ? { letterSpacing: '0.2em' } : { letterSpacing: '0.1em' }}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
          >
            MOH FARHAN PATEL
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-purple-300 font-light tracking-wider"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Full Stack Developer
          </motion.p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex gap-4 justify-center"
        >
          <motion.a
          href='#Connect'
            
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 bg-purple-600 text-white rounded-full font-medium hover:bg-purple-700 transition-colors"
          >
            Get In Touch
          </motion.a>
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 bg-transparent border-2 border-purple-500 text-purple-300 rounded-full font-medium hover:bg-purple-900/30 transition-colors"
          >
            View My Work
          </motion.a>
        </motion.div>
      </div>
      
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
      >
        <span className="text-sm text-purple-300 mb-2">Scroll Down</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-purple-400 rounded-full p-1"
        >
          <motion.div 
            className="w-1 h-2 bg-purple-400 rounded-full mx-auto"
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;