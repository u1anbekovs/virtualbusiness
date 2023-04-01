import React from 'react';
import {FaTelegramPlane} from "react-icons/fa"


const Latest = () => {
    return (
        <section>
            <div className="container">
                <div className="mt-32 bg-gray-800 bg-opacity-30 border border-gray-700 p-6 px-16 rounded-3xl text-center">
                    <h1 className="text-4xl text-white">Subscribe to get the Latest News</h1>
                    <p className="text-white mt-5 mb-10 opacity-70">We recommended you to subscribe to our
                        newspaper,drop your email below to get daily update about us</p>
                    <div>
                        <label htmlFor="default-search"
                               className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none"
                                     stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                                </svg>
                            </div>
                            <input type="search" id="default-search"
                                   className="block w-full p-5 pl-10 text-sm text-gray-900 border border-gray-300 rounded-3xl bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                   placeholder="Enter your email addres" required/>
                            <button type="submit"
                                    className="flex items-center text-white absolute right-2.5 bottom-2.5 bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-3xl text-sm px-7 py-3 text-center">
                                <FaTelegramPlane className="mr-3"/>Subscribe
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Latest;