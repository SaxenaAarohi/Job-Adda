import { getuserfromcookies } from "@/app/helper";
import prismaClient from "@/services/prisma";
import Review from "@/Component/Review";
import { Openings } from "../../../../generated/prisma";

type Params = Promise<{
id : string
}>

export default async function Comp_detail({ params } : {params : Params}) {

    const user = await getuserfromcookies();

    const {id} =await params;
    let company;
    try {
        const res = await fetch("http://localhost:3000/api/company/" + id);
        const data = await res.json();

        if (data.success) {
            company = data?.data;
        }
    }
    catch (err : any) {
        console.log(err.message);
    }

    return (
        <div className="max-w-full mx-4 bg-gray-900 text-white p-6 m-4 rounded-2xl shadow-lg">
            <h1 className="text-3xl text-blue-300 font-bold mb-3">{company?.name}</h1>
            <p className="text-gray-300 mb-4">{company?.description}</p>

            <h2 className="text-2xl font-semibold mb-3">Openings</h2>
            <ul className="space-y-3">
                {company?.job?.length > 0 ? (
                    company?.job.map((opening : Openings) => (
                        <li
                            key={opening.id}
                            className="bg-gray-800 p-4 rounded-lg border border-gray-700"
                        >
                            <h3 className="text-xl font-bold">{opening.title}</h3>
                            <p className="text-gray-400">{opening.description}</p>
                        </li>
                    ))
                ) : (
                    <li className="text-gray-400">No openings available</li>
                )}
            </ul>
            {user?.id && company?.id && (
                <Review user={user.id} companyid={company.id} />
            )}

        </div>
    );



}