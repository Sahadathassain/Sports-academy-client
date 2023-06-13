
import {
    FaInstagramSquare,
    FaTwitterSquare,
    FaLinkedin,
    FaFacebook,
} from "react-icons/fa";

const Footer = () => {
    return (
        <div>
            <div>
                <footer className="footer p-10  bg-yellow-500 text-base-content w-full">
                    <div className="justify-center items-center">
                        <img
                            className="w-12 h-12 rounded-lg ml-12 items-center"
                            src="https://img.freepik.com/premium-vector/sports-academy-logo-illustration_288067-677.jpg"
                            alt=""
                        />
                        <p className=" text-1xl">Sports Academy<br />Providing reliable tech since 2022</p>
                    </div>

                    <div className="mt-4">
                        <span className="footer-title">Follow Us</span>
                        <div className="flex justify-center mt-3">
                            <a href="https://www.linkedin.com/">
                                <FaLinkedin className="mr-4 h-8 w-8" />
                            </a>
                            <a href="https://www.facebook.com/">
                                <FaFacebook className="mr-4 h-8 w-8" />
                            </a>
                            <a href="https://twitter.com/">
                                <FaTwitterSquare className="mr-4 h-8 w-8" />
                            </a>
                            <a href="https://www.instagram.com/">
                                <FaInstagramSquare className="mr-4 h-8 w-8" />
                            </a>
                        </div>
                    </div>

                    <div className="mt-4">
                        <span className="footer-title">Company</span>
                        <a className="link link-hover block mt-2">About Us</a>
                        <a className="link link-hover block mt-2">Contact</a>
                        <a className="link link-hover block mt-2">Jobs</a>
                        <a className="link link-hover block mt-2">Press Kit</a>
                    </div>

                    <div className="mt-4">
                        <span className="footer-title">Contact Us</span>
                        <form>
                            <div className="text-black mt-2">
                                <input
                                    type="email"
                                    className="form-control w-full"
                                    placeholder="Enter your email"
                                />
                            </div>
                            <button
                                type="submit"
                                className="btn btn-block text-xl mt-4  bg-yellow-500 hover:bg-stone-900 text-white font-semibold rounded focus:outline-none focus:ring-2 focus:ring-pink-500"
                            >
                                Subscribe
                            </button>
                        </form>
                    </div>

                </footer>
                <div className="">
                    <div className="  bg-yellow-500 text-center p-3 ">
                        <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Footer;
