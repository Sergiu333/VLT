import {useRouter} from 'next/router'
import Link from "next/link";
import DistrictContent from "../../components/districtContent";
import TouristicsPlaces from "../../components/touristicsPlaces";

export default function () {
    const {query} = useRouter();

    let districts = [
        {id: 0, nr: "", title: "", description: ""}, // is default , is required (pentru cei care nu inteleg engleza <<el trebuie>>)
        {
            id: 1,
            nr: "MD-AN",
            title: "anenii noi",
            description: "Right. Say that again. No, no, George, look, it's just an act, right? Okay, so 9:00 you're strolling through the parking lot, you see us struggling in the car, you walk up, you open the door and you say, your line, George. Stop it. We're gonna take a little break but we'll be back in a while so, don't nobody go no where."
        },
        {id: 2, nr: "MD-BA", title: "balti", description: "ceva "},
        {id: 3, nr: "MD-BD", title: "tichina", description: "ceva "},
        {id: 4, nr: "MD-BR", title: "Briceni", description: "ceva "},
        {id: 5, nr: "MD-BS", title: "basarabeasca", description: "ceva "},
        {id: 6, nr: "MD-CA", title: "cahul", description: "ceva "},
        {id: 7, nr: "MD-CM", title: "cimislia", description: "ceva "},
        {id: 8, nr: "MD-CR", title: "criuleni", description: "ceva "},
        {id: 9, nr: "MD-CS", title: "causeni", description: "ceva "},
        {id: 10, nr: "MD-CT", title: "cantemir", description: "ceva "},
        {id: 11, nr: "MD-CU", title: "chisinau", description: "ceva "},
        {id: 12, nr: "MD-DO", title: "donduseni", description: "ceva "},
        {id: 13, nr: "MD-DR", title: "drochia", description: "ceva "},
        {id: 14, nr: "MD-DU", title: "dubasari", description: "ceva "},
        {id: 15, nr: "MD-ED", title: "edinet", description: "ceva "},
        {id: 16, nr: "MD-FA", title: "falesti", description: "ceva "},
        {id: 17, nr: "MD-FL", title: "floresti", description: "ceva "},
        {id: 18, nr: "MD-GA", title: "gagauzia", description: "ceva "},
        {id: 19, nr: "MD-GL", title: "glodeni", description: "ceva "},
        {id: 20, nr: "MD-HI", title: "hincesti", description: "ceva "},
        {id: 21, nr: "MD-IA", title: "ialoveni", description: "ceva "},
        {id: 22, nr: "MD-LE", title: "leova", description: "ceva "},
        {id: 23, nr: "MD-NI", title: "nisporeni", description: "ceva "},
        {id: 24, nr: "MD-OC", title: "Ocnita", description: "ceva "},
        {id: 25, nr: "MD-OR", title: "orhei", description: "ceva "},
        {id: 26, nr: "MD-RE", title: "rezina", description: "ceva "},
        {id: 27, nr: "MD-RI", title: "riscani", description: "ceva "},
        {id: 28, nr: "MD-SD", title: "soldanesti", description: "ceva "},
        {id: 29, nr: "MD-SI", title: "singerei", description: "ceva "},
        {id: 30, nr: "MD-SN", title: "transnistria", description: "ceva "},
        {id: 31, nr: "MD-SO", title: "soroca", description: "ceva "},
        {id: 32, nr: "MD-ST", title: "straseni", description: "ceva "},
        {id: 33, nr: "MD-SV", title: "stefan voda", description: "ceva "},
        {id: 34, nr: "MD-TA", title: "taraclia", description: "ceva "},
        {id: 35, nr: "MD-TE", title: "telenesti", description: "ceva "},
        {id: 36, nr: "MD-UN", title: "ungheni", description: "ceva "},
    ];

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
    let id = query.id;
    return (
        <div className={"mt-24 ml-10"}>

            <DistrictContent
                name={districts[id].title}
                title={districts[id].title}
                description={districts[id].description}
            />

            <TouristicsPlaces
                title={Places[2].title}
                subTitle={Places[2].subTitle}
                description={Places[2].description}
                image={Places[2].image}
            />

        </div>
    )
};
