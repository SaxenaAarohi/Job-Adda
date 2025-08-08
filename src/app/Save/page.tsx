//@ts-nocheck
import { Savejobdisplay } from "@/Component/Savejobdisplay";
import prismaClient from "@/services/prisma";
import { getuserfromcookies } from "../helper";

export default async function Savepage() {

    const user = await getuserfromcookies();
    
    const savedjobs = await prismaClient.savejob.findMany({
        where: {
            user_id: user?.id
        }
    });
    const jobIds = savedjobs.map((saved) => saved.job_id);

const jobs = await prismaClient.openings.findMany({
  where: {
    id: {
      in: jobIds,
    },
  },
});


    return (

        <div className="flex gap-4 pt-5 justify-center flex-wrap">
            {jobs?.map((job) => (
                <Savejobdisplay key={job.id} job={job} />
            ))}
        </div>

    )
}