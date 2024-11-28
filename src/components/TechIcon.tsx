import React from 'react';

const TechIcon = ({
  component: Component,
  className = '',
}: {
  component: React.ElementType;
  className?: string;
}) => {
  return (
    <div className={`relative ${className}`}>
      {/* Render the passed component */}
      <Component className="size-10 fill-[url(#tech-icon-gradient)]" />

      {/* Define the gradient */}
      <svg className="absolute size-0">
        <defs>
          <linearGradient id="tech-icon-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgb(167 243 208)" />
            <stop offset="100%" stopColor="rgb(56 189 248)" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default TechIcon;
