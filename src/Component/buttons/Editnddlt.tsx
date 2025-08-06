//@ts-nocheck
"use client"
import { UserContext } from "@/Context/Usercontext"
import { useContext } from "react"
import DialogDemo from "./View_applicants";
import View_applicants from "./View_applicants";
import Applybtn from "./Applubtn";
import Edit from "./Editbtn";

export default function Editnddlt({ job }) {


    async function handledlt() {

        try {

            const res = await fetch("/api/detail/" + job.id, {
                method: "DELETE"
            });

            const data = await res.json();

            if (data.success) {
                alert("deleted successfully");
            }
            else {
                alert("Something went");
            }
        }
        catch (err: any) {
            console.log(err.messgae);
        }
    }


  
    const { user } = useContext(UserContext);

    if (user?.company?.id == job?.company?.id) {

        return (
            <div className="flex gap-5">
                
                <button onClick={handledlt} className="inline-block mt-4 bg-red-600 text-white text-sm px-4 py-2 rounded-lg hover:bg-red-900 transition">Delete</button>
                <Edit job={job}/>
            </div>

        )

    }
    else
        return null




}