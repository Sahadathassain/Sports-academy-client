import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import {  FaInstagram, FaFacebookSquare } from 'react-icons/fa';
import {  FiLinkedin } from 'react-icons/fi';
import {AiFillTwitterCircle  } from 'react-icons/ai';


const ContactForm = () => {
    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <section className="text-gray-600 container body-font relative">
            <div className=" px-5 py-24 mx-auto">
                <div className="flex flex-col text-center w-full mb-12" data-aos="fade-up">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Contact Us</h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify.</p>
                </div>
                <div className="lg:w-1/2 md:w-2/3 mx-auto">
                    <div className="flex flex-wrap -m-2">
                        <div className="p-2 w-1/2">
                            <div className="relative">
                                <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label>
                                <input type="text" id="name" name="name" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>
                        </div>
                        <div className="p-2 w-1/2">
                            <div className="relative">
                                <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
                                <input type="email" id="email" name="email" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>
                        </div>
                        <div className="p-2 w-full">
                            <div className="relative">
                                <label htmlFor="message" className="leading-7 text-sm text-gray-600">Message</label>
                                <textarea id="message" name="message" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out" />
                            </div>
                        </div>
                        <div className="p-2 w-full">
                            <button className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Contact</button>
                        </div>
                        <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
                            <a className="text-indigo-500">example@email.com</a>
                            <p className="leading-normal my-5">49 Smith St.
                                <br />Saint Cloud, MN 56301
                            </p>
                            <span className="inline-flex">
                                <a className="text-gray-500">
                                    <AiFillTwitterCircle className="w-5 h-5" />
                                </a>
                                <a className="ml-4 text-gray-500">
                                    <FaFacebookSquare className="w-5 h-5" />
                                </a>
                                <a className="ml-4 text-gray-500">
                                    <FaInstagram className="w-5 h-5" />
                                </a>
                                <a className="ml-4 text-gray-500">
                                    <FiLinkedin className="w-5 h-5" />
                                </a>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactForm;
