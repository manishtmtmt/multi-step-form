import { useEffect, useState } from "react";

const getWindowDimensions = () => {
  const { innerWidth: width, innerHeight: height } = window;

  return { width, height };
};

export const useWindowDimensions = () => {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    const handleScreenSize = () => {
      setWindowDimensions(getWindowDimensions());
    };

    window.addEventListener("resize", handleScreenSize);

    return () => window.removeEventListener("resize", handleScreenSize);
  }, []);

  return windowDimensions;
};
