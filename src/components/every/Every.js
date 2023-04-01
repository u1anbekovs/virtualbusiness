import React from 'react';
import imgEve from "./img/man-working-using-virtual-reality-4019408-3337377@0 1.svg"

const Every = () => {
    return (
        <section>
            <div className="container">
                <div className="flex items-center justify-around mt-16">
                    <img src={imgEve} alt=""/>
                    <div>

                        <h2 className="text-white text-4xl leading-normal">We complete every projects <br/>
                            extra care as customer need</h2>
                        <p className="text-white mt-6 mb-6 leading-loose opacity-70">Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit.
                            Duis at dictum risus,<br/> non suscipit arcu. Quisque aliquam posuere tortor, sit amet
                            convallis nuncoe <br/> scelerisque in. orem ipsum dolor sit amet, consectetur adipisicing
                            elit. Labore <br/> eius molestiae facere, natus reprehenderit eaque eum, autem ipsam.
                            Magfini,<br/> error. Tempora odit laborum iure inventore possimus laboriosam qui nam. </p>
                        <button type="button"
                                className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2 text-center">Read
                            more
                        </button>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Every;