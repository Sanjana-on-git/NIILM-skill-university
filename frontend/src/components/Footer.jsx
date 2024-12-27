import { Link } from "react-router-dom";
import { footer } from "../data/footer";
import {
  FaPhoneAlt,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaLinkedin,
} from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";

const Footer = () => {
  return (
    <footer className="bg-[#165d23] text-white h-auto">
      <div className="flex flex-col justify-between py-20 space-y-8 lg:flex-row lg:space-y-0">
        <div className="lg:w-1/6">
          <Link
            to="/"
            className="flex justify-center space-x-3 lg:justify-start"
          >
            <div className="flex flex-col justify-center rounded-full items-start">
              <img src="/images/footer-logo-new-niilm.png" alt="Footer Logo" />
              <span className="self-center text-md mt-4 leading-10 w-full md:w-4/5 md:ml-auto">
                At NIILM University, we embrace the fast-paced changes of the
                21st century.
              </span>
            </div>
          </Link>
        </div>

        <div className="flex flex-wrap justify-between lg:w-3/4 ml-4 md:ml-0">
          {footer[0] &&
            Object.keys(footer[0]).map((section) => (
              <div
                key={section}
                className="flex flex-col space-y-3 mb-8 md:mb-0 w-1/2 md:w-1/4 lg:w-1/5"
              >
                <h3 className="tracking-wide font-bold text-2xl mb-4">
                  {section}
                </h3>
                <ul className="space-y-4">
                  {footer[0][section].map((link, index) => (
                    <li key={index} className="w-4/5">
                      <Link to={link.link}>{link.title}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
        </div>
      </div>

      <div className="py-4 text-sm text-center w-full flex flex-col md:flex-row items-center border-2 border-l-transparent border-r-transparent border-t-white border-b-white">
        <div className="w-full md:w-1/4 ">
          <div className="m-2 flex md:border-none border-2 border-t-transparent border-r-transparent border-b-transparent border-l-white">
            <div className="w-15 h-15 border-2 rounded-full flex justify-center items-center m-auto">
              <FaPhoneAlt className="w-6 h-6" />
            </div>
            <div className="w-3/4 flex flex-col items-start ml-6">
              <p className="text-lg">PHONE:</p>
              <p className="text-xl font-bold">09991119534</p>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/4">
          <div className="m-2 flex border-2 border-t-transparent border-r-transparent border-b-transparent border-l-white">
            <div className="w-15 h-15 border-2 rounded-full flex justify-center items-center m-auto">
              <IoMdMail className="w-6 h-6" />
            </div>
            <div className="w-3/4 flex flex-col items-start ml-6 ">
              <p className="text-lg">EMAIL:</p>
              <p className="text-xl font-bold ">info@niilmuniversity.ac.in</p>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/4">
          <div className="m-2 flex border-2 border-t-transparent border-r-transparent border-b-transparent border-l-white">
            <div className="w-15 h-15 border-2 rounded-full flex justify-center items-center m-auto ">
              <IoLocationSharp className="w-6 h-6" />
            </div>
            <div className="w-3/4 flex flex-col items-start ml-6">
              <p className="text-lg">LOCATION</p>
              <p className="text-xl font-bold">Haryana, India</p>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/4">
          <div className="m-2 flex border-2 border-t-transparent border-r-transparent border-b-transparent border-l-white">
            <div className="w-3/4 flex flex-col items-start ml-6">
              <p className="text-xl">Follow us on</p>
              <div className="w-full flex">
                <div className="w-10 h-10 rounded-full flex justify-center items-center bg-transparent border-2 text-white">
                  <FaFacebookF className="w-4 h-4" />
                </div>
                <div className="w-10 h-10 rounded-full flex justify-center items-center ml-4 bg-transparent border-2 text-white">
                  <FaInstagram className="w-4 h-4" />
                </div>
                <div className="w-10 h-10 rounded-full flex justify-center items-center ml-4 bg-transparent border-2 text-white">
                  <FaYoutube className="w-4 h-4" />
                </div>
                <div className="w-10 h-10 rounded-full flex justify-center items-center ml-4 bg-transparent border-2 text-white">
                  <FaLinkedin className="w-4 h-4" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-6 text-sm text-center">
        Copyrights © 2024 NIILM UNIVERSITY. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
