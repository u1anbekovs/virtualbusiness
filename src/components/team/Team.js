import React from 'react';
import imgTea from "./img/Rectangle 56.svg"
import imgTea1 from "./img/Rectangle 56 (1).svg"
import imgTea2 from "./img/Rectangle 56 (2).svg"
import imgTea3 from "./img/Rectangle 56 (3).svg"
import {FaTelegramPlane} from "react-icons/fa"
import {AiFillInstagram} from "react-icons/ai"
import {GrTwitter} from "react-icons/gr"
import {FaFacebookF} from "react-icons/fa"

const Team = () => {
    return (
        <section>
            <div className="container">
                <div className="mt-16">

                    <h1 className='text-4xl text-white text-center mb-5'>Met Our Team</h1>
                    <p className="text-white text-center opacity-70">Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit. Sed quis <br/>
                        accumsan nisi Ut ut felis congue nisl hendrerit commodo.</p>

                    <div className="flex items-center justify-between mt-10">
                        <div
                            className="flex flex-col text-center items-center bg-gray-800 p-6 px-16 rounded-3xl leading-loose bg-opacity-30 border border-gray-700">
                            <img src={imgTea} alt=""/>
                            <h3 className="text-white text-2xl">Sunny Khan</h3>
                            <p className="text-gray-500">Executive officer</p>
                            <div className="flex items-center md:space-x-3">
                                <FaTelegramPlane
                                    className="text-white bg-blue-500 rounded-3xl text-1xl px-1 cursor-pointer"/>
                                <GrTwitter className="text-white bg-blue-500 rounded-3xl text-1xl px-1 cursor-pointer"/>
                                <FaFacebookF
                                    className="text-white bg-blue-500 rounded-3xl text-1xl px-1 cursor-pointer"/>
                                <AiFillInstagram
                                    className="text-white bg-blue-500 rounded-3xl text-1xl px-1 cursor-pointer"/>
                            </div>
                        </div>

                        <div
                            className="flex flex-col text-center items-center bg-gray-800 p-6 px-16 rounded-3xl leading-loose bg-opacity-30 border border-gray-700">
                            <img src={imgTea1} alt=""/>
                            <h3 className="text-white text-2xl">Alina Jesia</h3>
                            <p className="text-gray-500">UX/UI DESIGNER</p>
                            <div className="flex items-center md:space-x-3">
                                <FaTelegramPlane
                                    className="text-white bg-blue-500 rounded-3xl text-1xl px-1 cursor-pointer"/>
                                <GrTwitter className="text-white bg-blue-500 rounded-3xl text-1xl px-1 cursor-pointer"/>
                                <FaFacebookF
                                    className="text-white bg-blue-500 rounded-3xl text-1xl px-1 cursor-pointer"/>
                                <AiFillInstagram
                                    className="text-white bg-blue-500 rounded-3xl text-1xl px-1 cursor-pointer"/>
                            </div>
                        </div>

                        <div
                            className="flex flex-col text-center items-center bg-gray-800 p-6 px-16 rounded-3xl leading-loose bg-opacity-30 border border-gray-700">
                            <img src={imgTea2} alt=""/>
                            <h3 className="text-white text-2xl">Alex Sohag</h3>
                            <p className="text-gray-500">BUSINESS DEV</p>
                            <div className="flex items-center md:space-x-3">
                                <FaTelegramPlane
                                    className="text-white bg-blue-500 rounded-3xl text-1xl px-1 cursor-pointer"/>
                                <GrTwitter className="text-white bg-blue-500 rounded-3xl text-1xl px-1 cursor-pointer"/>
                                <FaFacebookF
                                    className="text-white bg-blue-500 rounded-3xl text-1xl px-1 cursor-pointer"/>
                                <AiFillInstagram
                                    className="text-white bg-blue-500 rounded-3xl text-1xl px-1 cursor-pointer"/>
                            </div>
                        </div>

                        <div
                            className="flex flex-col text-center items-center bg-gray-800 p-6 px-16 rounded-3xl leading-loose bg-opacity-30 border border-gray-700">
                            <img src={imgTea3} alt=""/>
                            <h3 className="text-white text-2xl">Afroza Mou</h3>
                            <p className="text-gray-500">Head of marketing</p>
                            <div className="flex items-center md:space-x-3">
                                <FaTelegramPlane
                                    className="text-white bg-blue-500 rounded-3xl text-1xl px-1 cursor-pointer"/>
                                <GrTwitter className="text-white bg-blue-500 rounded-3xl text-1xl px-1 cursor-pointer"/>
                                <FaFacebookF
                                    className="text-white bg-blue-500 rounded-3xl text-1xl px-1 cursor-pointer"/>
                                <AiFillInstagram
                                    className="text-white bg-blue-500 rounded-3xl text-1xl px-1 cursor-pointer"/>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Team;