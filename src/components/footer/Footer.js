import React from 'react';
import imgFoo from "./img/Logo.svg"
import {FiMapPin} from "react-icons/fi"
import {BiPhoneCall} from "react-icons/bi"
import {HiOutlineMail} from "react-icons/hi"
import {FaFacebookF} from "react-icons/fa"
import {FaTelegramPlane} from "react-icons/fa"
import {AiFillInstagram} from "react-icons/ai"
import {GrTwitter} from "react-icons/gr"

const Footer = () => {
    return (
        <section>
            <div className="container">
                <div className="footer mt-32">
                    <div className="flex items-start justify-between border-b pb-10">

                        <div className="leading-loose">
                            <img className="mb-2" src={imgFoo} alt=""/>
                            <a className="flex items-center text-white" href="#"><FiMapPin className="text-2xl mr-2"/>Dhaka,
                                Bangladesh</a>
                            <a className="flex items-center text-white" href="#"><BiPhoneCall
                                className="text-2xl mr-2"/>0943833399</a>
                            <a className="flex items-center text-white" href="#"><HiOutlineMail
                                className="text-2xl mr-2"/>support@zone.com</a>
                            <div className='flex md:space-x-3 mt-3'>
                                <FaFacebookF
                                    className="cursor-pointer text-white bg-gray-800 rounded-3xl text-4xl px-3"/>
                                <GrTwitter className="cursor-pointer text-white bg-gray-800 rounded-3xl text-4xl px-2"/>
                                <FaTelegramPlane
                                    className="cursor-pointer text-white bg-gray-800 rounded-3xl text-4xl px-2"/>
                                <AiFillInstagram
                                    className="cursor-pointer text-white bg-gray-800 rounded-3xl text-4xl px-2"/>
                            </div>
                        </div>

                        <div className="leading-loose">
                            <h3 className="text-2xl text-gray-500 mb-2">Service</h3>
                            <a className="flex items-center text-white" href="#">Order Management</a>
                            <a className="flex items-center text-white" href="#">Social Assistant</a>
                            <a className="flex items-center text-white" href="#">Crypto Platform</a>
                            <a className="flex items-center text-white" href="#">Analyzer of the News</a>
                        </div>

                        <div className="leading-loose">
                            <h3 className="text-2xl text-gray-500 mb-2">Company</h3>
                            <a className="flex items-center text-white" href="#">About Us</a>
                            <a className="flex items-center text-white" href="#">News</a>
                            <a className="flex items-center text-white" href="#">Our trusted partner</a>
                            <a className="flex items-center text-white" href="#">New users FAQ</a>
                        </div>

                        <div className="leading-loose">
                            <h3 className="text-2xl text-gray-500 mb-2">Supports</h3>
                            <a className="flex items-center text-white" href="#">Help center</a>
                            <a className="flex items-center text-white" href="#">Feedbcak</a>
                            <a className="flex items-center text-white" href="#">Contact us</a>
                            <a className="flex items-center text-white" href="#">Terms conditins</a>
                        </div>

                        <div className="leading-loose">
                            <h3 className="text-2xl text-gray-500 mb-2">Resources</h3>
                            <a className="flex items-center text-white" href="#">Download app</a>
                            <a className="flex items-center text-white" href="#">Blog</a>
                            <a className="flex items-center text-white" href="#">What’s new</a>
                            <a className="flex items-center text-white" href="#">Sitemap</a>
                        </div>

                    </div>

                    <div className="flex justify-between pt-6 pb-6">
                        <p className="text-white opacity-70">© 2021 Zone. - All rights reserved.</p>
                        <div className="flex md:space-x-12 ">
                            <a className="flex text-white" href="#">Privacy</a>
                            <a className="flex text-white" href="#">Security</a>
                            <a className="flex text-white" href="#">Terms</a>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Footer;