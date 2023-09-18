import React, { useState } from 'react';
import logo from '../../assets/GDSC-LOGO.png';
import mitLogo from '../../assets/mitadtlogo.png';
import { Link } from 'react-scroll';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header p-20">
      <div className="nav bg-opacity-100 bg-transparent w-88vw h-4vw rounded-2xl ml-3vw flex items-center relative">
        <div className="nav-first flex items-center w-22vw ">
          <img src={logo} width={100} alt="" />
        </div>
        <button
          className="md:hidden absolute right-0 top-0 m-2"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`h-6 w-6 ${menuOpen ? 'hidden' : 'block'}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        {menuOpen && (
          <div className="nav-dropdown absolute bg-white bg-opacity-70 top-0 right-0 mt-0 p-4 rounded-lg shadow-md">
            <button
              className="md:hidden absolute right-2 top-2"
              onClick={toggleMenu}
              aria-label="Close Menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-6 w-6`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <div className="flex flex-col space-y-2 cursor-pointer text-2xl text-gray-500">
              <Link
                to="aboutus"
                className="hover:text-blue-500 text-center"
                onClick={toggleMenu}
              >
                <span>About Us</span>
              </Link>
              <Link
                to="#tech"
                className="hover:text-blue-500 text-center"
                onClick={toggleMenu}
              >
                <span>Technologies</span>
              </Link>
              <Link
                to="ourteam"
                className="hover:text-blue-500 text-center"
                onClick={toggleMenu}
              >
                <span>Team</span>
              </Link>
              <Link
                to="events"
                className="hover:text-blue-500 text-center"
                onClick={toggleMenu}
              >
                <span>Our Events</span>
              </Link>
              <Link
                to="contact"
                className="hover:text-blue-500 text-center"
                onClick={toggleMenu}
              >
                <span>Contact Us</span>
              </Link>
            </div>
          </div>
        )}
        <div className="flex-grow"></div> {/* Added to center the spans */}
        <div className="nav-web  space-x-4 ml-4 hidden mf:flex md:flex md:gap-14 items-center cursor-pointer text-2xl text-gray-500">
          <Link to="aboutus" className="hover:text-blue-500 text-center">
            <span>About Us</span>
          </Link>
          <Link to="#tech" className="hover:text-blue-500 text-center">
            <span>Technologies</span>
          </Link>
          <Link to="ourteam" className="hover:text-blue-500 text-center">
            <span>Team</span>
          </Link>
          <Link to="events" className="hover:text-blue-500 text-center">
            <span>Our Events</span>
          </Link>
          <Link to="contact" className="hover:text-blue-500 text-center">
            <span>Contact Us</span>
          </Link>
        </div>
        <div className="flex-grow"></div> {/* Added to center the spans */}
        <img
          className={`mit h-4.5vw ml-2vw mr-4 hidden md:block`}
          src={mitLogo}
          width={100}
          alt=""
        />
      </div>
    </header>
  );
}

export default Header;