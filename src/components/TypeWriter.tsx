import React, { useState, useEffect } from "react";

const TypeWriter = () => {
  const [text, setText] = useState("");
  const [isWriting, setIsWriting] = useState(true);

  useEffect(() => {
    const textToWrite = "I am Front-end developer";
    let currentIndex = 0;

    const timer = setInterval(() => {
      if (currentIndex < textToWrite.length) {
        const currentChar = textToWrite[currentIndex];
        if (currentChar === "<") {
          setIsWriting(true);
        } else if (currentChar === ">") {
          setIsWriting(false);
        } else {
          setText((prevText) => prevText + currentChar);
        }
        currentIndex++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="text-2xl text-red">{isWriting ? `${text}` : text}</div>
  );
};

export default TypeWriter;
