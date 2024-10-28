'use client';
import React, { createContext, useState, useEffect } from 'react';
import { Toaster, ToastPosition } from 'react-hot-toast';

type ToastContextType = {
  position: ToastPosition;
};

export const ToastContext = createContext<ToastContextType>({
  position: 'bottom-right',
});

export const ToastProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [position, setPosition] = useState<ToastPosition>('bottom-right');
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 576) {
        setPosition('top-center');
      } else {
        setPosition('bottom-right');
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <ToastContext.Provider value={{ position }}>
      {children}
      <Toaster position={position} />
    </ToastContext.Provider>
  );
};
