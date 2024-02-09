"use client"
import React from 'react';

interface SkipButtonProps {
  onClick: () => void;
}

const SkipButton: React.FC<SkipButtonProps> = ({ onClick }) => {
  const handleClick = () => {
    onClick(); 
  };

  return (
    <button className="skip-button" onClick={handleClick}>
      Skip
    </button>
  );
};

export default SkipButton;