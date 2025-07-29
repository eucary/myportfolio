import { BsInstagram, BsTelephoneFill } from "react-icons/bs";
import { FaFacebook, FaInstagramSquare, FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { MdMarkEmailUnread } from "react-icons/md";
import Footerbar from "./Footerbar";
import emailjs from 'emailjs-com';
import React, { useEffect, useRef, useState } from 'react';
const sendEmail = (e) => {
  e.preventDefault();

  emailjs.sendForm('service_nfwa9ba', 'template_hh6a0of', e.target, 'neVzH19frFurPLQ1B')
    .then((result) => {
      alert('Message sent successfully!');
    }, (error) => {
      alert('Something went wrong: ' + error.text);
    });

  e.target.reset();
};

function Lastpage() {
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
    return (<>
        <div id="contact" className="w-full bg-zinc-800 p-8 pt-16">
            <div className="lg:pl-20 lg:pr-20 mt-8">
            <div className='flex flex-row items-center justify-center space-y-4'>
                <h1 className="text-xl sm:text-xl md:text-2xl lg:text-5xl font-bold text-blue-500 border-white border-2 rounded-xl p-5"
                    style={{ fontFamily: "'Rowdies', sans-serif" }}>
                    Get in touch
                </h1>
                <span className="inline-flex items-center ml-4 rounded-2xl flex-grow h-2 bg-gradient-to-r from-white via-neutral-700 to-neutral-400"></span>
            </div>
                <div ref={blockRef} className={`w-full lg:p-4 lg:mt-8 mt-4 grid lg:grid-cols-2 gap-8 ${isVisible ? 'split-left' : 'split-left-hidden'}`}>
                    <form onSubmit={sendEmail} className="flex flex-col items-start space-y-6 lg:pr-10 lg:pl-10 pr-4">
                        <h2 className=" font-bold text-white opacity-70 " style={{ fontFamily: "'Atkinson Hyperlegible', sans-serif", fontSize: '1.5rem' }}>Connect with me by writing an email.</h2>
                        <div className="space-y-4">
                            <input name= "name"type="text" placeholder="Your Name" className=" p-3 w-full bg-neutral-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" style={{ fontFamily: "'Roboto flex', sans-serif" }} />
                            <input name="email" type="text" placeholder="Your Email" className=" p-3 w-full  bg-neutral-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" style={{ fontFamily: "'Roboto flex', sans-serif" }} />
                            <textarea name="message" placeholder="Your Message" className=" p-3 w-full  bg-neutral-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" style={{ fontFamily: "'Roboto flex', sans-serif" }} rows="6"></textarea>
                            <button className="px-6 py-3 bg-blue-900 text-white w-full font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300 ease-in-out transform hover:scale-105" style={{ fontFamily: "'Roboto flex', sans-serif" }}>Submit</button>
                        </div>
                    </form>
                    <div className="flex flex-col items-start lg:space-y-6 space-y-3 lg:pr-10 lg:pl-10  ">
                        <h2 className=" font-bold text-white opacity-70 " style={{ fontFamily: "'Atkinson Hyperlegible', sans-serif", fontSize: '1.5rem' }}>Contact me.</h2>
                        <div className="space-y-4 sm:space-y-5 md:space-y-6 lg:space-y-4 w-full max-w-xl mx-auto px-4 ">

                            {[
                                { icon: <BsTelephoneFill />, text: '+63 951 503 5151' },
                                { icon: <MdMarkEmailUnread />, text: 'eucary21@gmail.com'},
                                { icon: <FaFacebook />, text: 'web.facebook.com/eucary.dupagan', href: 'https://web.facebook.com/eucary.dupagan' },
                                { icon: <BsInstagram />, text: 'www.instagram.com/eucstogo0/', href: 'https://www.instagram.com/eucstogo0/' },
                                { icon: <FaGithub />, text: 'github.com/eucary', href: 'https://github.com/eucary' },
                                { icon: <FaLinkedin />, text: 'www.linkedin.com/in/eucary-dupagan/', href: 'https://www.linkedin.com/in/eucary-dupagan/' },
                            ].map((item, index) => (
                                <div key={index} className="flex items-center space-x-4 group">
                                    <div className="text-blue-500 lg:text-xl sm:text-m transition duration-300 ease-in-out transform group-hover:scale-105">
                                        {item.icon}
                                    </div>
                                    <a
                                        href={item.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-white opacity-70 lg:text-xl sm:text-m hover:underline"
                                        style={{ fontFamily: "'Atkinson Hyperlegible', sans-serif" }}
                                    >
                                        {item.text}
                                    </a>
                                
                                </div>
                            ))}                                
                            <div className="hidden md:flex  pr-5">
                                    <a
                                        href="/src/assets/Dupagan-RESUME.pdf"
                                        download
                                        className="px-4 py-2 bg-blue-500 rounded-md shadow-md transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110 hover:bg-blue-700 hover:border-2 hover:border-white"
                                        style={{ fontFamily: "'Roboto Flex', sans-serif" }}
                                    >
                                        My Resume
                                    </a>
                            </div>
                        </div>

                    </div>
                </div>
            </div> 
        </div>
        <Footerbar />
    </>);
}

export default Lastpage;