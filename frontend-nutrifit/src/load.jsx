import React, { useState, useEffect } from 'react';
import './load.css';
import food from './assets/food.png';

const Typewriter = ({ text, delay }) => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setCurrentText((prevText) => prevText + text[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, delay);

      return () => clearTimeout(timeout);
    } else {
      setTimeout(() => {
        setCurrentText(''); // Reset the text
        setCurrentIndex(0); // Reset the index
      }, 2000); // Adjust the pause before restarting (2000ms = 2 seconds)
    }
  }, [currentIndex, delay, text]);

  return <span>{currentText}</span>;
};

function Load() {
    return(
        <div className="LoadScreen">
            
        </div>
    );
}

export default Load;
