//@ts-nocheck
'use client'
import { useSavejob } from "@/Context/Savecontext";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import Editnddlt from "./buttons/Editnddlt";
import { Openings } from "../../generated/prisma";
import { Company } from "../../generated/prisma";

export default function JobCard({ job, company } : {
  job : Openings
  company? : Company
}) {

  const [issaved, setIssaved] = useState(false);
  const { savedjob, setSavedjob } = useSavejob();

  function handlesave(job : Openings) {
     localStorage.setItem("saveditem", JSON.stringify([...savedjob, job]));
    setSavedjob([...savedjob, job]);
     setIssaved(true);

  }

  useEffect(() => {

    const presentdata = JSON.parse(localStorage.getItem("saveditem")) || [];
    const ispresnt = presentdata.find((i) => i.id == job.id);
    
    if (ispresnt)
      setIssaved(true);

  }, [])

  return (
    <div>

      <div
        key={job.id}
        className="flex flex-col bg-gray-900 w-[400px] rounded-2xl shadow-md p-5  hover:shadow-lg transition-shadow border border-gray-800"
      >

        <h2 className="text-lg text-white font-bold text-gray-800 line-clamp-1">
          {job.title}
        </h2>


        <Link className="text-sm text-gray-100" href={`/comp_detail/${company.id}`} >{company?.name}</Link>


        <p className="text-sm mt-2 text-gray-200">
          📍 {job.location} | 💼 {job.employment_type}
        </p>


        {job.description && (
          <p className="text-sm text-gray-300 mt-3 line-clamp-3">
            {job.description}
          </p>
        )}

        {
          issaved ? <button className="inline-block mt-4 bg-blue-600 text-center text-white text-sm px-4 py-2 rounded-lg hover:bg-blue-700 transition"> Saved </button>
            : <button
              onClick={() => handlesave(job)}
              className="inline-block mt-4 bg-blue-600 text-center text-white text-sm px-4 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Save job
            </button>
        }


        <Link href={`/Detail/${job.id}`} className="text-center inline-block mt-4 bg-blue-600 text-white text-sm px-4 py-2 rounded-lg hover:bg-blue-700 transition"> Detail
        </Link>
        <Editnddlt job={job}/>
        
    
      </div>

    </div>
  );
}