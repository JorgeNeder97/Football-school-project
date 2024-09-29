import { useState, useEffect } from 'react';

function useViewport() {
  const [width, setWidth] = useState<number>(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);

    window.addEventListener('resize', handleResize);

    // Limpia el event listener al desmontar el componente
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return { width };
}

export default useViewport;
