//@ts-nocheck
import { getuserfromcookies } from "@/app/helper"
import prismaClient from "@/services/prisma"
import JobCard from "@/Component/Display";

export default async function Jobs() {

    const user = await getuserfromcookies();

    const comp = user?.company;
    const jobs_of_comp = comp?.job; 

    return (
        <div className="text-white flex flex-wrap gap-7 justify-center mt-4 text-5xl">
            {comp &&
            jobs_of_comp?.map((i) => (
                <JobCard key={i.id} job={i} company={comp} />
            ))}
        </div>
    )
}