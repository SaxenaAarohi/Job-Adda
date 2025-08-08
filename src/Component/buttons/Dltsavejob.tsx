//@ts-nocheck
"use client"
import { CgTrash } from "react-icons/cg"
export default function Savejobdlt({job}){

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
    <button onClick={handledlt}><CgTrash/></button>
)

}