import Head from 'next/head';
import lgZoom from 'lightgallery/plugins/zoom';
import dynamic from 'next/dynamic';
import Script from "next/script";
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import React from "react";

const LightGallery = dynamic(() => import('lightgallery/react'), {
    ssr: false
});

export default function Wardrobes() {
    return (
        <div style={{background: 'white'}}>
            <div className="Container">

                <Head>
                    <title>Create Next App</title>
                    <meta property="og:locale" content="ro_Ro"/>
                    <meta property="og:type" content="article"/>
                    <meta property="og:description"
                          content="Amenajarea Basinului hidrografic si a malurilor riverane ale R. Ciulucul Mic din com. Dumbravita, R-NUL Singerei"/>
                    <meta property="og:url"
                          content="https://www.podis.md/ro/arrangement-of-the-river-banks-of-ciulucul-mic-river"/>
                    <meta property="og:title" content="Amenajarea R. Ciulucul Mic"/>
                    <meta property="og:image" content="https://podis.md/ciulucul-mic.jpg"/>
                </Head>

                <div className="title">
                    <p>Galerie - Dulapuri</p>
                </div>
                <div className="gallery">
                    {getWardrobes("46")}
                    {/*{getWardrobes("1")}*/}
                    {getWardrobes("2")}
                    {getWardrobes("3")}
                    {getWardrobes("4")}
                    {getWardrobes("5")}
                    {getWardrobes("6")}
                    {getWardrobes("7")}
                    {getWardrobes("8")}
                    {getWardrobes("9")}
                    {getWardrobes("10")}
                    {getWardrobes("11")}
                    {getWardrobes("12")}
                    {getWardrobes("13")}
                    {getWardrobes("14")}
                    {getWardrobes("15")}
                    {getWardrobes("16")}
                    {getWardrobes("17")}
                    {getWardrobes("18")}
                    {getWardrobes("19")}
                    {getWardrobes("20")}
                    {getWardrobes("21")}
                    {getWardrobes("22")}
                    {getWardrobes("23")}
                    {getWardrobes("24")}
                    {getWardrobes("25")}
                    {getWardrobes("26")}
                    {getWardrobes("27")}
                    {getWardrobes("28")}
                    {getWardrobes("29")}
                    {getWardrobes("30")}
                    {getWardrobes("31")}
                    {getWardrobes("32")}
                    {getWardrobes("33")}
                    {getWardrobes("34")}
                    {getWardrobes("35")}
                    {getWardrobes("36")}
                    {getWardrobes("37")}
                    {getWardrobes("38")}
                    {getWardrobes("39")}
                    {getWardrobes("40")}
                    {getWardrobes("41")}
                    {getWardrobes("42")}
                    {getWardrobes("43")}
                    {getWardrobes("44")}
                    {getWardrobes("45")}
                    {getWardrobes("46")}
                    {getWardrobes("47")}
                    {getWardrobes("48")}
                    {getWardrobes("49")}
                    {/*47*/}
                </div>

                <div id="fb-root"/>
                <Script src="https://connect.facebook.net/ro_RO/sdk.js#xfbml=1&version=v12.0"/>
                <div className="fb-share-button"
                     data-href="https://www.ambianta.md/"
                     data-layout="button_count" data-size="small">

                    <a target="_blank"
                       href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwww.ambianta.md%2F&amp;src=sdkpreparse"
                       className="fb-xfbml-parse-ignore" rel="noreferrer"
                       style={{marginLeft: '160px', color: 'blue'}}
                    >Distribuie</a>
                </div>


            </div>
        </div>

    );
}


function getWardrobes(name) {

    return (<div>

            <LightGallery mode="lg-fade" plugins={[lgZoom]}>
                <a
                    className="gallery-item h-1406 w-1390"
                    data-src={`/Wardrobes/${name}.png`}
                >
                    <img
                        className="img-responsive border-8 border-white-600 mt-5"
                        src={`/Wardrobes/${name}.png`}
                        style={{width: '300px', height: '265px'}}
                    />
                </a>
            </LightGallery>

        </div>
    )
}