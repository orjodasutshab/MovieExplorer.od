import React from 'react';

interface SiteLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export const SiteLogo: React.FC<SiteLogoProps> = ({ className = '', size = 'md' }) => {
  const sizeClasses = {
    sm: 'w-7 h-7',
    md: 'w-9 h-9',
    lg: 'w-11 h-11',
    xl: 'w-14 h-14',
  };

  return (
    <div className={`relative inline-flex items-center justify-center shrink-0 ${sizeClasses[size]} ${className}`}>
      <img
        src="/logo.svg"
        alt="MovieExplorer Logo"
        className="w-full h-full object-contain filter drop-shadow-xs"
      />
    </div>
  );
};
