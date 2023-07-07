import React, { useState, useEffect } from 'react';
import '../styles/index.css';

const Component = () => {
  const [backgroundColor, setBackgroundColor] = useState('rgb(0, 0, 0)');
  const [isColorChanging, setIsColorChanging] = useState(false);
  const [intervalId, setIntervalId] = useState(null);

  useEffect(() => {
    if (isColorChanging) {
      const id = setInterval(() => {
        const newBackground = getRandomColor();
        setBackgroundColor(newBackground);
      }, 100);
      setIntervalId(id);
    } else {
      clearInterval(intervalId);
      setIntervalId(null);
    }

    return () => clearInterval(intervalId);
  }, [isColorChanging]);

  const handleMouseEnter = () => {
    setIsColorChanging(true);
  };

  const handleMouseLeave = () => {
    setIsColorChanging(false);
    setBackgroundColor('rgb(0, 0, 0)');
  };

  const handleDoubleClick = () => {
    setIsColorChanging(false);
    setBackgroundColor('rgb(0, 0, 0)');
  };

  // Función para generar un color RGB aleatorio
  const getRandomColor = () => {
    const newRed = Math.floor(Math.random() * 256);
    const newGreen = Math.floor(Math.random() * 256);
    const newBlue = Math.floor(Math.random() * 256);
    return `rgb(${newRed}, ${newGreen}, ${newBlue})`;
  };

  return (
    <div
      className="container"
      style={{ backgroundColor, width: '255px', height: '255px', cursor:'pointer'}}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onDoubleClick={handleDoubleClick}
    ></div>
  );
};

export default Component;
