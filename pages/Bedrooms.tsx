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

export default function Bedrooms() {
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
                    <p>Galerie - Dormitoare</p>
                </div>
                <div className="gallery">
                    {getBedrooms("1")}
                    {getBedrooms("2")}
                    {getBedrooms("3")}
                    {getBedrooms("4")}
                    {getBedrooms("5")}
                    {getBedrooms("6")}
                    {getBedrooms("7")}
                    {getBedrooms("8")}
                    {getBedrooms("9")}
                    {getBedrooms("10")}
                    {getBedrooms("11")}


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


function getBedrooms(name) {

    return (<div>

            <LightGallery mode="lg-fade" plugins={[lgZoom]}>
                <a
                    className="gallery-item h-1406 w-1390"
                    data-src={`/Dormitoare/${name}.png`}
                >
                    <img
                        className="img-responsive border-8 border-white-600 mt-5"
                        src={`/Dormitoare/${name}.png`}
                        style={{width: '300px', height: '265px'}}
                    />
                </a>
            </LightGallery>

        </div>
    )
}
