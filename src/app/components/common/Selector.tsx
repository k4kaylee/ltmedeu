'use client';

import React, { FC, useState } from 'react';

interface SelectorProps {
    content: string;
    data: string[];
}

const Selector: FC<SelectorProps> = ({ content, data }) => {
    const [isActive, setIsActive] = useState<boolean>(false);
    const [value, setValue] = useState<string>(content);

    return (
        <div className="relative w-full">
            {/* Button */}
            <button
                className="w-full bg-white bg-opacity-20 placeholder-current px-8 py-4 rounded-xl flex justify-between items-center"
                onClick={() => setIsActive(!isActive)}
            >
                <p className="select-none">{value}</p>
                <svg
                    className={`transition-transform duration-150 ${isActive ? '-rotate-180' : ''}`}
                    width="16"
                    height="9"
                    viewBox="0 0 16 9"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M7.29289 8.70711C7.68342 9.09763 8.31658 9.09763 8.70711 8.70711L15.0711 2.34315C15.4616 1.95262 15.4616 1.31946 15.0711 0.928932C14.6805 0.538408 14.0474 0.538408 13.6569 0.928932L8 6.58579L2.34315 0.928932C1.95262 0.538408 1.31946 0.538408 0.928932 0.928932C0.538408 1.31946 0.538408 1.95262 0.928932 2.34315L7.29289 8.70711ZM7 7L7 8L9 8L9 7L7 7Z"
                        fill="white"
                    />
                </svg>
            </button>

            {/* Dropdown List */}
            <ul
                className={`absolute z-10 w-full left-0 transition-all duration-150 ease-in-out bg-white rounded-xl ${isActive ? 'max-h-48 overflow-y-auto pointer-events-auto' : 'max-h-0 overflow-hidden pointer-events-none'} top-full mt-4 shadow-lg text-[var(--accent)]`}
                tabIndex={isActive ? 0 : -1}
            >
                {data.map((item, index) => (
                    <li
                        key={index}
                        className="w-full px-4 py-2 cursor-pointer hover:bg-gray-200"
                        onClick={() => {
                            setValue(item);
                            setIsActive(false);
                        }}
                        tabIndex={isActive ? 0 : -1}
                    >
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Selector;
