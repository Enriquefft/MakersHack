import React from 'react';

interface BookButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  onClick: () => void;
}

const BookButton: React.FC<BookButtonProps> = ({ onClick, ...rest }) => {
  return (
    <button
      className="flex items-center justify-center px-4 py-2 bg-blue-500 text-white rounded-md focus:outline-none"
      onClick={onClick}
      {...rest}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-6 h-6 mr-2"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
      </svg>
      Learn more
    </button>
  );
};

export default BookButton;