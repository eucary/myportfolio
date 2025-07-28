import { BsInstagram, BsTelephoneFill } from "react-icons/bs";
import { FaFacebook, FaInstagramSquare, FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { MdMarkEmailUnread } from "react-icons/md";
import Footerbar from "./Footerbar";
import emailjs from 'emailjs-com';

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
    return (<>
        <div id="contact" className="w-full bg-zinc-800 p-8 pt-16">
            <div className="pl-20 pr-20 mt-8">
                <div className= ' flex flex-row items-center justify-center space-y-4 '>
                    <h1 className="text-4xl font-bold text-blue-500 border-white border-2 rounded-xl p-5" style={{ fontFamily: "'Rowdies', sans-serif", fontSize: '3rem' }}>Get in touch</h1>
                    <span className="inline-flex items-center ml-4 rounded-2xl flex-grow h-2 bg-gradient-to-r from-white via-neutral-700 to-neutral-400"></span>
                </div>
                <div className="w-full p-4 mt-8  grid grid-cols-2 gap-8">
                    <form onSubmit={sendEmail} className="flex flex-col items-start space-y-6 pr-10 pl-10 ">
                        <h2 className=" font-bold text-white opacity-70 " style={{ fontFamily: "'Atkinson Hyperlegible', sans-serif", fontSize: '1.5rem' }}>Connect with me by writing an email.</h2>
                        <div className="space-y-4">
                            <input name= "name"type="text" placeholder="Your Name" className=" p-3 w-full bg-neutral-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" style={{ fontFamily: "'Roboto flex', sans-serif" }} />
                            <input name="email" type="text" placeholder="Your Email" className=" p-3 w-full  bg-neutral-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" style={{ fontFamily: "'Roboto flex', sans-serif" }} />
                            <textarea name="message" placeholder="Your Message" className=" p-3 w-full  bg-neutral-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" style={{ fontFamily: "'Roboto flex', sans-serif" }} rows="6"></textarea>
                            <button className="px-6 py-3 bg-blue-900 text-white w-full font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300 ease-in-out transform hover:scale-105" style={{ fontFamily: "'Roboto flex', sans-serif" }}>Submit</button>
                        </div>
                    </form>
                    <div className="flex flex-col items-start space-y-6 pr-10 pl-10 ">
                        <h2 className=" font-bold text-white opacity-70 " style={{ fontFamily: "'Atkinson Hyperlegible', sans-serif", fontSize: '1.5rem' }}>Contact me.</h2>
                        <div className="space-y-4 ">
                            {[
                                { icon: <BsTelephoneFill />, text: '+63 951 503 5151' },
                                { icon: <MdMarkEmailUnread />, text: 'eucary21@gmail.com'},
                                { icon: <FaFacebook />, text: 'web.facebook.com/eucary.dupagan', href: 'https://web.facebook.com/eucary.dupagan' },
                                { icon: <BsInstagram />, text: 'www.instagram.com/eucstogo0/', href: 'https://www.instagram.com/eucstogo0/' },
                                { icon: <FaGithub />, text: 'github.com/eucary', href: 'https://github.com/eucary' },
                                { icon: <FaLinkedin />, text: 'www.linkedin.com/in/eucary-dupagan/', href: 'https://www.linkedin.com/in/eucary-dupagan/' },
                            ].map((item, index) => (
                                <div key={index} className="flex items-center space-x-4 group">
                                <div className="text-blue-500 text-3xl transition duration-300 ease-in-out transform group-hover:scale-105">
                                    {item.icon}
                                </div>
                                <a
                                    href={item.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-white opacity-70 text-lg hover:underline"
                                    style={{ fontFamily: "'Atkinson Hyperlegible', sans-serif" }}
                                >
                                    {item.text}
                                </a>
                                </div>
                            ))}
                        </div>

                    </div>
                </div>
            </div> 
        </div>
        <Footerbar />
    </>);
}

export default Lastpage;