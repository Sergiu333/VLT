import React from "react";

export default function DistrictContent(props) {

    return (
            <section>
                <div className=" flex flex-col items-center px-5 py-8 mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="flex flex-col w-full max-w-5xl mx-auto prose text-left prose-blue">
                        <div className="w-full mx-auto">
                            <b className={"text-5xl"}>Bine ati venit in vizita la <b>{props.name}</b>.</b>
                            <div className={"text-2xl mt-10"}>Localitatea <b>{props.title}</b> .</div>
                            <div className={"mt-4"}>{props.description}</div>
                        </div>
                    </div>
                </div>
            </section>
    );
}
