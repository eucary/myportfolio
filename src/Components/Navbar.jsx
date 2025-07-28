import React from 'react';
import mylogo from './assets/mylogo.png';
function Navbar() {
  
  return (
    <div
      className="bg-zinc-800 text-white p-3"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        zIndex: 50,
        borderBottom: '3px solid #9ca3af',
        overflow: 'hidden',
      }}
    >
      <nav className="flex items-center justify-between">
        <div className="font-bold ">
          <a href="#top">
          <img 
            src={mylogo} 
            alt="Company logo" 
            className="w-16 h-auto ml-3.5 "
          />
          </a>
        </div>
        <ul className="flex space-x-20 text-l  " style={{ fontFamily: "'Roboto Flex', sans-serif" }}>
          <li>
            <a href="#about" className="hover:text-blue-700 text-xl hover:underline">About</a>
          </li>
          <li>
            <a href="#projects" className="hover:text-blue-700 text-xl hover:underline">Projects</a>
          </li>
          <li>
            <a href="#skills" className="hover:text-blue-700 text-xl hover:underline">Skills</a>
          </li>
          <li>
            <a href="#contact" className="hover:text-blue-700 text-xl hover:underline">Contact</a>
          </li>
        </ul>
        <div className='pr-5'>
          <a
            href="/src/assets/Dupagan-RESUME.pdf"
            download
            className="inline-block px-4 py-2 bg-blue-900 text-white  rounded-md shadow-md transition delay-150 duration-300 ease-in-out transform hover:-translate-y-1 hover:border-e-amber-100 hover:scale-110 hover:bg-blue-700 hover:border-2 hover:border-white" style={{ fontFamily: "'Roboto Flex', sans-serif" }}
          >
          My Resume
          </a>
        </div>  
      </nav>
      <div
        style={{
          content: '""',
          position: 'absolute',
          left: 0,
          bottom: -2,
          width: '200%',
          height: 2,
          borderBottom: '2px dashed #9ca3af',
          animation: 'move-dash 2s linear infinite',
          pointerEvents: 'none',
        }}
      />
      <style>
        {`
          @keyframes move-dash {
            0% { left: 0; }
            100% { left: -50%; }
          }
          div[style*="animation:move-dash"] {
            position: absolute !important;
          }
        `}
      </style>
    </div>
  );
}

export default Navbar;