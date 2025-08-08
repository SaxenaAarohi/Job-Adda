//@ts-nocheck

import { getuserfromcookies } from "@/app/helper";
import Applybtn from "@/Component/buttons/Applubtn";
import View_applicants from "@/Component/buttons/View_applicants";
import prismaClient from "@/services/prisma";

export default async function Detail({ params }) {

  const id = params.id;
  const decodeid = decodeURIComponent(id);

  const res = await fetch(`http://localhost:3000/api/detail/${decodeid}`);
  const data = await res.json();
   const datatodisplay = data?.data;

   const user = await getuserfromcookies();

   let userhasAplied= false;

   if(user){
    const app = await prismaClient.application.findMany({
      where : {
        job_id : id,
        user_id : user.id
      }
    })
    if(app.length>0) userhasAplied = true;
   }


  return (
    <div className=" mx-auto p-6 max-w-4xl  ">

      <div className="bg-gray-900  text-white rounded-2xl shadow-lg p-6 border border-gray-200">

        <h1 className="text-2xl font-bold  mb-2">
          {datatodisplay.title}
        </h1>


        <p className="text-gray-300 text-lg mb-4">
          {datatodisplay.company?.name}
        </p>

        <div className="flex flex-wrap gap-4 text-sm text-gray-300 mb-4">
          <span>📍 {datatodisplay.location}</span>
          <span>💼 {datatodisplay.employment_type}</span>
        </div>


        {datatodisplay.description && (
          <p className="text-gray-200 leading-relaxed">
            {datatodisplay.description}
          </p>
        )}

        <div className="flex gap-4">
          {
            user.role != "admin" && !userhasAplied  && <Applybtn job={datatodisplay} /> 
          }
          {
            user?.company?.id == datatodisplay?.company?.id &&  <View_applicants job={datatodisplay} />
          }
         
        </div>

      </div>
    </div>
  );
}