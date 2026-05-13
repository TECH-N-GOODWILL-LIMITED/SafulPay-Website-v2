"use client";
import { useEffect, useState } from "react";

const useViewportHeight = () => {
  const [height, setHeight] = useState<number>(800);

  useEffect(() => {
    setHeight(window.innerHeight || 800);
    const handleResize = () => {
      setHeight(window.innerHeight || 800);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return height;
};

export { useViewportHeight };
