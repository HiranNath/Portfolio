import { useState, useEffect } from 'react';
import { NeonColor } from '../types';

const useColorCycle = (colors: NeonColor[], intervalTime: number): NeonColor => {
  const [currentColorIndex, setCurrentColorIndex] = useState(0);

  useEffect(() => {
    if (colors.length === 0) return;
    const interval = setInterval(() => {
      setCurrentColorIndex((prevIndex) => (prevIndex + 1) % colors.length);
    }, intervalTime);
    return () => clearInterval(interval);
  }, [colors, intervalTime]);
  
  return colors[currentColorIndex] || colors[0]; // Fallback to first color
};

export default useColorCycle;
