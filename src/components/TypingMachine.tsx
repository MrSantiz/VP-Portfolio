import React, { useState, useEffect } from "react";

const TypingMachine = () => {
  const [code, setCode] = useState("");
  const codeLines = [
    "<html>",
    "  <head>",
    "    <title>My Web Page</title>",
    "  </head>",
    "  <body>",
    "    <h1>Hello, World!</h1>",
    "  </body>",
    "</html>",
  ];

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      setCode((prevCode) => `${prevCode + codeLines[currentIndex]}\n`);
      currentIndex++;
      if (currentIndex === codeLines.length) {
        clearInterval(interval);
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return <pre className="text-white pt-9 rounded-lg text-xl">{code}</pre>;
};

export default TypingMachine;
