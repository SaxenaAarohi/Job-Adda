//@ts-nocheck
import JobCard from "../../../Component/Display";
import prismaClient from "@/services/prisma";
import Company from "../company/page";

export default async function Search({ searchParams }) {

    const q = searchParams.q;
    const jt = searchParams.jt || '';
    const et = searchParams.et || '';
    const ms = searchParams.ms || "";


    const results = await prismaClient.openings.findMany({
        where: {
        AND: [
            {
                OR: [
                    {
                        title: {
                            contains: q,
                            mode: "insensitive"
                        }
                    },
                    {
                        company: {
                            name: {
                                contains: q,
                                mode: "insensitive"
                            }
                        }
                    }
                ]
            },
            ...(jt ? [{ job_type: { equals: jt, mode: "insensitive" } }] : []),
            ...(et ? [{ employment_type: { equals: et, mode: "insensitive" } }] : []),
            ...(ms ? [{ salary: ms }] : [])
        ]
    },
    include: {
        company: true
    }
    });

    return (
        <div className="flex flex-wrap gap-5 justify-center md:py-4 py-1">
            {results.map((job) => (
                <JobCard key={job.id} job={job} />
            ))}
        </div>


    )
}