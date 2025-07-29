import React, { useEffect, useRef, useState } from 'react';
import aboutImg from '../assets/about.jpg';

function Secondpage() {
  const blockRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Optional: run only once
        }
      },
      { threshold: 0.3 } // Trigger when 30% visible
    );

    if (blockRef.current) {
      observer.observe(blockRef.current);
    }

    return () => {
      if (blockRef.current) {
        observer.unobserve(blockRef.current);
      }
    };
  }, []);

  return (
    <div id='about' className="bg-zinc-800 p-8 pt-16 overflow-x-hidden h-screen">
      <div className='lg:pl-28 lg:pr-28 mt-8'>
        <div className='flex flex-row items-center justify-center space-y-4'>
          <h1 className="text-xl sm:text-xl md:text-2xl lg:text-5xl font-bold text-blue-500 border-white border-2 rounded-xl p-5"
              style={{ fontFamily: "'Rowdies', sans-serif" }}>
            About me
          </h1>
          <span className="inline-flex items-center ml-4 rounded-2xl flex-grow h-2 bg-gradient-to-r from-white via-neutral-700 to-neutral-400"></span>
        </div>

        {/* ✅ Scroll animation trigger */}
          <div
            ref={blockRef}
            className={`flex flex-col lg:flex-row lg:pl-10 lg:pr-10 lg:pt-10 p-6 space-y-10 lg:space-y-0 lg:space-x-14 ${
                isVisible ? 'split-right' : 'split-right-hidden'
              }`}
            >

          
              <div
                className="text-white text-justify space-y-3 w-full sm:text-l md:text-xl lg:text-xl"
                style={{ fontFamily: "'Atkinson Hyperlegible', sans-serif", }}
              >
                <p>Hello! I'm Eucary, I am a fresh Computer Engineering graduate with a career-driven mindset and a strong passion for technology, innovation, and continuous learning. My academic background has equipped me with solid skills and knowledge in technology, programming to software development and networking.</p>
                <p>I thrive in environments that challenge me to grow, and I’m committed to building a career where I can apply my technical expertise to solve real-world problems. Whether it's through collaborative projects or independent work, I approach every opportunity with focus, responsibility, and a desire to make a meaningful impact.</p>
                <p>Eager to kick-start my professional journey, I am looking for opportunities where I can contribute, learn from experienced mentors, continuously push my boundaries as an engineer, and continuously grow in a dynamic tech environment.</p>
              </div>

              <img
                src={aboutImg}
                alt='About Me'
                className='rounded-lg shadow-lg ml-4 lg:w-5/6 w-full lg:h-100 '
              />
          </div>
      </div>
    </div>
  );
}

export default Secondpage;
