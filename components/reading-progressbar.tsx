"use client";

import { useEffect, useState } from "react";

export const ReadingProgressbar = () => {
  const [readingProgress, setReadingProgress] = useState(0);

  useEffect(() => {
    // Calculate how far the user has scrolled through the page
    // document.documentElement.scrollHeight gives the total height of the document, including the that are not currently visible.
    // window.innerHeight gives the height of the visible part of the window (viewport).
    // window.scrollY gives the number of pixels the document is currently scrolled vertically.

    const handleScroll = () => {
      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollY = window.scrollY;

      if (scrollY === 0) {
        setReadingProgress(0);
        return;
      }

      if (scrollY === 100) {
        setReadingProgress(100);
        return;
      }

      setReadingProgress((scrollY / totalHeight) * 100);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return <div className="fixed left-0 top-0 h-1 bg-primary z-[1000]" style={{"width": `${readingProgress}%`}}/>;
};
