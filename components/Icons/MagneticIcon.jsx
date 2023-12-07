'use client';
import gsap from 'gsap'
import React, { useEffect, useRef } from 'react'

export const MagneticIcon = ({children}) => {
    const magnetic = useRef(null);

    useEffect(() => {
      const element = magnetic.current;
      let animation;
  
      const handleMouseMove = (e) => {
        const { clientX, clientY } = e;
        const { width, height, left, top } = element.getBoundingClientRect();
        const x = clientX - (left + width / 2);
        const y = clientY - (top + height / 2);
  
        // Kill any existing animation before starting a new one
        if (animation) {
          animation.kill();
        }
  
        animation = gsap.to(element, { x, y, duration: 0.2, ease: 'power2.out' });
      };
  
      const handleMouseLeave = () => {
        // Reset to the original position when mouse leaves
        if (animation) {
          animation.kill();
        }
        gsap.to(element, { x: 0, y: 0, duration: 0.2, ease: 'power2.out' });
      };
  
      element.addEventListener('mousemove', handleMouseMove);
      element.addEventListener('mouseleave', handleMouseLeave);
  
      // Remove event listeners and kill the animation when the component unmounts
      return () => {
        element.removeEventListener('mousemove', handleMouseMove);
        element.removeEventListener('mouseleave', handleMouseLeave);
  
        if (animation) {
          animation.kill();
        }
      };
    }, []);
  
    // Clone the children and attach the ref to the cloned element
    return React.cloneElement(children, { ref: magnetic });
}
