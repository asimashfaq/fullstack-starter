import React, { useContext } from 'react';

interface BackdropProps {
    className?: string;
    onClick: () => void;
}

export const Backdrop:React.FC<BackdropProps> = React.forwardRef(function Backdrop(props, ref) {
    const { className, ...other } = props
    
      return (
        <div 
            className={`absolute inset-0 z-40 flex items-end bg-black bg-opacity-50 sm:items-center sm:justify-center ${className}`} 
            ref={ref as any} {...other}
        ></div>
      )
  })
  