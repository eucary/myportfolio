
import React, { useEffect, useRef, useState } from 'react';
import { FaReact } from 'react-icons/fa';
import { FaJava, FaNodeJs } from 'react-icons/fa6';
import { FiFigma } from 'react-icons/fi';
import { IoLogoCss3, IoLogoHtml5, IoLogoJavascript } from 'react-icons/io5';
import { MdArrowBackIos, MdArrowForwardIos } from 'react-icons/md';
import { SiArduino, SiFirebase, SiMysql, SiShadcnui, SiTailwindcss, SiTypescript, SiVite } from 'react-icons/si';
import thesis3 from '../assets/thesis/thesis3.png';
import thesis4 from '../assets/thesis/thesis4.png';
import thesis5 from '../assets/thesis/thesis5.png';
import thesis6 from '../assets/thesis/thesis6.png';
import thesis1 from '../assets/thesis/thesis1.jpg';
import thesis2 from '../assets/thesis/thesis2.png';
import img1 from '../assets/brulifepics/1.png';
import img2 from '../assets/brulifepics/2.png';
import img3 from '../assets/brulifepics/3.png';
import img4 from '../assets/brulifepics/4.png';
import img5 from '../assets/brulifepics/5.png';
import img6 from '../assets/brulifepics/6.png';
import img7 from '../assets/brulifepics/7.png';
import img8 from '../assets/brulifepics/8.png';
import img9 from '../assets/brulifepics/9.png';
import img10 from '../assets/brulifepics/10.png';
import img11 from '../assets/brulifepics/11.png';
import img12 from '../assets/brulifepics/12.png';
import img13 from '../assets/brulifepics/13.png';
import img14 from '../assets/brulifepics/14.png';
import img15 from '../assets/brulifepics/15.png';
import img16 from '../assets/brulifepics/16.png';
import chat1 from '../assets/chatapp/1.png';
import chat2 from '../assets/chatapp/2.png';
import chat3 from '../assets/chatapp/3.png';
import chat4 from '../assets/chatapp/4.png';
import chat5 from '../assets/chatapp/5.png';
import chat6 from '../assets/chatapp/6.png';
import chat7 from '../assets/chatapp/7.png';
import figma1 from '../assets/figma/1.png';
import figma2 from '../assets/figma/2.png';
import figma3 from '../assets/figma/3.png';
import figma4 from '../assets/figma/4.png';
import figma5 from '../assets/figma/5.png';
import figma6 from '../assets/figma/6.png';
import figma7 from '../assets/figma/7.png';
import figma8 from '../assets/figma/8.png';
import figma9 from '../assets/figma/9.png';
import figma10 from '../assets/figma/10.png';
import figma11 from '../assets/figma/11.png';
import figma12 from '../assets/figma/12.png';
import figma13 from '../assets/figma/13.png';
import figma14 from '../assets/figma/14.png';
import figma15 from '../assets/figma/15.png';
import figma16 from '../assets/figma/16.png';
import figma17 from '../assets/figma/17.png';
import figma18 from '../assets/figma/18.png';
import figma19 from '../assets/figma/19.png';
import figma20 from '../assets/figma/20.png';
import sh1 from '../assets/statushub/1.png';
import sh2 from '../assets/statushub/2.png';
import sh3 from '../assets/statushub/3.png';
import sh4 from '../assets/statushub/4.png';
import sh5 from '../assets/statushub/5.png';
import book1 from '../assets/booking/1.png';
import book2 from '../assets/booking/2.png';
import book3 from '../assets/booking/3.png';
import book4 from '../assets/booking/4.png';
function Thirdpage() {
    const images = [thesis3, thesis4, thesis5, thesis6, thesis1, thesis2];
    const images1 = [img1, img2, img3, img4, img5, img6, img7, img8,img9, img10, img11, img12, img13, img14, img15, img16];
    const images2 = [chat1, chat2, chat3, chat4, chat5, chat6, chat7];
    const images3 = [figma1, figma2, figma3, figma4, figma5, figma6, figma7, figma8, figma9, figma10, figma11, figma12, figma13, figma14, figma15, figma16, figma17, figma18, figma19, figma20];
    const images4 = [sh1, sh2, sh3, sh4, sh5];
    const images5 = [book1, book2, book3, book4];

    const [openModalIndex, setOpenModalIndex] = useState(null); // null means no modal is open

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentImage, setCurrentImage] = useState(0);
      // State to track the current image index
    const [currentIndex, setCurrentIndex] = useState(0);
    const [currentIndex1, setCurrentIndex1] = useState(0);
    const [currentIndex2, setCurrentIndex2] = useState(0);
    const [currentIndex3, setCurrentIndex3] = useState(0);
    const [currentIndex4, setCurrentIndex4] = useState(0);
    const [currentIndex5, setCurrentIndex5] = useState(0);
    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };
    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };
    const handlePrev1 = () => {
    setCurrentIndex1((prevIndex) => (prevIndex === 0 ? images1.length - 1 : prevIndex - 1));
    };
    const handleNext1 = () => {
        setCurrentIndex1((prevIndex) => (prevIndex === images1.length - 1 ? 0 : prevIndex + 1));
    };
    const handlePrev2 = () => {
        setCurrentIndex2((prevIndex) => (prevIndex === 0 ? images2.length - 1 : prevIndex - 1));
        };
    const handleNext2 = () => {
        setCurrentIndex2((prevIndex) => (prevIndex === images2.length - 1 ? 0 : prevIndex + 1));
        };
    const handlePrev3 = () => {
        setCurrentIndex3((prevIndex) => (prevIndex === 0 ? images3.length - 1 : prevIndex - 1));
        };
    const handleNext3 = () => {
        setCurrentIndex3((prevIndex) => (prevIndex === images3.length - 1 ? 0 : prevIndex + 1));
        };
    const handlePrev4 = () => {
        setCurrentIndex4((prevIndex) => (prevIndex === 0 ? images4.length - 1 : prevIndex - 1));
        };
    const handleNext4 = () => {
        setCurrentIndex4((prevIndex) => (prevIndex === images4.length - 1 ? 0 : prevIndex + 1));
        };
    const handlePrev5 = () => {
        setCurrentIndex5((prevIndex) => (prevIndex === 0 ? images5.length - 1 : prevIndex - 1));
        };
    const handleNext5 = () => {
        setCurrentIndex5((prevIndex) => (prevIndex === images5.length - 1 ? 0 : prevIndex + 1));
        };
    const blockRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
            if (entry.isIntersecting) {
                setIsVisible(true);
                observer.disconnect(); // optional lang ito
            }
            },
            { threshold: 0.3 }
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
    <div id='projects' className=" bg-zinc-800 p-8 pt-24">
        <div className='lg:pl-28 lg:pr-28 '>
        <div className='flex flex-row items-center justify-center space-y-4'>
          <h1 className="text-xl sm:text-xl md:text-2xl lg:text-5xl font-bold text-blue-500 border-white border-2 rounded-xl p-5"
              style={{ fontFamily: "'Rowdies', sans-serif" }}>
            Projects
          </h1>
          <span className="inline-flex items-center ml-4 rounded-2xl flex-grow h-2 bg-gradient-to-r from-white via-neutral-700 to-neutral-400"></span>
        </div>
            <div ref={blockRef} className={`grid grid grid-cols-1 md:grid-cols-2 gap-6 w-full p-4 lg:mt-8 ${isVisible ? 'split-left' : 'split-left-hidden'}`}>
                <div className=" border-2 border-blue-500 rounded-lg shadow-lg hover:scale-105 hover:shadow-2xl transition-transform duration-300 hover:bg-neutral-700 hover-shadow-2xl hover:border-blue-400">
                    <div className="relative w-full p-4">
                        <img
                            src={images[currentIndex]}
                            alt={`Project Image ${currentIndex + 1}`}
                            className=" h-72 rounded-md mx-auto "
                        />
                        <div className=" flex items-center justify-center mt-4">
                            <button
                                onClick={handlePrev}
                                className="   text-blue-400 p-2 "
                            >
                                <MdArrowBackIos/>
                            </button>
                            <div className="flex justify-center space-x-2 ">
                                {images.map((_, index) => (
                                    <span
                                    key={index}
                                    className={`lg:h-3 lg:w-3 h-2 w-2 rounded-full cursor-pointer ${
                                        index === currentIndex ? 'bg-blue-500' : 'bg-white'
                                    }`}
                                    onClick={() => setCurrentIndex(index)}
                                    aria-label={`Go to image ${index + 1}`}
                                    />
                                ))}
                            </div>
                            <button
                                onClick={handleNext}
                                className="   text-blue-400 p-2  "
                            >
                                <MdArrowForwardIos/>
                            </button>
                        </div>
                    </div>
                    <div className='pl-8 pr-8 pb-4'>
                        <h2 className=' font-bold text-white'style={{ fontFamily: "'Roboto Flex', sans-serif", fontSize: '1.5rem' }}>Helmet Vendo Machine</h2>
                        <p className='text-m text-white opacity-75 text-justify' style={{fontFamily: "'Atkinson Hyperlegible', sans-serif"}}>We innovated an existing vendo machine by adding a cleaning and drying mechanism, along with a website for remote monitoring and control.</p>
                        <button
                        onClick={() => setOpenModalIndex(0)} // change 0 to 1, 2, 3, etc. per project
                        className='block mx-auto cursor-pointer text-blue-600 hover:text-white hover:underline mt-2'
                        >
                        See more
                        </button>
                    </div>
                </div>
                <div className=" border-2 border-blue-500  rounded-lg shadow-lg hover:scale-105 hover:shadow-2xl transition-transform duration-300 hover:bg-neutral-700 hover-shadow-2xl hover:border-blue-400">
                    <div className="relative w-full p-4">
                        <img
                            src={images1[currentIndex1]}
                            alt={`Project Image ${currentIndex1 + 1}`}
                            className="mx-auto h-72 rounded-md"
                        />
                        <div className="flex items-center justify-center mt-4 space-x-4">
                            <button onClick={handlePrev1} className="text-blue-400 p-2">
                                <MdArrowBackIos />
                            </button>

                            <div className="flex justify-center items-center space-x-2">
                                {/* Leading Ellipsis */}
                                {currentIndex1 > 2 && (
                                <span className="text-gray-400 px-1 select-none">…</span>
                                )}

                                {images1.map((_, index) => {
                                const total = images1.length;
                                const maxDots = 6;
                                const half = Math.floor(maxDots / 2);

                                let start = Math.max(0, currentIndex1 - half);
                                let end = Math.min(total, start + maxDots);

                                if (end - start < maxDots) {
                                    start = Math.max(0, end - maxDots);
                                }

                                if (index >= start && index < end) {
                                    return (
                                    <span
                                        key={index}
                                        className={`lg:h-3 lg:w-3 h-2 w-2 rounded-full cursor-pointer transition-all ${
                                        index === currentIndex1 ? 'bg-blue-500' : 'bg-white border border-blue-500'
                                        }`}
                                        onClick={() => setCurrentIndex1(index)}
                                        aria-label={`Go to image ${index + 1}`}
                                    />
                                    );
                                }

                                return null;
                                })}

                                {/* Trailing Ellipsis */}
                                {currentIndex1 < images1.length - 3 && (
                                <span className="text-gray-400 px-1 select-none">…</span>
                                )}
                            </div>
                            <button onClick={handleNext1} className="text-blue-400 p-2">
                                <MdArrowForwardIos />
                            </button>
                        </div>
                    </div>
                    <div className='pl-8 pr-8 pb-4'>
                        <h2 className=' font-bold text-white'style={{ fontFamily: "'Roboto Flex', sans-serif", fontSize: '1.5rem' }}>E-commerce Website</h2>
                        <p className='text-m text-white opacity-75 text-justify' style={{fontFamily: "'Atkinson Hyperlegible', sans-serif"}}>This website was part of my OJT/internship, where I worked as the frontend developer.</p>
                        <button
                            onClick={() => setOpenModalIndex(1)} // change 0 to 1, 2, 3, etc. per project
                            className='block mx-auto cursor-pointer text-blue-600 hover:text-white hover:underline mt-2'
                            >
                            See more
                        </button>
                    </div>
                </div>
                
                <div className=" border-2 border-blue-500 rounded-lg shadow-lg hover:scale-105 hover:shadow-2xl transition-transform duration-300 hover:bg-neutral-700 hover-shadow-2xl hover:border-blue-400">
                    <div className="relative w-full p-4">
                        <img
                            src={images2[currentIndex2]}
                            alt={`Project Image ${currentIndex2 + 1}`}
                            className="mx-auto h-72 rounded-md"
                        />
                        <div className="flex items-center justify-center mt-4 space-x-4">
                            <button onClick={handlePrev2} className="text-blue-400 p-2">
                                <MdArrowBackIos />
                            </button>

                            <div className="flex justify-center items-center space-x-2">
                                {/* Leading Ellipsis */}
                                {currentIndex2 > 2 && (
                                <span className="text-gray-400 px-1 select-none">…</span>
                                )}

                                {images2.map((_, index) => {
                                const total = images2.length;
                                const maxDots = 6;
                                const half = Math.floor(maxDots / 2);

                                let start = Math.max(0, currentIndex2 - half);
                                let end = Math.min(total, start + maxDots);

                                if (end - start < maxDots) {
                                    start = Math.max(0, end - maxDots);
                                }

                                if (index >= start && index < end) {
                                    return (
                                    <span
                                        key={index}
                                        className={`lg:h-3 lg:w-3 h-2 w-2 rounded-full cursor-pointer transition-all ${
                                        index === currentIndex2 ? 'bg-blue-500' : 'bg-white border border-blue-500'
                                        }`}
                                        onClick={() => setCurrentIndex2(index)}
                                        aria-label={`Go to image ${index + 1}`}
                                    />
                                    );
                                }

                                return null;
                                })}

                                {/* Trailing Ellipsis */}
                                {currentIndex2 < images2.length - 3 && (
                                <span className="text-gray-400 px-1 select-none">…</span>
                                )}
                            </div>
                            <button onClick={handleNext2} className="text-blue-400 p-2">
                                <MdArrowForwardIos />
                            </button>
                        </div>
                    </div>
                    <div className='pl-8 pr-8 pb-4'>
                        <h2 className=' font-bold text-white'style={{ fontFamily: "'Roboto Flex', sans-serif", fontSize: '1.5rem' }}>ChatHub</h2>
                        <p className='text-m text-white opacity-75 text-justify' style={{fontFamily: "'Atkinson Hyperlegible', sans-serif"}}>This is a personal project I developed — a chat application where I handled the entire frontend design and functionality. It showcases my skills in building interactive user interfaces, managing real-time communication, and implementing responsive layouts.</p>
                        <button
                            onClick={() => setOpenModalIndex(2)} // change 0 to 1, 2, 3, etc. per project
                            className='block mx-auto cursor-pointer text-blue-600 hover:text-white hover:underline mt-2'
                            >
                            See more
                        </button>
                    </div>
                </div>

                <div className=" border-2 border-blue-500 rounded-lg shadow-lg hover:scale-105 hover:shadow-2xl transition-transform duration-300 hover:bg-neutral-700 hover-shadow-2xl hover:border-blue-400">
                    <div className="relative w-full p-4">
                        <img
                            src={images3[currentIndex3]}
                            alt={`Project Image ${currentIndex3 + 1}`}
                            className=" h-72 rounded-md mx-auto "
                        />
                       <div className="flex items-center justify-center mt-4 space-x-4">
                            <button onClick={handlePrev3} className="text-blue-400 p-2">
                                <MdArrowBackIos />
                            </button>

                            <div className="flex justify-center items-center lg:space-x-2 space-x-1">
                                {/* Leading Ellipsis */}
                                {currentIndex3 > 2 && (
                                <span className="text-gray-400 px-1 select-none">…</span>
                                )}

                                {images3.map((_, index) => {
                                const total = images3.length;
                                const maxDots = 6;
                                const half = Math.floor(maxDots / 2);

                                let start = Math.max(0, currentIndex3 - half);
                                let end = Math.min(total, start + maxDots);

                                if (end - start < maxDots) {
                                    start = Math.max(0, end - maxDots);
                                }

                                if (index >= start && index < end) {
                                    return (
                                    <span
                                        key={index}
                                        className={`lg:h-3 lg:w-3 h-2 w-2 rounded-full cursor-pointer transition-all ${
                                        index === currentIndex3 ? 'bg-blue-500' : 'bg-white border border-blue-500'
                                        }`}
                                        onClick={() => setCurrentIndex3(index)}
                                        aria-label={`Go to image ${index + 1}`}
                                    />
                                    );
                                }

                                return null;
                                })}

                                {/* Trailing Ellipsis */}
                                {currentIndex3 < images3.length - 3 && (
                                <span className="text-gray-400 px-1 select-none">…</span>
                                )}
                            </div>
                            <button onClick={handleNext3} className="text-blue-400 p-2">
                                <MdArrowForwardIos />
                            </button>
                        </div>
                    </div>
                    <div className='pl-8 pr-8 pb-4'>
                        <h2 className=' font-bold text-white'style={{ fontFamily: "'Roboto Flex', sans-serif", fontSize: '1.5rem' }}>GrowGreen</h2>
                        <p className='text-m text-white opacity-75 text-justify' style={{fontFamily: "'Atkinson Hyperlegible', sans-serif"}}>In this project, I collaborated with my groupmates and contributed to improving and refining the Figma design to ensure a clean, user-friendly interface..</p>
                        <button
                            onClick={() => setOpenModalIndex(3)} // change 0 to 1, 2, 3, etc. per project
                            className='block mx-auto cursor-pointer text-blue-600 hover:text-white hover:underline mt-2'
                            >
                            See more
                        </button>
                    </div>
                </div>
                <div className=" border-2 border-blue-500 rounded-lg shadow-lg hover:scale-105 hover:shadow-2xl transition-transform duration-300 hover:bg-neutral-700 hover-shadow-2xl hover:border-blue-400">
                    <div className="relative w-full p-4">
                        <img
                            src={images4[currentIndex4]}
                            alt={`Project Image ${currentIndex4 + 1}`}
                            className=" h-72 rounded-md mx-auto "
                        />
                        <div className=" flex items-center justify-center mt-4">
                            <button
                                onClick={handlePrev4}
                                className="   text-blue-400 p-2 "
                            >
                                <MdArrowBackIos/>
                            </button>
                            <div className="flex justify-center space-x-2 ">
                                {images4.map((_, index) => (
                                    <span
                                    key={index}
                                    className={`lg:h-3 lg:w-3 h-2 w-2 rounded-full cursor-pointer ${
                                        index === currentIndex4 ? 'bg-blue-500' : 'bg-white'
                                    }`}
                                    onClick={() => setCurrentIndex4(index)}
                                    aria-label={`Go to image ${index + 1}`}
                                    />
                                ))}
                            </div>
                            <button
                                onClick={handleNext4}
                                className="   text-blue-400 p-2  "
                            >
                                <MdArrowForwardIos/>
                            </button>
                        </div>
                    </div>
                    <div className='pl-8 pr-8 pb-4'>
                        <h2 className=' font-bold text-white'style={{ fontFamily: "'Roboto Flex', sans-serif", fontSize: '1.5rem' }}>StatusHub</h2>
                        <p className='text-m text-white opacity-75 text-justify' style={{fontFamily: "'Atkinson Hyperlegible', sans-serif"}}>This is also one of my personal projects — Status Hub, a platform where users can post, edit, and delete their own status updates, as well as view status posts from others. It highlights my skills in user interaction, CRUD functionality, and dynamic content handling.</p>
                        <button
                            onClick={() => setOpenModalIndex(4)} // change 0 to 1, 2, 3, etc. per project
                            className='block mx-auto cursor-pointer text-blue-600 hover:text-white hover:underline mt-2'
                            >
                        See more
                        </button>
                    </div>
                </div>
                <div className=" border-2 border-blue-500 rounded-lg shadow-lg hover:scale-105 hover:shadow-2xl transition-transform duration-300 hover:bg-neutral-700 hover-shadow-2xl hover:border-blue-400">
                    <div className="relative w-full p-4">
                        <img
                            src={images5[currentIndex5]}
                            alt={`Project Image ${currentIndex5 + 1}`}
                            className=" h-72 rounded-md mx-auto "
                        />
                        <div className=" flex items-center justify-center mt-4">
                            <button
                                onClick={handlePrev5}
                                className="   text-blue-400 p-2 "
                            >
                                <MdArrowBackIos/>
                            </button>
                            <div className="flex justify-center space-x-2 ">
                                {images5.map((_, index) => (
                                    <span
                                    key={index}
                                    className={`lg:h-3 lg:w-3 h-2 w-2 rounded-full cursor-pointer ${
                                        index === currentIndex5 ? 'bg-blue-500' : 'bg-white'
                                    }`}
                                    onClick={() => setCurrentIndex5(index)}
                                    aria-label={`Go to image ${index + 1}`}
                                    />
                                ))}
                            </div>
                            <button
                                onClick={handleNext5}
                                className="   text-blue-400 p-2  "
                            >
                                <MdArrowForwardIos/>
                            </button>
                        </div>
                    </div>
                    <div className='pl-8 pr-8 pb-4'>
                        <h2 className=' font-bold text-white'style={{ fontFamily: "'Roboto Flex', sans-serif", fontSize: '1.5rem' }}>Resort Booking System</h2>
                        <p className='text-m text-white opacity-75 text-justify' style={{fontFamily: "'Atkinson Hyperlegible', sans-serif"}}>This is a resort booking system designed to simplify the booking process for customers. It allows users to easily view available dates, resort prices, and detailed information, making reservations more convenient and efficient.</p>
                        <button
                            onClick={() => setOpenModalIndex(5)} // change 0 to 1, 2, 3, etc. per project
                            className='block mx-auto cursor-pointer text-blue-600 hover:text-white hover:underline mt-2'
                            >
                            See more
                        </button>
                    </div>
                </div>
            </div>
        </div>

            {openModalIndex !== null && (
                <div className="fixed inset-0 z-50 flex items-center  justify-center bg-black/30 backdrop-blur-sm">
                    <div className="bg-zinc-700 rounded-md shadow-lg p-6 lg:w-1/2  relative max-h-[90vh] overflow-y-auto">
                        <button
                            onClick={() => setOpenModalIndex(null)}
                            className="absolute top-2 right-2 text-white hover:text-blue-500"
                        >
                            ✕
                        </button>
                        <div className='p-2 flex flex-row items-center gap-3'>
                            <text className=" mb-2 text-white text-2xl"style={{ fontFamily: "'Rowdies', sans-serif" }}>Made with</text>
                            <span className="inline-flex items-center ml-4 rounded-2xl flex-grow h-1 bg-gradient-to-r from-white via-neutral-700 to-neutral-400"></span>
                            {[                   
                                <div className='flex-row flex gap-1'>
                                    <IoLogoJavascript className=' text-yellow-500 lg:h-10 lg:w-10 md:h-8 md:w-8 sm:h-5 sm:w-5'/>
                                    <SiArduino className=' text-white lg:w-10 md:h-8 md:w-8 sm:h-5 sm:w-5'/>
                                    <IoLogoHtml5 className=' text-orange-600 lg:w-10 md:h-8 md:w-8 sm:h-5 sm:w-5'/>
                                    <IoLogoCss3 className=' text-blue-500 lg:w-10 md:h-8 md:w-8 sm:h-5 sm:w-5'/>
                                </div>,
                                <div className='flex-row flex gap-1'>
                                    <IoLogoJavascript className=' text-yellow-500 lg:w-10 md:h-8 md:w-8 sm:h-5 sm:w-5'/>
                                    <IoLogoHtml5 className=' text-orange-600 lg:w-10 md:h-8 md:w-8 sm:h-5 sm:w-5'/>
                                    <IoLogoCss3 className=' text-blue-500 lg:w-10 md:h-8 md:w-8 sm:h-5 sm:w-5'/>
                                    <FaReact className=' text-blue-300 lg:w-10 md:h-8 md:w-8 sm:h-5 sm:w-5'/>
                                    <FiFigma className=' text-black lg:w-10 md:h-8 md:w-8 sm:h-5 sm:w-5'/>
                                    <SiTailwindcss className=' text-blue-400 lg:w-10 md:h-8 md:w-8 sm:h-5 sm:w-5'/>
                                    <SiShadcnui className=' text-white lg:w-10 md:h-8 md:w-8 sm:h-5 sm:w-5'/>
                                </div>,
                                <div className='flex-row flex gap-1'>
                                    <IoLogoJavascript className=' text-yellow-500 lg:w-10 md:h-8 md:w-8 sm:h-5 sm:w-5'/>
                                    <IoLogoHtml5 className=' text-orange-600 lg:w-10 md:h-8 md:w-8 sm:h-5 sm:w-5'/>
                                    <IoLogoCss3 className=' text-blue-500 lg:w-10 md:h-8 md:w-8 sm:h-5 sm:w-5'/>
                                    <FaReact className=' text-blue-300 lg:w-10 md:h-8 md:w-8 sm:h-5 sm:w-5'/>
                                    <SiVite className=' text-violet-400 lg:w-10 md:h-8 md:w-8 sm:h-5 sm:w-5'/>
                                    <FiFigma className=' text-black lg:w-10 md:h-8 md:w-8 sm:h-5 sm:w-5'/>
                                    <SiMysql className=' text-white lg:w-10 md:h-8 md:w-8 sm:h-5 sm:w-5'/>
                                    <FaNodeJs className=' text-green-500 lg:w-10 md:h-8 md:w-8 sm:h-5 sm:w-5'/>
                                    <SiTypescript className=' text-blue-600 lg:w-10 md:h-8 md:w-8 sm:h-5 sm:w-5'/>
                                </div>,
                                <div className='flex-row flex gap-1'>
                                    <FiFigma className=' text-black lg:w-10 md:h-8 md:w-8 sm:h-5 sm:w-5'/>
                                </div>,
                                <div className='flex-row flex gap-1'>
                                    <IoLogoJavascript className=' text-yellow-500 lg:w-10 md:h-8 md:w-8 sm:h-5 sm:w-5'/>
                                    <IoLogoHtml5 className=' text-orange-600 lg:w-10 md:h-8 md:w-8 sm:h-5 sm:w-5'/>
                                    <IoLogoCss3 className=' text-blue-500 lg:w-10 md:h-8 md:w-8 sm:h-5 sm:w-5'/>
                                    <FaReact className=' text-blue-300 lg:w-10 md:h-8 md:w-8 sm:h-5 sm:w-5'/>
                                    <SiVite className=' text-violet-400 lg:w-10 md:h-8 md:w-8 sm:h-5 sm:w-5'/>
                                    <FiFigma className=' text-black lg:w-10 md:h-8 md:w-8 sm:h-5 sm:w-5'/>
                                    <SiFirebase className=' text-orange-600 lg:w-10 md:h-8 md:w-8 sm:h-5 sm:w-5'/>
                                    <FaNodeJs className=' text-green-500 lg:w-10 md:h-8 md:w-8 sm:h-5 sm:w-5'/>
                                    <SiTypescript className=' text-blue-600 lg:w-10 md:h-8 md:w-8 sm:h-5 sm:w-5'/>
                                </div>,
                                <div className='flex-row flex gap-1'>
                                    <FaJava className=' text-white lg:w-10 md:h-8 md:w-8 sm:h-5 sm:w-5'/>
                                    
                                </div>,
                            ][openModalIndex]}
                        </div>
                        <div className="relative w-full p-2 ">
                            {[
                                <div className="text-center">
                                    <img
                                    src={images[currentIndex]}
                                    alt={`Project Image ${currentIndex + 1}`}
                                    className="mx-auto lg:h-96 rounded-md"
                                    />
                                    <div className="flex items-center justify-center mt-4">
                                    <button onClick={handlePrev} className="text-blue-400 p-2">
                                        <MdArrowBackIos />
                                    </button>
                                    <div className="flex justify-center space-x-2">
                                        {images.map((_, index) => (
                                        <span
                                            key={index}
                                            className={`h-3 w-3 rounded-full cursor-pointer ${
                                            index === currentIndex ? 'bg-blue-500' : 'bg-white'
                                            }`}
                                            onClick={() => setCurrentIndex(index)}
                                            aria-label={`Go to image ${index + 1}`}
                                        />
                                        ))}
                                    </div>
                                    <button onClick={handleNext} className="text-blue-400 p-2">
                                        <MdArrowForwardIos />
                                    </button>
                                    </div>
                                </div>,
                                <div className="text-center">
                                    <img
                                        src={images1[currentIndex1]}
                                        alt={`Project Image ${currentIndex1 + 1}`}
                                        className="mx-auto lg:h-96 rounded-md"
                                    />
                                    <div className="flex items-center justify-center mt-4 space-x-4">
                                        <button onClick={handlePrev1} className="text-blue-400 p-2">
                                            <MdArrowBackIos />
                                        </button>

                                        <div className="flex justify-center items-center space-x-2">
                                            {/* Leading Ellipsis */}
                                            {currentIndex1 > 2 && (
                                            <span className="text-gray-400 px-1 select-none">…</span>
                                            )}

                                            {images1.map((_, index) => {
                                            const total = images1.length;
                                            const maxDots = 6;
                                            const half = Math.floor(maxDots / 2);

                                            let start = Math.max(0, currentIndex1 - half);
                                            let end = Math.min(total, start + maxDots);

                                            if (end - start < maxDots) {
                                                start = Math.max(0, end - maxDots);
                                            }

                                            if (index >= start && index < end) {
                                                return (
                                                <span
                                                    key={index}
                                                    className={`lg:h-3 lg:w-3 h-2 w-2 rounded-full cursor-pointer transition-all ${
                                                    index === currentIndex1 ? 'bg-blue-500' : 'bg-white border border-blue-500'
                                                    }`}
                                                    onClick={() => setCurrentIndex1(index)}
                                                    aria-label={`Go to image ${index + 1}`}
                                                />
                                                );
                                            }

                                            return null;
                                            })}

                                            {/* Trailing Ellipsis */}
                                            {currentIndex1 < images1.length - 3 && (
                                            <span className="text-gray-400 px-1 select-none">…</span>
                                            )}
                                        </div>
                                        <button onClick={handleNext1} className="text-blue-400 p-2">
                                            <MdArrowForwardIos />
                                        </button>
                                    </div>
                                </div>,
                                <div className="text-center">
                                    <img
                                        src={images2[currentIndex2]}
                                        alt={`Project Image ${currentIndex2 + 1}`}
                                        className="mx-auto lg:h-96 rounded-md"
                                    />
                                    <div className="flex items-center justify-center mt-4 space-x-4">
                                        <button onClick={handlePrev2} className="text-blue-400 p-2">
                                            <MdArrowBackIos />
                                        </button>

                                        <div className="flex justify-center items-center space-x-2">
                                            {/* Leading Ellipsis */}
                                            {currentIndex2 > 2 && (
                                            <span className="text-gray-400 px-1 select-none">…</span>
                                            )}

                                            {images2.map((_, index) => {
                                            const total = images2.length;
                                            const maxDots = 6;
                                            const half = Math.floor(maxDots / 2);

                                            let start = Math.max(0, currentIndex1 - half);
                                            let end = Math.min(total, start + maxDots);

                                            if (end - start < maxDots) {
                                                start = Math.max(0, end - maxDots);
                                            }

                                            if (index >= start && index < end) {
                                                return (
                                                <span
                                                    key={index}
                                                    className={`lg:h-3 lg:w-3 h-2 w-2 rounded-full cursor-pointer transition-all ${
                                                    index === currentIndex2 ? 'bg-blue-500' : 'bg-white border border-blue-500'
                                                    }`}
                                                    onClick={() => setCurrentIndex2(index)}
                                                    aria-label={`Go to image ${index + 1}`}
                                                />
                                                );
                                            }

                                            return null;
                                            })}

                                            {/* Trailing Ellipsis */}
                                            {currentIndex2 < images2.length - 3 && (
                                            <span className="text-gray-400 px-1 select-none">…</span>
                                            )}
                                        </div>
                                        <button onClick={handleNext2} className="text-blue-400 p-2">
                                            <MdArrowForwardIos />
                                        </button>
                                    </div>
                                </div>,
                                <div className="text-center">
                                    <img
                                        src={images3[currentIndex3]}
                                        alt={`Project Image ${currentIndex3 + 1}`}
                                        className="mx-auto lg:h-96 rounded-md"
                                    />
                                    <div className="flex items-center justify-center mt-4 space-x-4">
                                        <button onClick={handlePrev3} className="text-blue-400 p-2">
                                            <MdArrowBackIos />
                                        </button>

                                        <div className="flex justify-center items-center space-x-2">
                                            {/* Leading Ellipsis */}
                                            {currentIndex3 > 2 && (
                                            <span className="text-gray-400 px-1 select-none">…</span>
                                            )}

                                            {images1.map((_, index) => {
                                            const total = images3.length;
                                            const maxDots = 6;
                                            const half = Math.floor(maxDots / 2);

                                            let start = Math.max(0, currentIndex3 - half);
                                            let end = Math.min(total, start + maxDots);

                                            if (end - start < maxDots) {
                                                start = Math.max(0, end - maxDots);
                                            }

                                            if (index >= start && index < end) {
                                                return (
                                                <span
                                                    key={index}
                                                    className={`lg:h-3 lg:w-3 h-2 w-2 rounded-full cursor-pointer transition-all ${
                                                    index === currentIndex3 ? 'bg-blue-500' : 'bg-white border border-blue-500'
                                                    }`}
                                                    onClick={() => setCurrentIndex3(index)}
                                                    aria-label={`Go to image ${index + 1}`}
                                                />
                                                );
                                            }

                                            return null;
                                            })}

                                            {/* Trailing Ellipsis */}
                                            {currentIndex3 < images3.length - 3 && (
                                            <span className="text-gray-400 px-1 select-none">…</span>
                                            )}
                                        </div>
                                        <button onClick={handleNext3} className="text-blue-400 p-2">
                                            <MdArrowForwardIos />
                                        </button>
                                    </div>
                                </div>,
                                <div className="text-center">
                                    <img
                                        src={images4[currentIndex4]}
                                        alt={`Project Image ${currentIndex4 + 1}`}
                                        className="mx-auto lg:h-96 rounded-md"
                                    />
                                    <div className="flex items-center justify-center mt-4">
                                        <button onClick={handlePrev4} className="text-blue-400 p-2">
                                            <MdArrowBackIos />
                                        </button>
                                        <div className="flex justify-center space-x-2">
                                            {images4.map((_, index) => (
                                            <span
                                                key={index}
                                                className={`lg:h-3 lg:w-3 h-2 w-2 rounded-full cursor-pointer ${
                                                index === currentIndex4 ? 'bg-blue-500' : 'bg-white'
                                                }`}
                                                onClick={() => setCurrentIndex4(index)}
                                                aria-label={`Go to image ${index + 1}`}
                                            />
                                            ))}
                                        </div>
                                        <button onClick={handleNext4} className="text-blue-400 p-2">
                                            <MdArrowForwardIos />
                                        </button>
                                    </div>
                                </div>,
                                <div className="text-center">
                                    <img
                                        src={images5[currentIndex5]}
                                        alt={`Project Image ${currentIndex5 + 1}`}
                                        className="mx-auto lg:h-96 rounded-md"
                                    />
                                    <div className="flex items-center justify-center mt-4">
                                        <button onClick={handlePrev5} className="text-blue-400 p-2">
                                            <MdArrowBackIos />
                                        </button>
                                        <div className="flex justify-center space-x-2">
                                            {images5.map((_, index) => (
                                            <span
                                                key={index}
                                                className={`lg:h-3 lg:w-3 h-2 w-2 rounded-full cursor-pointer ${
                                                index === currentIndex5 ? 'bg-blue-500' : 'bg-white'
                                                }`}
                                                onClick={() => setCurrentIndex5(index)}
                                                aria-label={`Go to image ${index + 1}`}
                                            />
                                            ))}
                                        </div>
                                        <button onClick={handleNext5} className="text-blue-400 p-2">
                                            <MdArrowForwardIos />
                                        </button>
                                    </div>
                                </div>,
                            ][openModalIndex]
                            }

                        </div>
                        <h2 className="text-2xl font-bold text-blue-600 mb-4"style={{ fontFamily: "'Rowdies', sans-serif" }}>
                            {[
                            "Helmet Vendo Machine",
                            "E-commerce Website",
                            "ChatHub",
                            "GrowGreen",
                            "StatusHub",
                            "Resort Booking System"
                            ][openModalIndex]}
                        </h2>
                        <p className="text-white text-justify " style={{fontFamily: "'Atkinson Hyperlegible', sans-serif"}}>
                            {[
                            "This is our thesis project, an innovative enhancement of the traditional helmet vendo machine. Instead of just dispensing helmets, we developed a system that goes beyond — it features automated cleaning, sanitizing, and drying mechanisms for the helmets. This innovation promotes hygiene, safety, and convenience for motorcycle riders.",
                            "This is a website I developed during my OJT/Internship. It is an online store dedicated to selling colognes and perfumes. I handled the frontend development process, focusing on product presentation, clean design, and a smooth user experience. The project allowed me to apply what I’ve learned in a real-world setting and enhanced my skills in web development and e-commerce design.",
                            "This chat application is one of my personal projects, which I built completely from scratch to practice and improve my programming skills—particularly in real-time communication, full-stack web development, and user interface design. I developed it to sharpen my ability to build complete web applications from front to back. I used technologies such as React for the frontend, Node.js for the backend, and MySQL for data storage to implement features like live messaging, user authentication, and a fully responsive design.",
                            "In this project, I collaborated with my groupmates and contributed to improving and refining the Figma design to ensure a clean, user-friendly interface.",
                            "This is another personal project where users can post, edit, and delete their own statuses, as well as view posts from other users. I built this to further enhance my skills in full-stack development and UI design. I used React.js for the frontend, Node.js for the backend, and Firebase for data storage.",
                            "This Resort Booking System was a project I developed during my second year in college. The main goal of the system was to allow users to book resort accommodations efficiently while helping resort staff manage reservations, room availability, and customer records. I used Apache NetBeans as my Integrated Development Environment (IDE) and Java as the main programming language. The system features a user-friendly interface, booking form, and basic database operations such as adding, updating, and deleting records. This project helped me understand the fundamentals of object-oriented programming, GUI development in Java, and basic database integration, which laid a strong foundation for my future development skills."
                            ][openModalIndex]}
                        </p>
                    </div>
                </div>
            )}
    </div>

  );
}

export default Thirdpage;

