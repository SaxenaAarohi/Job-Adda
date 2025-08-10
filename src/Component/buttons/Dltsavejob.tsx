"use client"
import { CgTrash } from "react-icons/cg"
import { Openings } from "../../../generated/prisma";
export default function Savejobdlt({job} : {
    job : Openings
}){

async function handledlt(){

    const res = await fetch(`/api/jobs/${job.id}/save`,{
        method : "DELETE"
    });
    const data = await res.json();
    if(data.success){
        alert("Delted");
    }
    else{
        alert(data.message);
    }
    
}

return (
    <button onClick={handledlt} title="Delete Saved Job"><CgTrash/></button>
)

}