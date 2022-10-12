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

export default function Livings_Halls() {
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
                    <p>Galerie - Livinguri & Antreuri</p>
                </div>
                <div className="gallery">
                    {getLivings_Halls("46")}
                    {/*{getLivings_Halls("1")}*/}
                    {getLivings_Halls("2")}
                    {getLivings_Halls("3")}
                    {getLivings_Halls("4")}
                    {getLivings_Halls("5")}
                    {getLivings_Halls("6")}
                    {getLivings_Halls("7")}
                    {getLivings_Halls("8")}
                    {getLivings_Halls("9")}
                    {getLivings_Halls("10")}
                    {getLivings_Halls("11")}
                    {getLivings_Halls("12")}
                    {getLivings_Halls("13")}
                    {getLivings_Halls("14")}
                    {getLivings_Halls("15")}
                    {getLivings_Halls("16")}
                    {getLivings_Halls("17")}
                    {getLivings_Halls("18")}
                    {getLivings_Halls("19")}
                    {getLivings_Halls("20")}
                    {getLivings_Halls("21")}
                    {getLivings_Halls("22")}
                    {getLivings_Halls("23")}
                    {getLivings_Halls("24")}
                    {getLivings_Halls("25")}
                    {getLivings_Halls("26")}
                    {getLivings_Halls("27")}
                    {getLivings_Halls("28")}
                    {getLivings_Halls("29")}
                    {getLivings_Halls("30")}
                    {getLivings_Halls("31")}
                    {getLivings_Halls("32")}
                    {getLivings_Halls("33")}
                    {getLivings_Halls("34")}
                    {getLivings_Halls("35")}
                    {getLivings_Halls("36")}
                    {getLivings_Halls("37")}
                    {getLivings_Halls("38")}
                    {getLivings_Halls("39")}
                    {getLivings_Halls("40")}
                    {getLivings_Halls("41")}
                    {getLivings_Halls("42")}
                    {getLivings_Halls("43")}
                    {getLivings_Halls("44")}
                    {getLivings_Halls("45")}
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


function getLivings_Halls(name) {

    return (<div>

            <LightGallery mode="lg-fade" plugins={[lgZoom]}>
                <a
                    className="gallery-item h-1406 w-1390"
                    data-src={`/Livings_Halls/${name}.png`}
                >
                    <img
                        className="img-responsive border-8 border-white-600 mt-5"
                        src={`/Livings_Halls/${name}.png`}
                        style={{width: '300px', height: '265px'}}
                    />
                </a>
            </LightGallery>

        </div>
    )
}