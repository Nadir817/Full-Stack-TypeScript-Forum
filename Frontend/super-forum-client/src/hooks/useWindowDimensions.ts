import { useState, useEffect } from "react";

export interface WindowDimension {
  width: number;
  height: number;
}

export const useWindowDimensions = (): WindowDimension => {
  const [dimension, setDimension] = useState<WindowDimension>({
    width: 0,
    height: 0,
  });

  const handleResize = () => {
    setDimension({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return dimension;
};
