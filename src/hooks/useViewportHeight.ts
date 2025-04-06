import { useEffect, useState } from "react";

const useViewportHeight = () => {
  const [height, setHeight] = useState<number>(
    typeof window !== "undefined" ? window.innerHeight : 800
  );

  useEffect(() => {
    const handleResize = () => {
      setHeight(window.innerHeight || 800);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return height;
};

export { useViewportHeight };
