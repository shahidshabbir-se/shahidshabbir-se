'use client';
import React, { useEffect, useState } from 'react';

const useTypewriter = (text, speed = 50) => {
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    let timeoutId;

    const animateText = () => {
      let i = 0;
      timeoutId = setInterval(() => {
        if (i <= text.length) {
          setDisplayText(text.slice(0, i));
          i++;
        } else {
          clearInterval(timeoutId);
        }
      }, speed);
    };

    animateText();

    return () => clearInterval(timeoutId);
  }, [text, speed]);

  return displayText;
};

const Typewriter = ({
  text,
  speed,
  highlightedText,
  highlightedClass,
}) => {
  const [currentDisplay, setCurrentDisplay] = useState('');
  const displayText = useTypewriter(text, speed);

  useEffect(() => {
    setCurrentDisplay(displayText);
  }, [displayText]);

  return (
    <p>
      {text.split(' ').map((word, index) => (
        <span
          key={index}
          className={word === highlightedText ? highlightedClass : ''}
        >
          {currentDisplay.split(' ')[index] || ''} {/* Ensure index exists */}{' '}
        </span>
      ))}
    </p>
  );
};

export default Typewriter;
