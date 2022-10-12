import {useState} from 'react'
import Link from "next/link";

const Page = () => {
    const [districts] = useState([
        {id: 1, nr: "MD-AN", title: "anenii noi"},
        {id: 2, nr: "MD-BA", title: "balti"},
        {id: 3, nr: "MD-BD", title: "tichina"},
        {id: 4, nr: "MD-BR", title: "Briceni"},
        {id: 5, nr: "MD-BS", title: "basarabeasca"},
        {id: 6, nr: "MD-CA", title: "cahul"},
        {id: 7, nr: "MD-CM", title: "cimislia"},
        {id: 8, nr: "MD-CR", title: "criuleni"},
        {id: 9, nr: "MD-CS", title: "causeni"},
        {id: 10, nr: "MD-CT", title: "cantemir"},
        {id: 11, nr: "MD-CU", title: "chisinau"},
        {id: 12, nr: "MD-DO", title: "donduseni"},
        {id: 13, nr: "MD-DR", title: "drochia"},
        {id: 14, nr: "MD-DU", title: "dubasari"},
        {id: 15, nr: "MD-ED", title: "edinet"},
        {id: 16, nr: "MD-FA", title: "falesti"},
        {id: 17, nr: "MD-FL", title: "floresti"},
        {id: 18, nr: "MD-GA", title: "gagauzia"},
        {id: 19, nr: "MD-GL", title: "glodeni"},
        {id: 20, nr: "MD-HI", title: "hincesti"},
        {id: 21, nr: "MD-IA", title: "ialoveni"},
        {id: 22, nr: "MD-LE", title: "leova"},
        {id: 23, nr: "MD-NI", title: "nisporeni"},
        {id: 24, nr: "MD-OC", title: "Ocnita"},
        {id: 25, nr: "MD-OR", title: "orhei"},
        {id: 26, nr: "MD-RE", title: "rezina"},
        {id: 27, nr: "MD-RI", title: "riscani"},
        {id: 28, nr: "MD-SD", title: "soldanesti"},
        {id: 29, nr: "MD-SI", title: "singerei"},
        {id: 30, nr: "MD-SN", title: "transnistria"},
        {id: 31, nr: "MD-SO", title: "soroca"},
        {id: 32, nr: "MD-ST", title: "straseni"},
        {id: 33, nr: "MD-SV", title: "stefan voda"},
        {id: 34, nr: "MD-TA", title: "taraclia"},
        {id: 35, nr: "MD-TE", title: "telenesti"},
        {id: 36, nr: "MD-UN", title: "ungheni"},
    ]);
    return (
        <div className={'container mx-auto my-20'}>
            <div className={'grid grid-rows-6 grid-flow-col gap-4 max-w-5xl mx-auto text-center'}>
                {districts.map(user =>
                    <div key={user.id}>
                        <Link href={`/page/${user.id}`}>
                            <a>{user.title}</a>
                        </Link>
                    </div>)
                }
            </div>
        </div>
    );
}
export default Page;

export async function getStaticProps(context) {
    return {
        props: {}, // will be passed to the page component as props
    }
}
