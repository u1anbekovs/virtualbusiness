import React from 'react';
import imgVir from "./img/Saly-19.svg"
import {BsFillPlayCircleFill} from "react-icons/bs"

const Virtual = () => {
    return (
        <section>
            <div className="container">

                <div className="flex items-center justify-between">

                    <div>
                        <h1 className="text-6xl text-violet-500">Virtual Reality <br/> Business Solutions</h1>

                        <p className="text-white mt-12 mb-12 opacity-70">We have over 15 year exprience in business consultting
                            arena. We have over <br/> 15 year exprience in business consultting arena and artficial
                            intelligence.</p>

                        <div className="flex md:space-x-5">
                            <button type="button"
                                    className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-8 py-4 text-center">Join
                                Us
                            </button>

                            <button
                                className="flex items-center text-white hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-8 py-4 text-center">
                                <BsFillPlayCircleFill className="text-2xl mr-4"/>Watch video
                            </button>
                        </div>

                    </div>

                    <img src={imgVir} alt=""/>

                </div>
            </div>
        </section>
    );
};

export default Virtual;