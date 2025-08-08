//@ts-nocheck
'use client'
import { useSavejob } from "@/Context/Savecontext";
import { useUser } from "@/Context/Usercontext";
import Link from "next/link";
import Appdltbtn from "./buttons/Dlt_application_btn";
import Edit from "./buttons/Editbtn";
import { useEffect, useState } from "react";
import { Company, Openings } from "../../generated/prisma";
import Editnddlt from "./buttons/Delete";
import Savebtn from "./buttons/Savebtn";

export default function JobCard({ job, company, isapply , saved }: {
  job: Openings
  company?: Company
  isapply?: boolean
  saved? : boolean
}) {

  const { user } = useUser();

  return (
    <div>

      <div
        key={job.id}
        className="flex flex-col bg-gray-900 w-[400px] rounded-2xl shadow-md p-5  hover:shadow-lg transition-shadow border border-gray-800"
      >

        <div className="flex items-start justify-between">

          <h2 className="text-lg text-white font-bold text-gray-800 line-clamp-1">
            {job.title}
          </h2>

          {user?.user?.role == "admin" &&
            user?.company?.id == job?.company?.id &&
            (
              <div className="flex gap-6 ml-4">
                <Edit job={job} />
                <Editnddlt job={job} user={user} />
              </div>
            )
          }
          {isapply && (
            <div>
              <Appdltbtn job={job} />
            </div>
          )}

        </div>

        {
          company ? <Link className="text-sm text-gray-100" href={`/comp_detail/${company.id}`} >{company?.name}</Link> : <p></p>

        }

        <p className="text-sm mt-2 text-gray-200">
          📍 {job.location} | 💼 {job.employment_type}
        </p>

        {job.description && (
          <p className="text-sm text-gray-300 mt-3 line-clamp-3">
            {job.description}
          </p>
        )}

        {user?.role != "admin" && 
        <Savebtn jobid={job.id} saved={saved}/>
        }


        <Link href={`/Detail/${job.id}`} className="text-center inline-block mt-4 bg-blue-600 text-white text-sm px-4 py-2 rounded-lg hover:bg-blue-700 transition"> Detail
        </Link>





      </div>

    </div>
  );
}