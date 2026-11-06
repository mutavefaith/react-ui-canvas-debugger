import React from 'react';

export const SVGGraphViewer: React.FC = () => {
  return (
    <svg width="300" height="150" style={{ border: '1px solid #000' }}>
      <circle cx="50" cy="50" r="40" stroke="green" strokeWidth="4" fill="yellow" />
    </svg>
  );
};