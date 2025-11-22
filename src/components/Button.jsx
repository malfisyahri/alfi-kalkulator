import React from 'react';

const Button = ({ label, onClick, className = "" }) => {
  return (
    <button
      onClick={() => onClick(label)}
      className={`h-16 text-xl font-semibold rounded-lg transition active:scale-95 ${className}`}
    >
      {label}
    </button>
  );
};

export default Button;