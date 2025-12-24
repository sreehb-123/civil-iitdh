import { useState, useEffect } from 'react';

/**
 * Custom hook to get the navbar height dynamically
 * Returns both the height value and Tailwind classes for proper padding
 */
export const useNavbarHeight = () => {
  const [navbarHeight, setNavbarHeight] = useState(0);

  useEffect(() => {
    const navbar = document.getElementById('navbar');
    if (navbar) {
      // Get the actual height of navbar
      const height = navbar.offsetHeight;
      setNavbarHeight(height);

      // Update on window resize
      const handleResize = () => {
        const newHeight = navbar.offsetHeight;
        setNavbarHeight(newHeight);
      };

      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  // Return responsive Tailwind classes for padding
  // pt-10 for mobile (40px), pt-12 for sm+ screens (48px)
  return {
    height: navbarHeight,
    paddingClass: 'pt-10 sm:pt-12'
  };
};
