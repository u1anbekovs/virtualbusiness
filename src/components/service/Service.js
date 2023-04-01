import React from 'react';
import imgSer1 from "./img/Icon.svg"
import imgSer2 from "./img/Icon1.svg"
import imgSer4 from "./img/Icon (1).svg"
import imgSer5 from "./img/Icon (2).svg"
import imgSer3 from "./img/Rectangle 55.svg"
import imgSer from "./img/Icon (3).svg"
import {BsArrowRightShort} from "react-icons/bs"

const Service = () => {
    return (
        <section>
            <div className="container">
                <div className="mt-32">

                    <h1 className='text-4xl text-white text-center mb-5'>Our Service </h1>
                    <p className="text-white text-center opacity-70">We turn information into actionable insights We
                        work to understand your issues <br/>
                        and are driven to ask better questions in the pursuit of making work.</p>

                    <div className="flex grid grid-cols-3 mt-6">

                        <div className="flex flex-col text-center items-center bg-gray-800 bg-opacity-30 p-9 rounded-3xl m-4 border border-gray-700">
                            <img className="w-16 rounded-full" src={imgSer} alt=""/>
                            <h2 className="text-white text-2xl leading-loose">Order Management</h2>
                            <p className="text-white opacity-70">Lorem ipsum dolor sit amet, consectetur the adipiscing
                                elit. Sed quis accumsan nisi Ut ut felis congue nisl hendrerit commodo.</p>
                            <a className="flex items-center text-white pt-7" href="#">Learn more<BsArrowRightShort/></a>
                        </div>

                        <div className="flex flex-col text-center items-center bg-gray-800 bg-opacity-30 p-9 rounded-3xl m-4 border border-gray-700">
                            <img className="w-16" src={imgSer1} alt=""/>
                            <h2 className="text-white text-2xl leading-loose">Social Assistant</h2>
                            <p className="text-white opacity-70">Lorem ipsum dolor sit amet, consectetur the adipiscing
                                elit. Sed quis accumsan nisi Ut ut felis congue nisl hendrerit commodo.</p>
                            <a className="flex items-center text-white pt-7" href="#">Learn more<BsArrowRightShort/></a>
                        </div>

                        <div className="flex flex-col text-center items-center bg-gray-800 bg-opacity-30 p-9 rounded-3xl m-4 border border-gray-700">
                            <img className="w-16" src={imgSer2} alt=""/>
                            <h2 className="text-white text-2xl leading-loose">Crypto Platform</h2>
                            <p className="text-white opacity-70">Lorem ipsum dolor sit amet, consectetur the adipiscing
                                elit. Sed quis accumsan nisi Ut ut felis congue nisl hendrerit commodo.</p>
                            <a className="flex items-center text-white pt-7" href="#">Learn more<BsArrowRightShort/></a>
                        </div>

                        <div className="flex flex-col text-center items-center bg-gray-800 bg-opacity-30 p-9 rounded-3xl m-4 border border-gray-700">
                            <img className="w-16 rounded-full" src={imgSer3} alt=""/>
                            <h2 className="text-white text-2xl leading-loose">Smart Trading Modules</h2>
                            <p className="text-white opacity-70">Lorem ipsum dolor sit amet, consectetur the adipiscing
                                elit. Sed quis accumsan nisi Ut ut felis congue nisl hendrerit commodo.</p>
                            <a className="flex items-center text-white pt-7" href="#">Learn more<BsArrowRightShort/></a>
                        </div>

                        <div className="flex flex-col text-center items-center bg-gray-800 bg-opacity-30 p-9 rounded-3xl m-4 border border-gray-700">
                            <img className="w-16 " src={imgSer4} alt=""/>
                            <h2 className="text-white text-2xl leading-loose">Analyzer of the News</h2>
                            <p className="text-white opacity-70">Lorem ipsum dolor sit amet, consectetur the adipiscing
                                elit. Sed quis accumsan nisi Ut ut felis congue nisl hendrerit commodo.</p>
                            <a className="flex items-center text-white pt-7" href="#">Learn more<BsArrowRightShort/></a>
                        </div>

                        <div className="flex flex-col text-center items-center bg-gray-800 bg-opacity-30 p-9 rounded-3xl m-4 border border-gray-700">
                            <img className="w-16" src={imgSer5} alt=""/>
                            <h2 className="text-white text-2xl leading-loose">Module of Price Notification</h2>
                            <p className="text-white opacity-70">Lorem ipsum dolor sit amet, consectetur the adipiscing
                                elit. Sed quis accumsan nisi Ut ut felis congue nisl hendrerit commodo.</p>
                            <a className="flex items-center text-white pt-7" href="#">Learn more<BsArrowRightShort/></a>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Service;