import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useBackground } from './variants/BackgroundProvider';
import { useWindowSize } from '../hooks/useWindowSize';

export const Background: React.FC<IBackgroundProps> = ({
  url,
  offset = '0',
  bgColor = '#ffffff',
  animate = true,
  updateHeight = 'on-mount-only',
  centerContent = false,
  children,
}) => {
  const { offset: hookOffset, setOffset } = useBackground();
  const { innerHeight } = useWindowSize();
  const [height, setHeight] = useState<number | null>(null);

  useEffect(() => {
    if (offset) {
      setOffset(offset);
    }
  }, [offset]);

  useEffect(() => {
    switch (updateHeight) {
      case 'on-mount-only':
        if (height === null) setHeight(innerHeight);
        break;
      case 'on-resize':
        setHeight(innerHeight);
        break;
      case 'fixed-100vh':
        break;
      default:
        throw Error(`Unsupported option: '${updateHeight}'`);
    }
  }, [innerHeight, updateHeight]);

  return (
    <div
      className="bg-wrapper"
      style={{
        background: bgColor,
        height:
          updateHeight === 'fixed-100vh'
            ? '100vh'
            : height
            ? `${height}px`
            : '100vh',
      }}
    >
      <motion.div
        className={'h-full w-full'}
        style={{ backgroundImage: `url(${url})` }}
        initial={{ y: animate ? '0%' : offset }}
        animate={{
          y: hookOffset,
          transition: animate
            ? {
                type: 'spring',
                damping: 10,
                stiffness: 150,
              }
            : {
                type: 'just',
              },
        }}
      />
      {children && (
        <div
          className={`fixed w-full h-full ${centerContent ? 'flex justify-center Items-center': ''}`}
        >
          {children}
        </div>
      )}
    </div>
  );
};
