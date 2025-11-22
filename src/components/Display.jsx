import React from 'react';

const Display = ({ value }) => {
  return (
    <div className="w-full bg-gray-900 text-white text-right text-4xl p-4 rounded-t-lg font-mono overflow-hidden">
      {value}
    </div>
  );
};

export default Display;