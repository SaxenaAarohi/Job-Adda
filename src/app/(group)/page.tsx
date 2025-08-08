//@ts-nocheck
import prismaClient from "@/services/prisma";
import JobCard from "../../Component/Display";
import Company from "./company/page";

export default async function Home({ searchParams }) {

  const jobs = await prismaClient.openings.findMany({
    include: {
      company: true
    }
  });

  const jobsid = jobs.map((i) => i.id);

  const alreadysave = await prismaClient.savejob.findMany({
    where: {
      job_id: {
        in: jobsid
      }
    }
  });
   
    const savedjobsid =new Set(alreadysave.map((i) => i.job_id));

  return (
    <div className="flex p-4 gap-5 justify-center flex-wrap">
      {jobs.map((job) => (
          <JobCard key={job.id} job={job} company={job.company} saved={ savedjobsid.has(job.id)} />
      ))}
    </div>
  );
}