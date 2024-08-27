'use client';
import { useState, useEffect } from 'react';

export const useScrollVisible = (customHeight) => {
  const [scrollVisible, setScrollVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollVisible(window.scrollY > customHeight);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [customHeight]);

  return scrollVisible;
};