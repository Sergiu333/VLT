import React from "react";

export default function TouristicsPlaces(props) {
    let Places = [
        {id:0, title:"", subTitle:"", description:"", image:"" },
        {
            id:1,
            title:"Mimi Castle, Anenii Noi",
            subTitle:"Mimi Castle",
            description:"At Castel Mimi we are proud of our position as one of the top wine producers and tourist destinations in Moldova.",
            image:"https://lh5.googleusercontent.com/p/AF1QipMr6n_xBW4p_K1ZlzFi3QaAGdHW9zQbm_5fMa7k=w464-h260-n-k-no"
        },
        {
            id:2,
            title:"Carlevana Winery, Anenii Noissas",
            subTitle:"Carlevana Winery",
            description:"Carlevana Winery is one of the most promising companies in the wine branch of the Republic of Moldova, which enjoys a dynamic development, ",
            image:"https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcRKZfLRZoSdSumS3n-8FG5iPsfUtxtob2crwhU0Ir5Ih2dsme81fpc0Mbh32soDwkqm0ssRrjqCE7JQVL8kX2K__Q"
        },

    ];
    return (
        <div>
            <div className="container w-full md:max-w-5xl mx-auto pt-20">
                <style jsx>{`
                  .tab {
                    overflow: hidden;
                  }

                  .tab-content {
                    max-height: 0;
                    transition: all 0.5s;
                  }

                  input:checked + .tab-label .test {
                    background-color: #000;
                  }

                  input:checked + .tab-label .test svg {
                    transform: rotate(180deg);
                    stroke: #fff;
                  }

                  input:checked + .tab-label::after {
                    transform: rotate(90deg);
                  }

                  input:checked ~ .tab-content {
                    max-height: 100vh;
                    overflow: auto;
                  }
                `}</style>

                <div
                    className="container px-4 mb-20 mt-2 bg-white rounded-md bg-gradient-to-b from-green-100 to-gray-100"
                    style={{minHeight: '75vh'}}>
                    <main className="w-full md:w-4/5 p-8 mx-auto">
                        <section className="shadow row bg-white">
                            <div className="tabs space-x-0.5">


                                <div className="border-b tab" >
                                    <div className="border-l-2 border-transparent relative">
                                        <input className="w-full absolute z-10 cursor-pointer opacity-0 h-5 top-6"
                                               type="checkbox" id="chck3"/>
                                        <header
                                            className="flex justify-between items-center p-5 pl-8 pr-8 cursor-pointer select-none tab-label"
                                        >
                                            <span className="text-grey-darkest text-xl">
                                             {Places[1].title}
                                            </span>
                                            <div
                                                className="rounded-full border border-grey w-7 h-7 flex items-center justify-center test">

                                                <svg aria-hidden="true" className="" data-reactid="266" fill="none"
                                                     height="24" stroke="#606F7B" strokeLinecap="round"
                                                     strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24"
                                                     width="24"
                                                     xmlns="http://www.w3.org/2000/svg">
                                                    <polyline points="6 9 12 15 18 9">
                                                    </polyline>
                                                </svg>
                                            </div>
                                        </header>
                                        <div className="tab-content">
                                            <div className="pl-8 pr-8 pb-5 text-grey-darkest">
                                                <div className="text-left">
                                                    <div className="bg-white py-6 sm:py-8 lg:py-12">
                                                        <div className="max-w-screen-xl px-4 md:px-8 mx-auto">
                                                            <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
                                                                <div>
                                                                    <div
                                                                        className="h-64 md:h-auto bg-gray-100 overflow-hidden rounded-lg shadow-lg">
                                                                        <img
                                                                            src={Places[1].image}
                                                                            loading="lazy" alt="Photo"
                                                                            className="w-full h-full object-cover object-center"/>
                                                                    </div>
                                                                </div>
                                                                <div>
                                                                    <h1 className="text-gray-800 text-2xl sm:text-3xl font-bold text-center md:text-left mb-4 md:mb-6">
                                                                        {Places[1].subTitle}</h1>

                                                                    <p className="text-gray-500 sm:text-lg mb-6 md:mb-8">
                                                                        {Places[1].description}
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="border-b tab">
                                    <div className="border-l-2 border-transparent relative">
                                        <input className="w-full absolute z-10 cursor-pointer opacity-0 h-5 top-6"
                                               type="checkbox" id="chck3"/>
                                        <header
                                            className="flex justify-between items-center p-5 pl-8 pr-8 cursor-pointer select-none tab-label"
                                        >
                                            <span className="text-grey-darkest text-xl">
                                               {Places[2].title}
                                            </span>
                                            <div
                                                className="rounded-full border border-grey w-7 h-7 flex items-center justify-center test">

                                                <svg aria-hidden="true" className="" data-reactid="266" fill="none"
                                                     height="24" stroke="#606F7B" strokeLinecap="round"
                                                     strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24"
                                                     width="24"
                                                     xmlns="http://www.w3.org/2000/svg">
                                                    <polyline points="6 9 12 15 18 9">
                                                    </polyline>
                                                </svg>
                                            </div>
                                        </header>
                                        <div className="tab-content">
                                            <div className="pl-8 pr-8 pb-5 text-grey-darkest">
                                                <div className="text-left">
                                                    <div className="bg-white py-6 sm:py-8 lg:py-12">
                                                        <div className="max-w-screen-xl px-4 md:px-8 mx-auto">
                                                            <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
                                                                <div>
                                                                    <div
                                                                        className="h-64 md:h-auto bg-gray-100 overflow-hidden rounded-lg shadow-lg">
                                                                        <img
                                                                            src={Places[2].image}
                                                                            loading="lazy" alt="Photo"
                                                                            className="w-full h-full object-cover object-center"/>
                                                                    </div>
                                                                </div>
                                                                <div>
                                                                    <h1 className="text-gray-800 text-2xl sm:text-3xl font-bold text-center md:text-left mb-4 md:mb-6">
                                                                        {Places[2].subTitle}</h1>

                                                                    <p className="text-gray-500 sm:text-lg mb-6 md:mb-8">
                                                                        {Places[2].description}
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </section>
                    </main>
                </div>
            </div>
        </div>
    );
}
