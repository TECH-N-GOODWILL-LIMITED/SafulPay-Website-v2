import { useEffect, useState } from "react";

const useViewportWidth = () => {
  const [width, setWidth] = useState<number>(
    typeof window !== "undefined" ? window.innerWidth : 640
  );

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth || 640);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = width < 640;

  return { width, isMobile };
};

export { useViewportWidth };
