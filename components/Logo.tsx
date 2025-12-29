import React from 'react';

// NOTE: Ensure your logo file is named "logo.png" and placed in "public/images/".
export const Logo: React.FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      <img 
        src="./images/logo.png" 
        alt="The Art Daycare Logo" 
        className="w-full h-full object-contain"
      />
    </div>
  );
};