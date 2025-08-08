import { Openings } from "../../generated/prisma";
import { Company } from "../../generated/prisma";
 import Link from "next/link";
import Savejobdlt from "./buttons/Dltsavejob";

export function Savejobdisplay({job} : {
    job : Openings,
}){
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
         
        <Savejobdlt job={job}/>  

        </div>

        <p className="text-sm mt-2 text-gray-200">
          📍 {job.location} | 💼 {job.employment_type}
        </p>


        {job.description && (
          <p className="text-sm text-gray-300 mt-3 line-clamp-3">
            {job.description}
          </p>
        )}
    
        <Link href={`/Detail/${job.id}`} className="text-center inline-block mt-4 bg-blue-600 text-white text-sm px-4 py-2 rounded-lg hover:bg-blue-700 transition"> Detail
        </Link>
      </div>


    </div>
  );
}