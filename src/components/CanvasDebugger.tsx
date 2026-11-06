import React from 'react';

export const CanvasDebugger: React.FC = () => {
  return (
    <div style={{ padding: '1rem', border: '1px solid #ccc' }}>
      <h3>Canvas Debugger Panel</h3>
      <canvas id="debugger-canvas" width={400} height={200} style={{ border: '1px solid red' }} />
    </div>
  );
};