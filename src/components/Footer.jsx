import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaPinterest,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="relative">
      <div className="w-full dark:bg-gray-900 py-10 text-white">
        <div className="max-w-[1240px] mx-auto flex flex-col px-4 ">
          <div className="sm:flex text-center justify-between items-center">
            <h1>Parkit.</h1>
            <div className="flex justify-between w-full sm:max-w-[280px] my-4">
              <FaFacebook className="icon" />
              <FaTwitter className="icon" />
              <FaYoutube className="icon" />
              <FaPinterest className="icon" />
              <FaInstagram className="icon" />
            </div>
          </div>
          <div className="flex justify-between">
            <ul className="lg:flex ">
              <li className="pr-3">About</li>
              <li className="pr-3">Partnerships</li>
              <li className="pr-3">Careers</li>
              <li className="pr-3">Newsroom</li>
              <li className="pr-3">Advertising</li>
            </ul>
            <ul className="text-right lg:flex">
              <li className="pl-3">Home</li>
              <li className="pl-3">Destinations</li>
              <li className="pl-3">Travel</li>
              <li className="pl-3">View</li>
              <li className="pl-3">Book</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
