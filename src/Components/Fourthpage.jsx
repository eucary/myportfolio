import React, { useEffect, useRef, useState } from 'react';
function Fourthpage() {
    const blockRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);
    useEffect(() => {
    const observer = new IntersectionObserver(
        ([entry]) => {
        if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect(); // optional lang ito, para once lang pumasok
        }
        },
        { threshold: 0.3 } // 30% visible bago i-trigger
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
    <div id='skills' className="w-full bg-zinc-800 p-8 pt-16">
      <div className='lg:pl-28 lg:pr-28 mt-8'>
        <div className='flex flex-row items-center justify-center space-y-4'>
          <h1 className="text-xl sm:text-xl md:text-2xl lg:text-5xl font-bold text-blue-500 border-white border-2 rounded-xl p-5"
              style={{ fontFamily: "'Rowdies', sans-serif" }}>
            About me
          </h1>
          <span className="inline-flex items-center ml-4 rounded-2xl flex-grow h-2 bg-gradient-to-r from-white via-neutral-700 to-neutral-400"></span>
        </div>
            <div ref={blockRef} className={` ${isVisible ? 'split-right' : 'split-right-hidden'}`}>
                <div className='grid lg:grid-cols-3 gap-4 w-full  lg:pl-4 lg:pr-4 lg:mt-8 mt-4 '>
                    <div className='bg-neutral-700 p-4 rounded-2xl hover:bg-gradient-to-r hover:from-black hover:to-neutral-700 hover:scale-105 hover:shadow-2xl transition-transform'>
                        <h1 className="lg:text-3xl text-xl font-bold text-blue-500 " style={{ fontFamily: "'Rowdies', sans-serif"}}>Frontend Development</h1>
                        <ul className='list-disc list-inside space-y-2 mt-3 ml-5 text-white lg:text-xl text-m'style={{fontFamily: "'Atkinson Hyperlegible', sans-serif"}}>
                            <li>HTML/CSS</li>
                            <li>React JS</li>
                            <li>Typescript</li>
                            <li>Tailwindcss</li>
                        </ul>
                    </div>
                    <div className='bg-neutral-700 p-4 rounded-2xl hover:bg-gradient-to-r hover:from-black hover:to-neutral-700 hover:scale-105 hover:shadow-2xl transition-transform'>
                        <h1 className="text-2xl font-bold text-blue-500 " style={{ fontFamily: "'Rowdies', sans-serif", fontSize: '2rem' }}>Backend Development</h1>
                        <ul className='list-disc list-inside space-y-2 mt-3 ml-5 text-white lg:text-xl text-m'style={{fontFamily: "'Atkinson Hyperlegible', sans-serif"}}>
                            <li>Node.js</li>
                            <li>Firebase</li>
                            <li>MySQL</li>
                            <li>Basic Deployment</li>
                            <li>Authentication</li>
                            <li>RESTful APIs</li>
                        </ul>
                    </div>
                    <div className='bg-neutral-700 p-4 rounded-2xl hover:bg-gradient-to-r hover:from-black hover:to-neutral-700 hover:scale-105 hover:shadow-2xl transition-transform'>
                        <h1 className="text-2xl font-bold text-blue-500 " style={{ fontFamily: "'Rowdies', sans-serif", fontSize: '2rem' }}>Tools</h1>
                        <ul className='list-disc list-inside space-y-2 mt-3 ml-5 text-white lg:text-xl text-m'style={{fontFamily: "'Atkinson Hyperlegible', sans-serif"}}>
                            <li>Github</li>
                            <li>Visual Studio</li>
                            <li>Apache NetBeans</li>
                        </ul>
                    </div>
                </div>            
                <div className='grid lg:grid-cols-2 gap-4   lg:pl-4 lg:pr-4   mt-4'>
                    <div className='bg-neutral-700 p-4 rounded-2xl hover:bg-gradient-to-r hover:from-black hover:to-neutral-700 hover:scale-105 hover:shadow-2xl transition-transform'>
                        <h1 className="text-2xl font-bold text-blue-500 " style={{ fontFamily: "'Rowdies', sans-serif", fontSize: '2rem' }}>Databases</h1>
                        <ul className='list-disc list-inside space-y-2 mt-3 ml-5 text-white lg:text-xl text-m'style={{fontFamily: "'Atkinson Hyperlegible', sans-serif"}}>
                            <li>MySQL</li>
                            <li>Firebase</li>
                        </ul>
                    </div>
                    <div className='bg-neutral-700 p-4 rounded-2xl hover:bg-gradient-to-r hover:from-black hover:to-neutral-700 hover:scale-105 hover:shadow-2xl transition-transform'>
                        <h1 className="text-2xl font-bold text-blue-500 " style={{ fontFamily: "'Rowdies', sans-serif", fontSize: '2rem' }}>Other Skills</h1>
                        <ul className='list-disc list-inside space-y-2 mt-3 ml-5 text-white lg:text-xl text-m'style={{fontFamily: "'Atkinson Hyperlegible', sans-serif"}}>
                            <li>UI/UX Design</li>
                            <li>Excellent problem solving abilities</li>
                            <li>Strong communication skills</li>
                            <li>Team player with a collaborative mindset</li>
                            <li>Adaptable and quick learner</li>
                            <li>Time management</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}
export default Fourthpage;