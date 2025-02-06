import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="text-gray-200 bg-[#2c2c2c] body-font mt-20">
        <div className="container px-5 py-12 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
          <div className="ps-10 w-72 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
            <Link
              to={"/"}
              className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900"
            >
              <svg
                width="30"
                height="30"
                viewBox="0 0 76 76"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M47.0052 9.40104C31.4375 9.40104 18.8021 22.026 18.8021 37.6042C18.8021 47.9896 27.224 56.4062 37.6042 56.4062C47.9896 56.4062 56.4063 47.9896 56.4115 37.6042C56.4115 30.6875 50.7969 25.0677 43.875 25.0677C36.9531 25.0677 31.3385 30.6875 31.3385 37.6042C31.3385 41.0677 34.1458 43.875 37.6042 43.875C41.0677 43.875 43.875 41.0677 43.875 37.6042H37.6042C37.6042 34.1406 40.4115 31.3385 43.875 31.3385C47.3333 31.3385 50.1406 34.1406 50.1406 37.6042C50.1406 44.5312 44.526 50.1406 37.6042 50.1406C30.6823 50.1406 25.0729 44.5312 25.0729 37.6042C25.0729 27.224 33.4896 18.8021 43.875 18.8021C54.2604 18.8021 62.6719 27.224 62.6771 37.6042C62.6719 51.4479 51.4531 62.6719 37.6042 62.6719C23.7604 62.6719 12.5365 51.4479 12.5365 37.6042C12.5365 18.5677 27.974 3.13542 47.0052 3.13542C49.474 3.13542 51.875 3.40104 54.1979 3.89583C49.1875 1.42708 43.5677 0 37.6042 0C16.8385 0 0 16.8385 0 37.6042C0 58.375 16.8385 75.2135 37.6042 75.2135C58.375 75.2135 75.2135 58.375 75.2135 37.6042C75.2135 36.6354 75.1406 35.6771 75.0677 34.724C73.6198 20.5 61.6146 9.40104 47.0052 9.40104Z"
                  fill="#ff640a"
                />
              </svg>
              <span className="ml-3 text-primary text-xl font-k2d">
                Anime Saga
              </span>
            </Link>
            <p className="mt-6 text-sm text-gray-300">
              We provide high-quality anime streaming with fast updates and a
              seamless experience.
            </p>
          </div>
          <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-primary tracking-widest text-[18px] mb-2">
                Pages
              </h2>
              <nav className="list-none mb-10">
                <li className="mt-1">
                  <Link
                    to={"/home"}
                    className="text-gray-400 hover:text-primary"
                  >
                    Home
                  </Link>
                </li>
                <li className="mt-1">
                  <Link
                    to={"/about"}
                    className="text-gray-400 hover:text-primary"
                  >
                    About us
                  </Link>
                </li>
                <li className="mt-1">
                  <Link
                    to={"/latest-anime"}
                    className="text-gray-400 hover:text-primary"
                  >
                    Latest Anime
                  </Link>
                </li>
                <li className="mt-1">
                  <Link
                    to={"/news"}
                    className="text-gray-400 hover:text-primary"
                  >
                    News
                  </Link>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-primary tracking-widest text-[18px] mb-2">
                Browse
              </h2>
              <nav className="list-none mb-10">
                <li className="mt-1">
                  <Link
                    to={"/action"}
                    className="text-gray-400 hover:text-primary"
                  >
                    Action & Adventure
                  </Link>
                </li>
                <li className="mt-1">
                  <Link
                    to={"/comedy"}
                    className="text-gray-400 hover:text-primary"
                  >
                    Comedy
                  </Link>
                </li>
                <li className="mt-1">
                  <Link
                    to={"/romance"}
                    className="text-gray-400 hover:text-primary"
                  >
                    Romance
                  </Link>
                </li>
                <li className="mt-1">
                  <Link
                    to={"/movies"}
                    className="text-gray-400 hover:text-primary"
                  >
                    Movies
                  </Link>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-primary tracking-widest text-[18px] mb-2">
                Account
              </h2>
              <nav className="list-none mb-10">
                <li className="mt-1">
                  <Link
                    to={"/watchlist"}
                    className="text-gray-400 hover:text-primary"
                  >
                    Watchlist
                  </Link>
                </li>
                <li className="mt-1">
                  <Link
                    to={"/history"}
                    className="text-gray-400 hover:text-primary"
                  >
                    History
                  </Link>
                </li>
                <li className="mt-1">
                  <Link
                    to={"/profile"}
                    className="text-gray-400 hover:text-primary"
                  >
                    My Profile
                  </Link>
                </li>
                <li className="mt-1">
                  <Link to={"/"} className="text-gray-400 hover:text-primary">
                    Log Out
                  </Link>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-primary tracking-widest text-[18px] mb-2">
                Contact us
              </h2>
              <nav className="list-none mb-10">
                <li className="mt-1">
                  <Link to={"/"} className="text-gray-400 hover:text-primary">
                    Twitter
                  </Link>
                </li>
                <li className="mt-1">
                  <Link
                    to={"/history"}
                    className="text-gray-400 hover:text-primary"
                  >
                    Youtube
                  </Link>
                </li>
                <li className="mt-1">
                  <Link
                    to={"/watchlist"}
                    className="text-gray-400 hover:text-primary"
                  >
                    Facbook
                  </Link>
                </li>
                <li className="mt-1">
                  <Link
                    to={"/profile"}
                    className="text-gray-400 hover:text-primary"
                  >
                    Instagram
                  </Link>
                </li>
              </nav>
            </div>
          </div>
        </div>
        <div className="bg-primary">
          <div className="container mx-auto py-4 px-5 text-center">
            <p className="text-black text-[16px] text-center font-medium">
              © Copyright 2025 Anime Saga. All rights reserved
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
