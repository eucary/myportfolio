import React, { useState } from 'react';
import mylogo from '../assets/mylogo.png';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

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
      {/* 3-Column Grid */}
      <nav className="grid grid-cols-3 items-center w-full ">
        {/* Logo */}
        <div className="flex justify-start items-center">
          <a href="#top">
            <img src={mylogo} alt="Logo" className="w-16 h-auto ml-3.5" />
          </a>
        </div>

        {/* Desktop Menu */}
        <ul
          className="hidden md:flex justify-center space-x-12 text-l"
          style={{ fontFamily: "'Roboto Flex', sans-serif" }}
        >
          <li><a href="#about" className="hover:text-blue-700 text-xl hover:underline">About</a></li>
          <li><a href="#projects" className="hover:text-blue-700 text-xl hover:underline">Projects</a></li>
          <li><a href="#skills" className="hover:text-blue-700 text-xl hover:underline">Skills</a></li>
          <li><a href="#contact" className="hover:text-blue-700 text-xl hover:underline">Contact</a></li>
        </ul>

        {/* Resume Button */}
        <div className="hidden md:flex justify-end pr-5">
          <a
            href="/src/assets/Dupagan-RESUME.pdf"
            download
            className="px-4 py-2 bg-blue-900 rounded-md shadow-md transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110 hover:bg-blue-700 hover:border-2 hover:border-white"
            style={{ fontFamily: "'Roboto Flex', sans-serif" }}
          >
            My Resume
          </a>
        </div>

        {/* Mobile Toggle (Hamburger) */}
        <div className="md:hidden flex justify-end pr-5 col-start-3 mt-2 ">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden flex flex-col items-center space-y-4 mt-4 text-center">
          <ul className="space-y-2" style={{ fontFamily: "'Roboto Flex', sans-serif" }}>
            <li><a href="#about" className="hover:text-blue-700 text-lg hover:underline">About</a></li>
            <li><a href="#projects" className="hover:text-blue-700 text-lg hover:underline">Projects</a></li>
            <li><a href="#skills" className="hover:text-blue-700 text-lg hover:underline">Skills</a></li>
            <li><a href="#contact" className="hover:text-blue-700 text-lg hover:underline">Contact</a></li>
          </ul>
          <a
            href="/src/assets/Dupagan-RESUME.pdf"
            download
            className="px-4 py-2 bg-blue-900 rounded-md shadow-md transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110 hover:bg-blue-700 hover:border-2 hover:border-white"
            style={{ fontFamily: "'Roboto Flex', sans-serif" }}
          >
            My Resume
          </a>
        </div>
      )}
      

      {/* Moving Dashed Border */}
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

          html {
            scroll-behavior: smooth;
          }
        `}
      </style>
    </div>
  );
}

export default Navbar;
