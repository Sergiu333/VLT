import Link from "next/link";
import useTranslation from "next-translate/useTranslation";
export default function CallToAction(){
    let { t } = useTranslation();
    return(
        <div >
            <hr className="border-b-2 border-gray-400 mb-12 mt-10 mx-4"/>
            <div className="container px-4 mb-20">
                <div className="font-sans bg-gradient-to-b from-green-100 to-gray-100 rounded-lg shadow-xl p-4 text-center">
                    <h2 className="font-bold break-normal text-xl md:text-3xl">{t("common:donateTitle")}</h2>
                    <h3 className="font-bold break-normal text-gray-600 text-sm md:text-base">{t("common:donateDescription")}</h3>
                    <div className="w-full text-center pt-4">
                        <div className="max-w-xl mx-auto p-1 pr-o flex flex-wrap items-center">
                            <Link href="/donate">
                                <a className="flex-1 mt-4 block md:inline-block appearance-none bg-green-500 text-white text-base font-semibold tracking-winder uppercase py-4 rounded shadow hover:bg-green-400">{t("common:donateDonatePage")}</a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}