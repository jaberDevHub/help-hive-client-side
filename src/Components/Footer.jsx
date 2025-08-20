// import React from 'react';
// import { Link } from 'react-router-dom';
// import Logo from '../assets/images/footer-logo.png';
// import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
// const Footer = () => {
//     return (
//         <div>
//             <footer className="footer sm:footer-horizontal bg-neutral text-neutral-content p-10">
//                 {/* Logo & Info */}
//                 <aside>
//                     <img src={Logo} alt="" />
//                     <h1 className="mb-2 text-xl font-bold">Connect Through Community Events</h1>
//                     <p className="mb-5">
//                         Join hands to clean, plant, donate, and build a better society. <br /> Explore  upcoming events,
//                         volunteer opportunities, <br /> and create your own impact!
//                     </p>
//                 </aside>

//                 {/* Navigation - Quick Links */}
//                 <nav>
//                     <h6 className="footer-title text-xl mb-2 ">Quick Links</h6>
//                     <ul>
//                         <li><Link className="link link-hover" to="/">Home</Link></li>
//                         <li><Link className="link link-hover" to="/events">Upcoming Events</Link></li>
//                     </ul>
//                 </nav>

//                 {/* Navigation - Resources */}
//                 <nav>
//                     <h6 className="footer-title text-xl mb-2 ">Resources</h6>
//                     <a className="link link-hover" href="/blog">Blog</a>
//                     <a className="link link-hover" href="/resume.pdf" target="_blank" rel="noopener noreferrer">Download Resume</a>
//                     <a className="link link-hover" href="/terms">Terms & Conditions</a>
//                     <a className="link link-hover" href="/privacy">Privacy Policy</a>
//                 </nav>

//                 {/* Social Media Links */}
//                 <nav>
//                     <h6 className="footer-title text-xl mb-2 ">Follow Me</h6>
//                     <div className="grid grid-flow-col gap-6">
                      
//                             <FaFacebook className='text-2xl' />
//                             <FaInstagram className='text-2xl' />
//                             <FaTwitter className='text-2xl' />
                        
//                     </div>
//                 </nav>
//             </footer>
//         </div>
//     );
// };

// export default Footer;




import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/images/footer-logo.png';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-zinc-950 text-zinc-300 py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
                {/* Brand Section */}
                <div className="flex flex-col items-start">
                    <Link to="/" className="mb-6 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-zinc-600 rounded">
                        <img src={Logo} alt="Company Logo" className="h-12 w-auto object-contain" />
                    </Link>
                    <h2 className="text-xl font-semibold text-zinc-100 mb-2">Connect Through Community Events</h2>
                    <p className="text-sm text-zinc-400 max-w-sm">
                        Join hands to clean, plant, donate, and build a better society. Explore upcoming events, volunteer opportunities, and create your own impact!
                    </p>
                </div>

                {/* Navigation - Quick Links */}
                <div>
                    <h3 className="text-lg font-semibold text-zinc-100 mb-6">Quick Links</h3>
                    <ul className="space-y-4">
                        <li>
                            <Link className="text-sm text-zinc-400 hover:text-zinc-100 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-zinc-600 rounded" to="/">Home</Link>
                        </li>
                        <li>
                            <Link className="text-sm text-zinc-400 hover:text-zinc-100 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-zinc-600 rounded" to="/events">Upcoming Events</Link>
                        </li>
                        <li>
                            <Link className="text-sm text-zinc-400 hover:text-zinc-100 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-zinc-600 rounded" to="/about">About Us</Link>
                        </li>
                    </ul>
                </div>

                {/* Navigation - Resources */}
                <div>
                    <h3 className="text-lg font-semibold text-zinc-100 mb-6">Resources</h3>
                    <ul className="space-y-4">
                        <li>
                            <Link className="text-sm text-zinc-400 hover:text-zinc-100 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-zinc-600 rounded" to="/blog">Blog</Link>
                        </li>
                        <li>
                            <a className="text-sm text-zinc-400 hover:text-zinc-100 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-zinc-600 rounded" href="/resume.pdf" target="_blank" rel="noopener noreferrer">Download Resume</a>
                        </li>
                        <li>
                            <Link className="text-sm text-zinc-400 hover:text-zinc-100 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-600 rounded" to="/terms">Terms & Conditions</Link>
                        </li>
                        <li>
                            <Link className="text-sm text-zinc-400 hover:text-zinc-100 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-600 rounded" to="/privacy">Privacy Policy</Link>
                        </li>
                    </ul>
                </div>

                {/* Social Media Links */}
                <div>
                    <h3 className="text-lg  font-semibold text-zinc-100 mb-6">Follow Me</h3>
                    <div className="flex gap-4 space-x-6">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-zinc-400 hover:text-zinc-100 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-zinc-600 rounded-full p-1 -m-1">
                            <FaFacebook className="text-2xl" />
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-zinc-400 hover:text-zinc-100 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-zinc-600 rounded-full p-1 -m-1">
                            <FaInstagram className="text-2xl" />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="text-zinc-400 hover:text-zinc-100 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-zinc-600 rounded-full p-1 -m-1">
                            <FaTwitter className="text-2xl" />
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-zinc-400 hover:text-zinc-100 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-zinc-600 rounded-full p-1 -m-1">
                            <FaLinkedinIn className="text-2xl" />
                        </a>
                    </div>
                </div>
            </div>

            {/* Copyright Section */}
            <div className="mt-16 pt-8 border-t border-zinc-800 text-center">
                <p className="text-xs text-zinc-500">
                    © {new Date().getFullYear()} Your Company Name. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;