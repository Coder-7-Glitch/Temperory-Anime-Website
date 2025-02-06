import React, { useRef, useState, useEffect } from "react";
import { FaRegBookmark } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";

const genres = [
  "Adventure",
  "Most Popular",
  "Comedy",
  "Romance",
  "Action",
  "Movies",
  "Latest Shows",
];

const Navbar = () => {
  // const [first, setfirst] = useState(second)
  const [isOpen, setIsOpen] = useState(false);
  const [showNav, setShowNav] = useState(true);
  const mNav = useRef();
  const dropdownRef = useRef();

  const toggleNav = () => {
    setShowNav(!showNav);
    if (showNav === true) {
      mNav.current.style.left = "0px";
    } else {
      mNav.current.style.left = "-800px";
    }
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        closeDropdown();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className=" bg-zinc-800 text-zinc-200 h-[70px]">
      <div className="h-full flex gap-8 items-center px-4 sm:px-7 md:px-9 lg:px-14 max-w-7xl mx-auto justify-between">
        <div className="lg:hidden">
          <button className="" onClick={toggleNav}>
            {showNav ? <FaBars size={23} /> : <AiOutlineClose size={23} />}
          </button>
        </div>
        <Link to={'/'} className=" me-auto lg:me-0  flex gap-2 justify-center items-center h-full">
          <img src="logo.svg" className="w-8" alt="LOGO" />
          <h3 className="font-K2D text-2xl text-primary hidden sm:block">
            AnimeSaga
          </h3>
        </Link>
        <ul className="hidden lg:flex gap-5 me-auto">
          <li className="font-medium text-[17px]">
            <Link to={"/"}>Home</Link>
          </li>
          <li className="font-medium text-[17px]">
            <Link to={"/about"}>About</Link>
          </li>
          <li className="font-medium text-[17px]">
            <Link to={"/latest-anime"}>Latest Anime</Link>
          </li>
          <li>
            <div ref={dropdownRef} className="relative inline-block text-left">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-2 font-medium text-[17px] rounded-md focus:outline-none"
              >
                Browse
                <svg
                  className={`h-4 w-4 transition-transform ${
                    isOpen ? "rotate-180" : "rotate-0"
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={3}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {isOpen && (
                <div className="absolute left-0 z-10 mt-2 w-48 rounded-md bg-zinc-900 shadow-lg ring-1 ring-black ring-opacity-5">
                  <ul className="py-1 text-[15px] text-zinc-200">
                    {genres.map((genre) => (
                      <li
                        key={genre}
                        className="px-4 py-2 cursor-pointer hover:bg-zinc-800"
                        onClick={closeDropdown}
                      >
                        {genre}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </li>
          <li className="font-medium text-[17px]">News</li>
        </ul>
        <ul
          ref={mNav}
          className="transition-all duration-300 py-10 flex flex-col lg:hidden gap-5 me-auto absolute top-[70px] h-[100vh] left-[-800px] w-full sm:w-[320px] bg-zinc-900"
        >
          <li className="font-medium text-[17px] px-5 py-3 w-full active:bg-zinc-800">
            Home
          </li>
          <li className="font-medium text-[17px] px-5 py-3 w-full active:bg-zinc-800">
            About
          </li>
          <li className="font-medium text-[17px] px-5 py-3 w-full active:bg-zinc-800">
            New Anime
          </li>
          <li className="font-medium text-[17px] px-5 py-3 w-full active:bg-zinc-800">
            News
          </li>
          <li>
            <div className="relative inline-block text-left px-5 py-3 w-full active:bg-zinc-800">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex w-full justify-between items-center gap-2 font-medium text-[17px] rounded-md focus:outline-none"
              >
                Browse
                <svg
                  className={`h-4 w-4 transition-transform ${
                    isOpen ? "rotate-180" : "rotate-0"
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={3}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {isOpen && (
                <div className="absolute left-0 z-10 mt-2 w-full bg-zinc-800 shadow-lg ring-1 ring-black ring-opacity-5">
                  <ul className="py-1 text-zinc-200 font-medium text-[15px]">
                    {genres.map((genre) => (
                      <li
                        key={genre}
                        className="px-6 py-2 cursor-pointer hover:bg-gray-100 active:hover:bg-zinc-900"
                        onClick={closeDropdown}
                      >
                        {genre}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </li>
        </ul>
        <div className="flex items-center gap-8">
          <button>
            <FaRegBookmark size={23} />
          </button>
          <button>
            <FaSearch size={23} />
          </button>
          <div className="">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxab9jxz02-uLgwXZ06IA9HMu64E2XOf_fBw&s"
              className="w-10 rounded-full"
              alt="USER_IMG"
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
