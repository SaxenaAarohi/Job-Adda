//@ts-nocheck
import prismaClient from "@/services/prisma";
import JobCard from "../../Component/Display";
import Company from "./company/page";

export default async function Home({searchParams}) {

  const jobs = await prismaClient.openings.findMany({
    include : {
      company : true
    }
  });


  return (
    <div className="flex p-4 gap-5 justify-center flex-wrap">
      {jobs.map((job) => (
        <JobCard key={job.id} job={job} company={job.company} />
      ))}
     {/* // <Nextpage disabled={jobs.length < 3}/> */}
    </div>
  );
}