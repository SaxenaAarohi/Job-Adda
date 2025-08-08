//@ts-nocheck
import JobCard from "@/Component/Display";
import prismaClient from "@/services/prisma";
import { getuserfromcookies } from "../helper";

export default async function Page() {

    const user = await getuserfromcookies();
    if (!user) return <div>user not found </div>

    const applications = await prismaClient.application.findMany({
        where: {
            user_id: user.id
        },
        include: {
            job: true
        }
    });

    if (applications.length == 0) {
        return (
            <div>No Jobs applied</div>
        )
    }
    return (
        <div className="flex flex-wrap gap-6 justify-center mt-4">

            {
                applications.map((i) => {
                    return (
                        <div key={i.id}>
                            <JobCard job={i.job} isapply={true}/>
                        </div>
                    )
                })
            }
        </div>
    )
}
