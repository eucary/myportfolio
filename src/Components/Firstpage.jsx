import React, { useEffect, useState } from 'react';
import picko from '../assets/picko.png';
function Firstpage() {
  const fullText = "Eucary Lloyd D. Dupagan";
  const [displayedText, setDisplayedText] = useState("");
  
  useEffect(() => {
    let i = 0;
    let interval;
    let timeout;

    const startTyping = () => {
      i = 0;
      interval = setInterval(() => {
        if (i <= fullText.length) {
          setDisplayedText(fullText.slice(0, i));
          i++;
        } else {
          clearInterval(interval);
          timeout = setTimeout(startTyping, 5000); // restart after 5 seconds
        }
      }, 100);
    };

    startTyping();

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, []);

  return (
    
    <div className="w-full min-h-screen bg-gradient-to-r from-neutral-950 via-neutral-700 to-neutral-400">
      <div className="flex flex-row h-screen justify-between items-center">
        <div className="w-4/10 h-screen p-8 ">
          <img className="w-5/6 h-9/10 ml-10 "
            src={picko}
            alt="Graduation"
          />

        </div>
        <div className="w-6/10 h-7/10 p-8 flex flex-col justify-center items-start">
          <div className="space-y-1">
          <h2 className="inline-flex items-center text-2xl text-white  " style={{ fontFamily: "'Roboto Flex', sans-serif", fontSize: '1.5rem' }}>
            <span className='bg-neutral-700 p-5'>Welcome to My Portfolio</span>
            <span className="inline-flex items-center ml-4 w-100 rounded-2xl  border-b-8 border-solid border-white flex-grow"></span>
          </h2>
            <h1 className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800" style={{ fontFamily: "'Paytone One', sans-serif", fontSize: '6rem' }}>
              {displayedText}
              
            </h1>
            <p style={{ fontFamily: "'Rubik Bubbles', cursive", fontSize: '3rem'  }} className="text-white mt-4">
              I'm a Computer Engineer!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Firstpage;