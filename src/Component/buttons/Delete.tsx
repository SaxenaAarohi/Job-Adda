"use client"
import { useUser } from "@/Context/Usercontext"
import { useContext } from "react"
import { FaTrashAlt } from "react-icons/fa";
import DialogDemo from "./View_applicants";
import View_applicants from "./View_applicants";
import Applybtn from "./Applubtn";
import { Company, Openings, user } from "../../../generated/prisma";

type User = {
  id: string;
  email: string;
  password?: string; 
  role: string
};

type UserWithCompany = {
  user: User;
  company?: Company | null;
};


export default function Editnddlt({ job , user} : {
    job : Openings,
    user : UserWithCompany | null
}) {


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


    if(!user) return <p></p>


        return (
            <div className="flex gap-5">
                
                <button onClick={handledlt}><FaTrashAlt /></button>
                
            </div>

        )


   




}