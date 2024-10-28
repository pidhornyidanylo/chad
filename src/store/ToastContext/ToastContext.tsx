'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { Toaster, ToastPosition } from 'react-hot-toast';

type ToastContextType = {
  position: ToastPosition;
  setPosition: (position: ToastPosition) => void;
};

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export const ToastProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [position, setPosition] = useState<ToastPosition>('bottom-right');
  useEffect(() => {
    const handleResize = () => {
      const isSmallScreen = window.matchMedia('(max-width: 576px)').matches;
      setPosition(isSmallScreen ? 'top-center' : 'bottom-right');
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <ToastContext.Provider value={{ position, setPosition }}>
      {children}
      <Toaster position={position} />
    </ToastContext.Provider>
  );
};

export const useToastPosition = () => {
  const context = useContext(ToastContext);
  if (!context)
    throw new Error('useToastPosition must be used within a ToastProvider');
  return context;
};
