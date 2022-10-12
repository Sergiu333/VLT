import Head from 'next/head';
import dynamic from 'next/dynamic';
import Script from "next/script";
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import lgZoom from "lightgallery/plugins/zoom";
import React from "react";

const LightGallery = dynamic(() => import('lightgallery/react'), {
    ssr: false
});

export default function Kitchens() {
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
                    <p>Galerie - Bucatarii</p>
                </div>
                <div className="gallery">

                    {getKitchens("1")}
                    {getKitchens("2")}
                    {getKitchens("3")}
                    {getKitchens("4")}
                    {getKitchens("5")}
                    {getKitchens("6")}
                    {getKitchens("7")}
                    {getKitchens("8")}
                    {getKitchens("9")}
                    {getKitchens("10")}
                    {getKitchens("11")}
                    {getKitchens("12")}
                    {getKitchens("13")}
                    {getKitchens("14")}
                    {getKitchens("15")}
                    {getKitchens("16")}
                    {getKitchens("17")}
                    {getKitchens("18")}
                    {getKitchens("19")}
                    {getKitchens("20")}
                    {getKitchens("21")}
                    {getKitchens("22")}
                    {getKitchens("23")}
                    {getKitchens("24")}
                    {getKitchens("25")}
                    {getKitchens("26")}
                    {getKitchens("27")}
                    {getKitchens("28")}
                    {getKitchens("29")}
                    {getKitchens("30")}
                    {getKitchens("31")}
                    {getKitchens("32")}
                    {getKitchens("35")}

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

function getKitchens(name) {

    return (<div>

            <LightGallery mode="lg-fade" plugins={[lgZoom]}>
                <a
                    className="gallery-item h-1406 w-1390"
                    data-src={`/Bucatarii/${name}.png`}
                >
                    <img
                        className="img-responsive border-8 border-white-600 mt-5"
                        src={`/Bucatarii/${name}.png`}
                        style={{width: '300px', height: '265px'}}
                    />
                </a>
            </LightGallery>

        </div>
    )
}
