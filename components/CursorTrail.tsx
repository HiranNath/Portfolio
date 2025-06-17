import React from 'react';

interface CursorTrailProps {
  position: { x: number; y: number };
  color: string;
}

const CursorTrail: React.FC<CursorTrailProps> = ({ position, color }) => {
  if (!color) return null; // Ensure color is available

  // Create a few trail elements for a smoother effect
  const trailElements = Array(5).fill(null).map((_, i) => (
    <div
      key={i}
      className="fixed z-[9999] rounded-full pointer-events-none hidden md:block"
      style={{
        width: `${15 - i * 2.5}px`, // Gradually decreasing size
        height: `${15 - i * 2.5}px`,
        transform: `translate(${position.x - (15 - i * 2.5) / 2}px, ${position.y - (15 - i * 2.5) / 2}px)`,
        background: color,
        opacity: `${1 - i * 0.2}`, // Gradually decreasing opacity
        transition: `transform ${60 + i * 20}ms cubic-bezier(0.175, 0.885, 0.32, 1.275), opacity 0.1s linear, background-color 1s ease-out`,
        // Adding a subtle blur for a softer look
        filter: `blur(${i*0.5}px)`, 
        // Using a radial gradient for the main dot can be nice too, if preferred over solid color
        // background: `radial-gradient(circle, ${color} ${20 - i * 4}%, transparent 80%)`,
      }}
    />
  ));
  
  return <>{trailElements}</>;
};

export default CursorTrail;
