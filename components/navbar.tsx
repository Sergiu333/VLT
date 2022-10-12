import Link from 'next/link'
import useTranslation from "next-translate/useTranslation";
import Image from "next/image";
import React from "react";


export default function Navbar() {

    const style = {
        background: 'linear-gradient(to right, #4dc0b5 var(--scroll), transparent 0)',
    }
    let { t } = useTranslation();

    return (
    <nav id="header" className="fixed w-full z-10 top-0">
        <div id="progress" className="h-1 z-20 top-0" style={style}/>

        <div className="w-full md:max-w-5xl mx-auto flex flex-wrap items-center justify-between mt-0 py-3">

            <div className="pl-4">
                <Link href="/">
                    {/*<Image src="/img.png" width="100px" height="70px"/>*/}
                    <a className="text-gray-900 text-base no-underline hover:no-underline font-extrabold text-xl">“MOLDOVA”</a>
                </Link>
            </div>

            <div className="block lg:hidden pr-4">
                <button id="nav-toggle"
                        className="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-gray-900 hover:border-green-500 appearance-none focus:outline-none">
                    <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <title>Menu</title>
                        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
                    </svg>
                </button>
            </div>

            <div className="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden lg:block mt-2 lg:mt-0 bg-gray-100 md:bg-transparent z-20"
                 id="nav-content">
                <ul className="list-reset lg:flex justify-end flex-1 items-center">
                    <li className="mr-3" >
                        <Link href="/home">
                            <a className="inline-block py-2 px-4 text-gray-900 font-bold no-underline">{t("common:menu-home")}</a>
                        </Link>
                    </li>
                    <li className="mr-3" >
                        <Link href="/about-us">
                            <a className="inline-block py-2 px-4 text-gray-900 font-bold no-underline">{t("common:menu-about-us")}</a>
                        </Link>
                    </li>
                    <li className="mr-3" >
                        <Link href="/page">
                            <a className="inline-block py-2 px-4 text-gray-900 font-bold no-underline">{t("common:menu-projects")}</a>
                        </Link>
                    </li>
                    <li className="mr-3">
                        <Link href="/Dormitoare">
                            <a className="inline-block py-2 px-4 text-gray-900 font-bold no-underline">{t("common:menu-donate")}</a>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    );
}
