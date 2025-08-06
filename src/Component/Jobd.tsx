import { getuserfromcookies } from "@/app/helper"
import prismaClient from "@/services/prisma"
import JobCard from "./Display";

export default async function Jobs() {

    const user = await getuserfromcookies();
     
    const comp = user?.company;
    const compname = comp?.job;
    
    
   
    return (
        <div className="text-white text-5xl">
    {compname?.map((i)=>(
        <JobCard key={i.id} job={i} />
    ))}
        </div>
    )
}