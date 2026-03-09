import React, { useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment } from '@react-three/drei';
import TechAtom from './TechAtom';
import { useActiveSection } from '../hooks/useActiveSection';

export const sectionConfig = {
  home: {
    position: [0, 0, 0],
    tabletPosition: [0, 0, 0],
    mobilePosition: [0, 1.5, 0],
    color: "#8b5cf6",
    scale: 2,
    tabletScale: 1.5,
    mobileScale: 1,
    ringScale: 1,
    speed: 1,
    blur: 10
  },

  about: {
    position: [6, 0, 0],
    tabletPosition: [5, 0, 0],
    mobilePosition: [2, 0, 0],
    color: "#06b6d4",
    scale: 4,
    tabletScale: 3,
    mobileScale: 2,
    ringScale: 0.7,
    speed: 0.6,
    blur: 5
  },

  skills: {
    position: [-5, 0, 0],
    tabletPosition: [-4, 0, 0],
    mobilePosition: [-2.5, 0, -2],
    color: "#f97316",
    scale: 1,
    tabletScale: 0.8,
    mobileScale: 0.6,
    ringScale: 1.5,
    speed: 1.5,
    blur: 4
  },

  projects: {
    position: [5, 3, 0],
    tabletPosition: [4, 2, 0],
    mobilePosition: [3, 1, -3],
    color: "#22c55e",
    scale: 1.3,
    tabletScale: 1.1,
    mobileScale: 0.6,
    ringScale: 2,
    speed: 1.2,
    blur: 3
  },

  contact: {
    position: [-4, -2, 0],
    tabletPosition: [-3, -1, 0],
    mobilePosition: [-2, -0, -2],
    color: "#eab308",
    scale: 1,
    tabletScale: 0.8,
    mobileScale: 0.7,
    ringScale: 1,
    speed: 0.5,
    blur: 6
  }
};

const Background3D = () => {
  const sections = Object.keys(sectionConfig);
  const activeSection = useActiveSection(sections);
  
  const [deviceType, setDeviceType] = useState('desktop');

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 768) setDeviceType('mobile');
      else if (width < 1024) setDeviceType('tablet');
      else setDeviceType('desktop');
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const currentConfig = sectionConfig[activeSection] || sectionConfig.home;
  
  // Responsive adjustments
  let targetPosition = currentConfig.position;
  let targetScale = currentConfig.scale;

  if (deviceType === 'mobile') {
    targetPosition = currentConfig.mobilePosition || currentConfig.position;
    targetScale = currentConfig.mobileScale || currentConfig.scale;
  } else if (deviceType === 'tablet') {
    targetPosition = currentConfig.tabletPosition || currentConfig.position;
    targetScale = currentConfig.tabletScale || currentConfig.scale;
  }

  return (
    <div className="three-layer"
      style={{
      filter: `blur(${currentConfig.blur}px)`,
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      pointerEvents: 'none', // Important: allows clicking through the canvas
      background: 'transparent'
    }}>
      <Canvas
        camera={{ position: [0, 0, 12], fov: 45 }}
        dpr={[1, 2]} // Clamp pixel ratio to a maximum of 2 to prevent excessive canvas size on high-DPI devices
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} />
        
        <TechAtom
          position={targetPosition}
          color={currentConfig.color}
          scale={targetScale}
          ringScale={currentConfig.ringScale}
          speed={currentConfig.speed}
        />
        
        <Environment preset="city" />
      </Canvas>
    </div>
  );
};

export default Background3D;