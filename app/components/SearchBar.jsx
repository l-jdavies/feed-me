import React from "react";

const SearchBar = () => {
  return (
    <form className="flex justify-center self-center">
      <input
        type="search"
        id="default-search"
        className="w-[80%] sm:w-[100%] sm:p-5 mx-2 placeholder:ml-5 sm:text-lg text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:border-gray-300 focus:ring-1 focus:ring-gray-300"
        placeholder="Search..."
        required
      />
      <button
        type="submit"
        className="mx-2 text-white bg-gray-600 hover:bg-gray-500 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg sm:text-lg text-sm px-4 py-2 "
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;
