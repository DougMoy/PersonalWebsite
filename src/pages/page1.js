import React, { useState, useEffect } from "react";
import "./page1.css";

const Page1 = () => {
  const lines = [
    "Hello World",
    "I am Douglas Moy",
    "Scroll Down to Learn More About Me",
  ];
  const typingSpeed = 75; // Typing speed (in milliseconds)
  const delayAfterTyping = 700; // Delay after each line (in milliseconds)

  const [displayedLines, setDisplayedLines] = useState([]);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [cursorVisible, setCursorVisible] = useState(true);

  useEffect(() => {
    if (currentLineIndex < lines.length) {
      const currentLine = lines[currentLineIndex];
      let charIndex = 0;

      const typingInterval = setInterval(() => {
        if (charIndex <= currentLine.length) {
          setDisplayedLines((prevLines) => [
            ...prevLines.slice(0, currentLineIndex),
            currentLine.substring(0, charIndex),
            ...prevLines.slice(currentLineIndex + 1),
          ]);
          charIndex++;
        } else {
          clearInterval(typingInterval);

          setTimeout(() => {
            setCurrentLineIndex((prevIndex) => prevIndex + 1);
          }, delayAfterTyping);
        }
      }, typingSpeed);

      const cursorInterval = setInterval(() => {
        setCursorVisible((prevCursorVisible) => !prevCursorVisible);
      }, 500);

      return () => {
        clearInterval(typingInterval);
        clearInterval(cursorInterval);
      };
    }
  }, [currentLineIndex]);

  useEffect(() => {
    setDisplayedLines(Array.from({ length: lines.length }, () => ""));
  }, []);

  return (
    <div className="page1-container">
      <div className="text-container">
        {displayedLines.map((line, index) => (
          <p key={index} className="typed-line">
            {line}
            {index === currentLineIndex && cursorVisible && "|"}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Page1;
