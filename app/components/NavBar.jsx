"use client";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-cyan-800 sm:flex sm:justify-between ">
      <div className="flex items-center justify-between px-4 py-3">
        <div className="text-gray-200 font-bold">Feed Me!</div>
        <div className="sm:hidden">
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="block text-gray-200 active:text-gray-400 hover:text-gray-400"
          >
            {isOpen ? (
              <FontAwesomeIcon icon={faX} className="h-6 w-6" />
            ) : (
              <FontAwesomeIcon icon={faBars} className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>
      <div className={`${isOpen ? "block" : "hidden"} sm:flex `}>
        <a
          className="block text-gray-200 font-semibold rounded hover:bg-cyan-700 px-4 py-3 sm:mx-2"
          href="#"
        >
          Cuisines
        </a>
        <a
          className="block text-gray-200 font-semibold rounded hover:bg-cyan-700 px-4 py-3 sm:mx-2"
          href="#"
        >
          Ingredients
        </a>
      </div>
    </header>
  );
};

export default NavBar;
