import React, { useState, useEffect } from 'react';


function Secondpage() {
  return (
    <div id='about'  className=" bg-zinc-800 p-8 pt-16">
        <div  className='pl-28 pr-28 mt-8 '>
            <div className= ' flex flex-row items-center justify-center space-y-4 '>
                <h1 className="text-4xl font-bold text-blue-500 border-white border-2 rounded-xl p-5" style={{ fontFamily: "'Rowdies', sans-serif", fontSize: '3rem' }}>About me</h1>
                <span className="inline-flex items-center ml-4 rounded-2xl flex-grow h-2 bg-gradient-to-r from-white via-neutral-700 to-neutral-400"></span>
            </div>
            <div className='flex flex-1/2  pl-10 pr-10 pt-10  space-x-14'>
                <aboutme className="text-white  text-justify space-y-3 " style={{ fontFamily: "'Atkinson Hyperlegible', sans-serif", fontSize:'1.1rem' }}>
                    <p>
                    Hello! I'm Eucary, I am a fresh Computer Engineering graduate with a career-driven mindset and a strong passion for technology, innovation, and continuous learning. My academic background has equipped me with solid skills and knowledge in technology, programming to software development and networking. 
                    </p>
                    
                    <p>I thrive in environments that challenge me to grow, and I’m committed to building a career where I can apply my technical expertise to solve real-world problems. Whether it's through collaborative projects or independent work, I approach every opportunity with focus, responsibility, and a desire to make a meaningful impact.</p>
                    <p>Eager to kick-start my professional journey, I am looking for opportunities where I can contribute, learn from experienced mentors, continuously push my boundaries as an engineer, and continuously grow in a dynamic tech environment.</p>
                </aboutme>
                <img src='./src/assets/about.jpg' alt='About Me' className=' rounded-lg shadow-lg  ml-4 w-5/6 h-100  ' >
                </img>
            </div>    
        </div>
    </div>
  );
}

export default Secondpage;