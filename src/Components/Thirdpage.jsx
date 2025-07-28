import React, { useState, useEffect } from 'react';
import { FaReact } from 'react-icons/fa';
import { FaJava, FaNodeJs } from 'react-icons/fa6';
import { FiFigma } from 'react-icons/fi';
import { IoLogoCss3, IoLogoHtml5, IoLogoJavascript } from 'react-icons/io5';

import { MdArrowBackIos, MdArrowForwardIos } from 'react-icons/md';
import { SiArduino, SiFirebase, SiMysql, SiShadcnui, SiTailwindcss, SiTypescript, SiVite } from 'react-icons/si';

function Thirdpage() {

    const images = [
        '/thesis3.png','./src/assets/thesis/thesis4.png', './src/assets/thesis/thesis5.png', './src/assets/thesis/thesis6.png', './src/assets/thesis/thesis1.jpg', './src/assets/thesis/thesis2.png',];
    const images1 = [
        './src/assets/brulifepics/1.png', './src/assets/brulifepics/2.png', './src/assets/brulifepics/3.png', './src/assets/brulifepics/4.png', './src/assets/brulifepics/5.png', './src/assets/brulifepics/6.png', './src/assets/brulifepics/7.png', './src/assets/brulifepics/8.png','./src/assets/brulifepics/9.png', './src/assets/brulifepics/10.png', './src/assets/brulifepics/11.png', './src/assets/brulifepics/12.png', './src/assets/brulifepics/13.png', './src/assets/brulifepics/14.png', './src/assets/brulifepics/15.png', './src/assets/brulifepics/16.png'
    ]
    const images2 = [
        './src/assets/chatapp/1.png', './src/assets/chatapp/2.png', './src/assets/chatapp/3.png', './src/assets/chatapp/4.png', './src/assets/chatapp/5.png', './src/assets/chatapp/6.png', './src/assets/chatapp/7.png'
    ]
    const images3 = [
        './src/assets/figma/1.png', './src/assets/figma/2.png', './src/assets/figma/3.png', './src/assets/figma/4.png', './src/assets/figma/5.png', './src/assets/figma/6.png', './src/assets/figma/7.png', './src/assets/figma/8.png', './src/assets/figma/9.png', './src/assets/figma/10.png', './src/assets/figma/11.png', './src/assets/figma/12.png', './src/assets/figma/13.png', './src/assets/figma/14.png', './src/assets/figma/15.png', './src/assets/figma/16.png', './src/assets/figma/17.png', './src/assets/figma/18.png', './src/assets/figma/19.png', './src/assets/figma/20.png'
    ]
    const images4 = [
        './src/assets/statushub/1.png', './src/assets/statushub/2.png', './src/assets/statushub/3.png', './src/assets/statushub/4.png', './src/assets/statushub/5.png'
    ]
    const images5 = [
        './src/assets/booking/1.png', './src/assets/booking/2.png', './src/assets/booking/3.png', './src/assets/booking/4.png'
    ]

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
  return (
    <div id='projects' className=" bg-zinc-800 p-8 pt-24">
        <div className='pl-28 pr-28 '>
            <div className= ' flex flex-row items-center justify-center space-y-4 '>
                <h1 className="text-4xl font-bold text-blue-500 border-white border-2 rounded-xl p-5" style={{ fontFamily: "'Rowdies', sans-serif", fontSize: '3rem' }}>My projects</h1>
                <span className="inline-flex items-center ml-4 rounded-2xl flex-grow h-2 bg-gradient-to-r from-white via-neutral-700 to-neutral-400"></span>
            </div>
            <div className="grid grid-cols-2 gap-6 w-full  p-4  mt-8">
                <div className=" border-2 border-blue-500 rounded-lg shadow-lg hover:scale-105 hover:shadow-2xl transition-transform duration-300 hover:bg-neutral-700 hover-shadow-2xl hover:border-blue-400">
                    <div className="relative w-full p-4 ">
                        <img
                            src={images[currentIndex]}
                            alt={`Project Image ${currentIndex + 1}`}
                            className="mx-auto h-72 rounded-md"
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
                                    className={`h-3 w-3 rounded-full cursor-pointer ${
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
                        <div className=" flex items-center justify-center mt-4">
                            <button
                                onClick={handlePrev1}
                                className="   text-blue-400 p-2 "
                            >
                                <MdArrowBackIos/>
                            </button>
                            <div className="flex justify-center space-x-2 ">
                                {images1.map((_, index) => (
                                    <span
                                    key={index}
                                    className={`h-3 w-3 rounded-full cursor-pointer ${
                                        index === currentIndex1 ? 'bg-blue-500' : 'bg-white'
                                    }`}
                                    onClick={() => setCurrentIndex1(index)}
                                    aria-label={`Go to image ${index + 1}`}
                                    />
                                ))}
                            </div>
                            <button
                                onClick={handleNext1}
                                className="   text-blue-400 p-2  "
                            >
                                <MdArrowForwardIos/>
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
                        <div className=" flex items-center justify-center mt-4">
                            <button
                                onClick={handlePrev2}
                                className="   text-blue-400 p-2 "
                            >
                                <MdArrowBackIos/>
                            </button>
                            <div className="flex justify-center space-x-2 ">
                                {images2.map((_, index) => (
                                    <span
                                    key={index}
                                    className={`h-3 w-3 rounded-full cursor-pointer ${
                                        index === currentIndex2 ? 'bg-blue-500' : 'bg-white'
                                    }`}
                                    onClick={() => setCurrentIndex2(index)}
                                    aria-label={`Go to image ${index + 1}`}
                                    />
                                ))}
                            </div>
                            <button
                                onClick={handleNext2}
                                className="   text-blue-400 p-2  "
                            >
                                <MdArrowForwardIos/>
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
                        <div className=" flex items-center justify-center mt-4">
                            <button
                                onClick={handlePrev3}
                                className="   text-blue-400 p-2 "
                            >
                                <MdArrowBackIos/>
                            </button>
                            <div className="flex justify-center space-x-2 ">
                                {images3.map((_, index) => (
                                    <span
                                    key={index}
                                    className={`h-3 w-3 rounded-full cursor-pointer ${
                                        index === currentIndex3 ? 'bg-blue-500' : 'bg-white'
                                    }`}
                                    onClick={() => setCurrentIndex3(index)}
                                    aria-label={`Go to image ${index + 1}`}
                                    />
                                ))}
                            </div>
                            <button
                                onClick={handleNext3}
                                className="   text-blue-400 p-2  "
                            >
                                <MdArrowForwardIos/>
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
                                    className={`h-3 w-3 rounded-full cursor-pointer ${
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
                        <p className='text-m text-white opacity-75 text-justify' style={{fontFamily: "'Atkinson Hyperlegible', sans-serif"}}>This is also one of my personal projects — Status Hub, a platform where users can post, edit, and delete their own status updates, as well as view status posts from others. It highlights my skills in user interaction, CRUD functionality, and dynamic content handling..</p>
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
                                    className={`h-3 w-3 rounded-full cursor-pointer ${
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
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm">
                    <div className="bg-zinc-700 rounded-md shadow-lg p-6 w-1/2  relative max-h-[90vh] overflow-y-auto">
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
                                    <IoLogoJavascript className=' text-yellow-500 h-10 w-10'/>
                                    <SiArduino className=' text-white h-10 w-10'/>
                                    <IoLogoHtml5 className=' text-orange-600 h-10 w-10'/>
                                    <IoLogoCss3 className=' text-blue-500 h-10 w-10'/>
                                </div>,
                                <div className='flex-row flex gap-1'>
                                    <IoLogoJavascript className=' text-yellow-500 h-10 w-10'/>
                                    <IoLogoHtml5 className=' text-orange-600 h-10 w-10'/>
                                    <IoLogoCss3 className=' text-blue-500 h-10 w-10'/>
                                    <FaReact className=' text-blue-300 h-10 w-10'/>
                                    <FiFigma className=' text-black h-10 w-10'/>
                                    <SiTailwindcss className=' text-blue-400 h-10 w-10'/>
                                    <SiShadcnui className=' text-white h-10 w-10'/>
                                </div>,
                                <div className='flex-row flex gap-1'>
                                    <IoLogoJavascript className=' text-yellow-500 h-10 w-10'/>
                                    <IoLogoHtml5 className=' text-orange-600 h-10 w-10'/>
                                    <IoLogoCss3 className=' text-blue-500 h-10 w-10'/>
                                    <FaReact className=' text-blue-300 h-10 w-10'/>
                                    <SiVite className=' text-violet-400 h-10 w-10'/>
                                    <FiFigma className=' text-black h-10 w-10'/>
                                    <SiMysql className=' text-white h-10 w-10'/>
                                    <FaNodeJs className=' text-green-500 h-10 w-10'/>
                                    <SiTypescript className=' text-blue-600 h-10 w-10'/>
                                </div>,
                                <div className='flex-row flex gap-1'>
                                    <FiFigma className=' text-black h-10 w-10'/>
                                </div>,
                                <div className='flex-row flex gap-1'>
                                    <IoLogoJavascript className=' text-yellow-500 h-10 w-10'/>
                                    <IoLogoHtml5 className=' text-orange-600 h-10 w-10'/>
                                    <IoLogoCss3 className=' text-blue-500 h-10 w-10'/>
                                    <FaReact className=' text-blue-300 h-10 w-10'/>
                                    <SiVite className=' text-violet-400 h-10 w-10'/>
                                    <FiFigma className=' text-black h-10 w-10'/>
                                    <SiFirebase className=' text-orange-600 h-10 w-10'/>
                                    <FaNodeJs className=' text-green-500 h-10 w-10'/>
                                    <SiTypescript className=' text-blue-600 h-10 w-10'/>
                                </div>,
                                <div className='flex-row flex gap-1'>
                                    <FaJava className=' text-white h-10 w-10'/>
                                    
                                </div>,
                            ][openModalIndex]}
                        </div>
                        <div className="relative w-full p-2 ">
                            {[
                                <div className="text-center">
                                    <img
                                    src={images[currentIndex]}
                                    alt={`Project Image ${currentIndex + 1}`}
                                    className="mx-auto h-96 rounded-md"
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
                                        className="mx-auto h-96 rounded-md"
                                    />
                                    <div className="flex items-center justify-center mt-4">
                                        <button onClick={handlePrev1} className="text-blue-400 p-2">
                                            <MdArrowBackIos />
                                        </button>
                                        <div className="flex justify-center space-x-2">
                                            {images1.map((_, index) => (
                                            <span
                                                key={index}
                                                className={`h-3 w-3 rounded-full cursor-pointer ${
                                                index === currentIndex1 ? 'bg-blue-500' : 'bg-white'
                                                }`}
                                                onClick={() => setCurrentIndex1(index)}
                                                aria-label={`Go to image ${index + 1}`}
                                            />
                                            ))}
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
                                        className="mx-auto h-96 rounded-md"
                                    />
                                    <div className="flex items-center justify-center mt-4">
                                        <button onClick={handlePrev2} className="text-blue-400 p-2">
                                            <MdArrowBackIos />
                                        </button>
                                        <div className="flex justify-center space-x-2">
                                            {images2.map((_, index) => (
                                            <span
                                                key={index}
                                                className={`h-3 w-3 rounded-full cursor-pointer ${
                                                index === currentIndex2 ? 'bg-blue-500' : 'bg-white'
                                                }`}
                                                onClick={() => setCurrentIndex2(index)}
                                                aria-label={`Go to image ${index + 1}`}
                                            />
                                            ))}
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
                                        className="mx-auto h-96 rounded-md"
                                    />
                                    <div className="flex items-center justify-center mt-4">
                                        <button onClick={handlePrev3} className="text-blue-400 p-2">
                                            <MdArrowBackIos />
                                        </button>
                                        <div className="flex justify-center space-x-2">
                                            {images3.map((_, index) => (
                                            <span
                                                key={index}
                                                className={`h-3 w-3 rounded-full cursor-pointer ${
                                                index === currentIndex3 ? 'bg-blue-500' : 'bg-white'
                                                }`}
                                                onClick={() => setCurrentIndex3(index)}
                                                aria-label={`Go to image ${index + 1}`}
                                            />
                                            ))}
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
                                        className="mx-auto h-96 rounded-md"
                                    />
                                    <div className="flex items-center justify-center mt-4">
                                        <button onClick={handlePrev4} className="text-blue-400 p-2">
                                            <MdArrowBackIos />
                                        </button>
                                        <div className="flex justify-center space-x-2">
                                            {images4.map((_, index) => (
                                            <span
                                                key={index}
                                                className={`h-3 w-3 rounded-full cursor-pointer ${
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
                                        className="mx-auto h-96 rounded-md"
                                    />
                                    <div className="flex items-center justify-center mt-4">
                                        <button onClick={handlePrev5} className="text-blue-400 p-2">
                                            <MdArrowBackIos />
                                        </button>
                                        <div className="flex justify-center space-x-2">
                                            {images5.map((_, index) => (
                                            <span
                                                key={index}
                                                className={`h-3 w-3 rounded-full cursor-pointer ${
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

