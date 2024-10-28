'use client';
import { reset } from '@/components/ResetButton/ResetButton';
import { Typography } from '@mui/material';
import React, { useEffect, useRef } from 'react';
import styles from './page.module.css';

const Greeting = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    reset();
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    const fontSize = 16;
    const columns = Math.floor(canvas.width / fontSize);
    const drops: number[] = Array.from({ length: columns }, () =>
      Math.floor((Math.random() * canvas.height) / fontSize)
    );

    const draw = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = 'rgba(25, 71, 108, 1)';

      ctx.font = `${fontSize}px monospace`;

      drops.forEach((drop, index) => {
        const text = characters[Math.floor(Math.random() * characters.length)];
        const x = index * fontSize;
        const y = drop * fontSize;

        ctx.fillText(text, x, y);

        if (y > canvas.height && Math.random() > 0.975) {
          drops[index] = 0;
        }
        drops[index]++;
      });
    };

    const intervalId = setInterval(draw, 50);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className={styles.container}>
      <canvas ref={canvasRef} className={styles.canvas} />
      <Typography className={styles.typography} variant='h3'>
        Hello Luna Edge, My name is Danylo!{' '}
      </Typography>
    </div>
  );
};

export default Greeting;
