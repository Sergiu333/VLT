import Image from 'next/image'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Link from "next/link";
import Script from "next/script";
import React from "react";



export default function Home(props) {


    return (
        <div className="container">
            <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css"/>
            <Script src="https://cdn.jsdelivr.net/npm/tw-elements/dist/js/index.min.js"/>
            <div id="carouselExampleCaptions" className="carousel slide relative mt-5" data-bs-ride="carousel">
                <div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
                    <button
                        type="button"
                        data-bs-target="#carouselExampleCaptions"
                        data-bs-slide-to="0"
                        className="active"
                        aria-current="true"
                        aria-label="Slide 1"
                    ></button>
                    <button
                        type="button"
                        data-bs-target="#carouselExampleCaptions"
                        data-bs-slide-to="1"
                        aria-label="Slide 2"
                    ></button>
                    <button
                        type="button"
                        data-bs-target="#carouselExampleCaptions"
                        data-bs-slide-to="2"
                        aria-label="Slide 3"
                    ></button>
                    <button
                        type="button"
                        data-bs-target="#carouselExampleCaptions"
                        data-bs-slide-to="3"
                        aria-label="Slide 4"
                    ></button>
                </div>
                <div className="carousel-inner relative w-full overflow-hidden">
                    <div className="carousel-item active relative float-left w-full">
                        <img
                            src="../Home/1.png"
                            className="block w-full"
                            alt="..."
                        />
                        <div className="carousel-caption hidden md:block absolute text-center">
                            <h1 className="text-2xl">Rapid & Calitativ</h1>
                            <p>Produsele sunt create rapid , insa cu o deosebita calitate.</p>
                        </div>
                    </div>
                    <div className="carousel-item relative float-left w-full">
                        <img
                            src="/Home/2.png"
                            className="block w-full"
                            alt="..."
                        />
                        <div className="carousel-caption hidden md:block absolute text-center">
                            <h1 className="text-2xl">Mobila la comanda</h1>
                            <p>Sundem mandri sa umplem golul din casa ta.</p>
                        </div>
                    </div>
                    <div className="carousel-item relative float-left w-full ">
                        <img
                            src="../Home/3.png"
                            className="block w-full"
                            alt="..."
                        />
                        <div className="carousel-caption hidden md:block absolute text-center">
                            <h1 className="text-2xl">Diversitate</h1>
                            <p>Suntem gata sa realizam orice capriciu.</p>
                        </div>
                    </div>
                    <div className="carousel-item relative float-left w-full ">
                        <img
                            src="../Home/4.png"
                            className="block w-full"
                            alt="..."
                        />
                        <div className="carousel-caption hidden md:block absolute text-center">
                            <h1 className="text-2xl">Diversitate</h1>
                            <p>Suntem gata sa realizam orice capriciu.</p>
                        </div>
                    </div>

                </div>
                <button
                    className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide="prev"
                >
                    <span className="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button
                    className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide="next"
                >
                    <span className="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

            <style jsx>
                {`
                .container {
                max-width: 1180px;
                margin: 0px auto;
                padding: 30px 0px;
                margin-top: 10px;
                
                

              }
                .columns {
                  float: left;
                  width: 33.3%;
                  padding: 8px;
                  margin-top: 10px;
                 
                }
                
                .price {
                  list-style-type: none;
                  border: 1px solid #eee;
                  margin: 0;
                  padding: 0;
                  -webkit-transition: 0.3s;
                  transition: 0.3s;
                }
                
                .price:hover {
                  box-shadow: 0 8px 12px 0 rgba(0,0,0,0.2)
                }
                
                .price .header {
                  background-color: #AA210F;
                  color: white;
                  font-size: 25px;
                }
                
                .price li {
                  border-bottom: 1px solid #eee;
                  padding: 20px;
                  text-align: center;
                }
                
                .price .grey {
                  background-color: #eee;
                  font-size: 20px;
                }
                
                .button {
                  background-color:  #f50000;
                  border: none;
                  color: white;
                  padding: 10px 25px;
                  text-align: center;
                  text-decoration: none;
                  font-size: 18px;
                }
                
                @media only screen and (max-width: 600px) {
                  .columns {
                    width: 100%;
                  }
                }
                .slider{
                  margin-top: 50px;
                }
                .title {
                    background: silver;
                    height: 55px;
                    text-align: center;
                    font-size: 25px;
                    color: white;
                    margin-top: 100px;
                  }
                `}
            </style>


            <div className="flex justify-left mt-5 ml-4">
                <div className="mb-3 xl:w-96">
                    <div className="input-group relative flex flex-wrap items-stretch w-full mb-4">
                        <input type="search"
                               className="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-red-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-red-600 focus:outline-none"
                               placeholder="Search" aria-label="Search" aria-describedby="button-addon2"/>
                        <button
                            className="btn inline-block px-6 py-2.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700  focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out flex items-center"
                            type="button" id="button-addon2">
                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="search"
                                 className="w-4" role="img" xmlns="http://www.w3.org/2000/svg"
                                 viewBox="0 0 512 512">
                                <path fill="currentColor"
                                      d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>


            <Link href="Bedrooms">
                <div className="columns">
                    <ul className="price">
                        <li className="header">Dormitoare</li>
                        <Image src="/Home/dormitor.png" width="400px" height="260px"/>
                    </ul>
                </div>
            </Link><Link href="Kitchens">
            <div className="columns">
                <ul className="price">
                    <li className="header">Bucatarii</li>
                    <Image src="/Home/bucatarie.png" width="400px" height="260px"/>
                </ul>
            </div>
        </Link><Link href="Livings_Halls">
            <div className="columns">
                <ul className="price">
                    <li className="header">Antreuri & Living</li>
                    <Image src="/Home/antreuri_living.png" width="400px" height="260px"/>
                </ul>
            </div>
        </Link><Link href="Wardrobes">
            <div className="columns">
                <ul className="price">
                    <li className="header">Dulapuri</li>
                    <Image src="/Home/dulap.png" width="400px" height="260px"/>
                </ul>
            </div>
        </Link>







            <div style={{marginTop:'900px'}}>

                <section className="mb-20">

                    <div className="max-w-4xl mx-auto text-gray-800">
                        <div className="text-center">

                            <h3 className="mb-6 text-gray-800 text-2xl font-semibold">Mobila pentru bucataresele excelente</h3>
                            <p className="text-gray-500 mb-12 mx-auto max-w-xl">
                                Oferim tot ce este mai bun si mai calitativ clientilor nostri , ei merita tot ce este mai bun pentru comoditatea sa.
                            </p>
                        </div>
                        <div className="grid md:grid-cols-2 gap-4 lg:gap-12 flex justify-center">
                            <div className="mb-12 md:mb-0">
                                <div className="block rounded-lg shadow-lg text-white relative overflow-hidden bg-no-repeat bg-cover" style={{backgroundPosition: '50%'}}>
                                    {/*<img src="https://mdbootstrap.com/img/Photos/new-templates/img8.jpg" className="" />*/}
                                    <img src="/Home/img.png" className="" />
                                    <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed" style={{backgroundColor: '#AA210F', opacity:'0.7'}}>
                                        <div className="flex justify-center items-center h-full">
                                            <div className="opacity-100 p-6 text-center">
                                                <h2 className="text-3xl font-semibold mb-4">Analize de marketing</h2>
                                                <p className="mb-6">
                                                    Suntem pe piata de 15 ani buni si plini de prosperitate si cunoastem ce capricii isi doreste consumatorul de la un producator de mobila.
                                                </p>
                                                <a href="https://www.facebook.com/rapidmobil.md">
                                                    <button type="button" className="inline-block px-6 py-2 border-2 border-white text-white font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="light">Alaturate</button>

                                                </a>
                                             </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="flex items-start">
                                    <div className="shrink-0">
                                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="headset" className="w-5 h-5 text-yellow-500" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M192 208c0-17.67-14.33-32-32-32h-16c-35.35 0-64 28.65-64 64v48c0 35.35 28.65 64 64 64h16c17.67 0 32-14.33 32-32V208zm176 144c35.35 0 64-28.65 64-64v-48c0-35.35-28.65-64-64-64h-16c-17.67 0-32 14.33-32 32v112c0 17.67 14.33 32 32 32h16zM256 0C113.18 0 4.58 118.83 0 256v16c0 8.84 7.16 16 16 16h16c8.84 0 16-7.16 16-16v-16c0-114.69 93.31-208 208-208s208 93.31 208 208h-.12c.08 2.43.12 165.72.12 165.72 0 23.35-18.93 42.28-42.28 42.28H320c0-26.51-21.49-48-48-48h-32c-26.51 0-48 21.49-48 48s21.49 48 48 48h181.72c49.86 0 90.28-40.42 90.28-90.28V256C507.42 118.83 398.82 0 256 0z"></path></svg>
                                    </div>
                                    <div className="grow ml-6">
                                        <h5 className="mb-2 font-medium">Suport profesional</h5>
                                        <p className="text-gray-500 mb-12">
                                            Specialistii nostri iti vor oferi sfaturi ce tine de moibla ta interioara , te vor ajuta sa iti alegi mobila si
                                            o vor crea dupa necesitatile dumneavoastra
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <div className="shrink-0">
                                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="comments" className="w-5 h-5 text-pink-700" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M416 192c0-88.4-93.1-160-208-160S0 103.6 0 192c0 34.3 14.1 65.9 38 92-13.4 30.2-35.5 54.2-35.8 54.5-2.2 2.3-2.8 5.7-1.5 8.7S4.8 352 8 352c36.6 0 66.9-12.3 88.7-25 32.2 15.7 70.3 25 111.3 25 114.9 0 208-71.6 208-160zm122 220c23.9-26 38-57.7 38-92 0-66.9-53.5-124.2-129.3-148.1.9 6.6 1.3 13.3 1.3 20.1 0 105.9-107.7 192-240 192-10.8 0-21.3-.8-31.7-1.9C207.8 439.6 281.8 480 368 480c41 0 79.1-9.2 111.3-25 21.8 12.7 52.1 25 88.7 25 3.2 0 6.1-1.9 7.3-4.8 1.3-2.9.7-6.3-1.5-8.7-.3-.3-22.4-24.2-35.8-54.5z"></path></svg>
                                    </div>
                                    <div className="grow ml-6">
                                        <h5 className="mb-2 font-medium">Cominucare eficienta</h5>
                                        <p className="text-gray-500 mb-12">
                                            putem comunica eficient online dar si fizic , pentru aceasta trebuie sa va uitati in sub-solul site-ului sau sa accesati CONTACTE.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <div className="shrink-0">
                                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chart-line" className="w-5 h-5 text-purple-700" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M496 384H64V80c0-8.84-7.16-16-16-16H16C7.16 64 0 71.16 0 80v336c0 17.67 14.33 32 32 32h464c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16zM464 96H345.94c-21.38 0-32.09 25.85-16.97 40.97l32.4 32.4L288 242.75l-73.37-73.37c-12.5-12.5-32.76-12.5-45.25 0l-68.69 68.69c-6.25 6.25-6.25 16.38 0 22.63l22.62 22.62c6.25 6.25 16.38 6.25 22.63 0L192 237.25l73.37 73.37c12.5 12.5 32.76 12.5 45.25 0l96-96 32.4 32.4c15.12 15.12 40.97 4.41 40.97-16.97V112c.01-8.84-7.15-16-15.99-16z"></path></svg>
                                    </div>
                                    <div className="grow ml-6">
                                        <h5 className="mb-2 font-medium">Product</h5>
                                        <p className="text-gray-500 mb-12">
                                            Compania noastra are de peste 100 de modele de bucatarii, antreuri , dormitoare si dulapuri ,
                                            detinem un catalog de unde te poti inspira pentru propriul tau model .
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <div className="shrink-0">
                                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="users" className="w-5 h-5 text-indigo-700" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path fill="currentColor" d="M96 224c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm448 0c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm32 32h-64c-17.6 0-33.5 7.1-45.1 18.6 40.3 22.1 68.9 62 75.1 109.4h66c17.7 0 32-14.3 32-32v-32c0-35.3-28.7-64-64-64zm-256 0c61.9 0 112-50.1 112-112S381.9 32 320 32 208 82.1 208 144s50.1 112 112 112zm76.8 32h-8.3c-20.8 10-43.9 16-68.5 16s-47.6-6-68.5-16h-8.3C179.6 288 128 339.6 128 403.2V432c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-28.8c0-63.6-51.6-115.2-115.2-115.2zm-223.7-13.4C161.5 263.1 145.6 256 128 256H64c-35.3 0-64 28.7-64 64v32c0 17.7 14.3 32 32 32h65.9c6.3-47.4 34.9-87.3 75.2-109.4z"></path></svg>
                                    </div>
                                    <div className="grow ml-6">
                                        <h5 className="mb-2 font-medium">Business & Prietenie</h5>
                                        <p className="text-gray-500">
                                            Noi suntem dispusi sa colaboram , pentru o dezvoltare impreuna mai rapida si puternica.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </section>


            </div>
            <div className="container my-12 py-12 mx-auto w-auto h-auto mt-auto" >

                <section className="mb-20">

                    <div className=" text-white text-center xl:text-left rounded-lg" style={{background:'#41404C'}}>
                        <div className="container px-6 md:px-12 py-20">
                            <div className="grid grid-cols-1 text-center">
                                <div className="">
                                    <h2 className="text-4xl font-bold">"Rapid Mobil" îți creează stil și confort in casa dvs</h2>
                                    <p className="text-xl mb-12 opacity-90">
                                        Noi te vom ajuta cu aspectul casei tale.
                                        <br/>
                                        <p style={{color:'red'}}>Livrarea , instalarea și proiectare GRATIS.</p>
                                    </p>



                                </div>
                            </div>
                            <div className="block">
                                <div className="grid grid-cols-3 text-center text-white mt-4">
                                    <div className="mb-4 md:mb-0">
                                        <h2 className="text-4xl font-bold mb-2">100%</h2>
                                        <p className="text-xl mb-0">Calitate</p>
                                    </div>
                                    <div className="mb-4 md:mb-0">
                                        <h2 className="text-4xl font-bold mb-2">08:00 - 20:00</h2>
                                        <p className="text-xl mb-0">Program de munca</p>
                                    </div>
                                    <div className="">
                                        <h2 className="text-4xl font-bold mb-2">100+</h2>
                                        <p className="text-xl mb-0">Modele</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </section>

                <section className="overflow-hidden text-gray-700">
                    <div className="container px-5 py-2 mx-auto lg:pt-24 lg:px-32">
                        <div className="flex flex-wrap -m-1 md:-m-2">
                            <div className="flex flex-wrap w-1/2">
                                <div className="w-1/2 p-1 md:p-2">
                                    <img alt="gallery"
                                         className="block object-cover object-center w-full h-full rounded-lg"
                                         src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(70).webp"/>
                                </div>
                                <div className="w-1/2 p-1 md:p-2">
                                    <img alt="gallery"
                                         className="block object-cover object-center w-full h-full rounded-lg"
                                         src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(72).webp"/>
                                </div>
                                <div className="w-full p-1 md:p-2">
                                    <img alt="gallery"
                                         className="block object-cover object-center w-full h-full rounded-lg"
                                         src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp"/>
                                </div>
                            </div>
                            <div className="flex flex-wrap w-1/2">
                                <div className="w-full p-1 md:p-2">
                                    <img alt="gallery"
                                         className="block object-cover object-center w-full h-full rounded-lg"
                                         src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(74).webp"/>
                                </div>
                                <div className="w-1/2 p-1 md:p-2">
                                    <img alt="gallery"
                                         className="block object-cover object-center w-full h-full rounded-lg"
                                         src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(75).webp"/>
                                </div>
                                <div className="w-1/2 p-1 md:p-2">
                                    <img alt="gallery"
                                         className="block object-cover object-center w-full h-full rounded-lg"
                                         src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(77).webp"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


            </div>
            <div id="map" className="h-full"/>
                    <Script
                    id="map"
                    src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCyKofnTEBuyTulQwyNtBu4d9JpdDTaadc"
                    onLoad={ () => {
                        // The location of Uluru
                        const location = {lat: 47.476571257158945, lng: 28.105913389587055};
                        // The map, centered at Uluru
                        // @ts-ignore
                        const map = new google.maps.Map(document.getElementById("map"), {
                            zoom: 4,
                            center: location,
                        });
                        // The marker, positioned at Uluru
                        // @ts-ignore

                        const marker = new google.maps.Marker({
                            position: location,
                            map: map,
                        });
                    }}
                />
            </div>

    )
}

