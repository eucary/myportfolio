import React, { useEffect, useState } from 'react';
function Fourthpage() {

  return (
    <div id='skills' className="w-full bg-zinc-800 p-8 pt-16">
        <div className='pl-28 pr-28 mt-8  '>
            <div className= ' flex flex-row items-center justify-center space-y-4 '>
                <h1 className="text-4xl font-bold text-blue-500 border-white border-2 rounded-xl p-5" style={{ fontFamily: "'Rowdies', sans-serif", fontSize: '3rem' }}>Skills</h1>
                <span className="inline-flex items-center ml-4 rounded-2xl flex-grow h-2 bg-gradient-to-r from-white via-neutral-700 to-neutral-400"></span>
            </div>
            <div className='grid grid-cols-3 gap-4 w-full  pl-4 pr-4 mt-8  '>
                <div className='bg-neutral-700 p-4 rounded-2xl hover:bg-gradient-to-r hover:from-black hover:to-neutral-700 hover:scale-105 hover:shadow-2xl transition-transform'>
                    <h1 className="text-2xl font-bold text-blue-500 " style={{ fontFamily: "'Rowdies', sans-serif", fontSize: '2rem' }}>Frontend Development</h1>
                    <ul className='list-disc list-inside space-y-2 mt-3 ml-5 text-white text-xl'style={{fontFamily: "'Atkinson Hyperlegible', sans-serif"}}>
                        <li>HTML/CSS</li>
                        <li>React JS</li>
                        <li>Typescript</li>
                        <li>Tailwindcss</li>
                    </ul>
                </div>
                <div className='bg-neutral-700 p-4 rounded-2xl hover:bg-gradient-to-r hover:from-black hover:to-neutral-700 hover:scale-105 hover:shadow-2xl transition-transform'>
                    <h1 className="text-2xl font-bold text-blue-500 " style={{ fontFamily: "'Rowdies', sans-serif", fontSize: '2rem' }}>Backend Development</h1>
                    <ul className='list-disc list-inside space-y-2 mt-3 ml-5 text-white text-xl'style={{fontFamily: "'Atkinson Hyperlegible', sans-serif"}}>
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
                    <ul className='list-disc list-inside space-y-2 mt-3 ml-5 text-white text-xl'style={{fontFamily: "'Atkinson Hyperlegible', sans-serif"}}>
                        <li>Github</li>
                        <li>Visual Studio</li>
                        <li>Apache NetBeans</li>
                    </ul>
                </div>
            </div>            
            <div className='grid grid-cols-2 gap-4   pl-4 pr-4   mt-4'>
                <div className='bg-neutral-700 p-4 rounded-2xl hover:bg-gradient-to-r hover:from-black hover:to-neutral-700 hover:scale-105 hover:shadow-2xl transition-transform'>
                    <h1 className="text-2xl font-bold text-blue-500 " style={{ fontFamily: "'Rowdies', sans-serif", fontSize: '2rem' }}>Databases</h1>
                    <ul className='list-disc list-inside space-y-2 mt-3 ml-5 text-white text-xl'style={{fontFamily: "'Atkinson Hyperlegible', sans-serif"}}>
                        <li>MySQL</li>
                        <li>Firebase</li>
                    </ul>
                </div>
                <div className='bg-neutral-700 p-4 rounded-2xl hover:bg-gradient-to-r hover:from-black hover:to-neutral-700 hover:scale-105 hover:shadow-2xl transition-transform'>
                    <h1 className="text-2xl font-bold text-blue-500 " style={{ fontFamily: "'Rowdies', sans-serif", fontSize: '2rem' }}>Other Skills</h1>
                    <ul className='list-disc list-inside space-y-2 mt-3 ml-5 text-white text-xl'style={{fontFamily: "'Atkinson Hyperlegible', sans-serif"}}>
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
  );
}
export default Fourthpage;