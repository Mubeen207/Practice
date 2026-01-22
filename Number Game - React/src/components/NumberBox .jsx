import React from "react";

const NumberBox = ({ number, onPlayAgain }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center backdrop-blur-sm z-50">
      <div className="relative bg-white bg-opacity-90 shadow-lg rounded-md p-8 w-80 text-center">
        <svg
          onClick={onPlayAgain}
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 cursor-pointer text-gray-600 hover:text-gray-900 absolute top-3 right-3"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>

        <p className="text-xl font-semibold mb-4">Your number is</p>
        <p className="text-5xl font-bold text-green-600 mb-6">{number}</p>
        <button
          onClick={onPlayAgain}
          className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
        >
          Play Again
        </button>
      </div>
    </div>
  );
};

export default NumberBox;
