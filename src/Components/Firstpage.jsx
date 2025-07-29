import React, { useEffect, useState, useRef } from 'react';
import picko from '../assets/picko.png';

function Firstpage() {
  const fullText = "Eucary Lloyd D. Dupagan";
  const [displayedText, setDisplayedText] = useState("");

  // Refs for the two sides
  const imageRef = useRef(null);
  const textRef = useRef(null);
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i <= fullText.length) {
        setDisplayedText(fullText.slice(0, i));
        i++;
      } else {
        clearInterval(interval); // Stop when done
      }
    }, 100);

    return () => clearInterval(interval); // Clean up when unmounting
  }, []);

  // Trigger both splits on mount
  useEffect(() => {
    if (imageRef.current) {
      imageRef.current.classList.remove('split-right-hidden');
      imageRef.current.classList.add('split-right');
    }
    if (textRef.current) {
      textRef.current.classList.remove('split-left-hidden');
      textRef.current.classList.add('split-left');
    }
  }, []);

  return (
    <div className="w-full min-h-screen overflow-hidden bg-gradient-to-r from-neutral-400 via-neutral-700 to-neutral-950">
      <div className="flex flex-col lg:flex-row min-h-screen justify-between justify-center items-center object-contain">

        {/* IMAGE SIDE */}
        <div
          ref={imageRef}
          className="w-full lg:w-1/2 h-[50vh] lg:h-screen p-4 flex justify-center items-center split-right-hidden"
        >
          <img
            className="w-full  h-auto max-h-full object-contain"
            src={picko}
            alt="Graduation"
          />
        </div>

        {/* TEXT SIDE */}
        <div
          ref={textRef}
          className="w-full lg:w-1/2 p-4 flex flex-col justify-center items-start text-center lg:text-left split-left-hidden"
        >
          <div className="space-y-3 sm:space-y-4 w-full ">
            <h2
              className="text-lg sm:text-xl text-white inline-block bg-neutral-700 p-3 rounded"
              style={{ fontFamily: "'Roboto Flex', sans-serif" }}
            >
              Welcome to My Portfolio
            </h2>

            <h1
              className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800 break-words leading-tight"
              style={{ fontFamily: "'Paytone One', sans-serif" }}
            >
              <span className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
                {displayedText}
              </span>
            </h1>

            <p
              className="text-white mt-2 sm:mt-4 text-xl sm:text-2xl md:text-3xl"
              style={{ fontFamily: "'Rubik Bubbles', cursive" }}
            >
              I'm a Computer Engineer!
            </p>
          </div>
        </div>
      </div>
    </div>
  
  );
}

export default Firstpage;
