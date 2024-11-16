import React, { useState, useEffect } from "react";

const TypingEffect = ({ text, speed = 100 }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const typingInterval = setInterval(() => {
      if (!isDeleting) {
        // Typing text
        setDisplayedText((prev) => text.slice(0, prev.length + 1));
        if (displayedText === text) {
          setIsDeleting(true);
        }
      } else {
        // Deleting text
        setDisplayedText((prev) => text.slice(0, prev.length - 1));
        if (displayedText === "") {
          setIsDeleting(false);
          setIndex((prev) => prev + 1); // Move to the next cycle
        }
      }
    }, speed);

    return () => clearInterval(typingInterval);
  }, [displayedText, isDeleting, text, speed]);

  return <span>{displayedText}</span>;
};

export default TypingEffect;
