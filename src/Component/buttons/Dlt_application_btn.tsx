//@ts-nocheck
import { BiTrash } from "react-icons/bi"

export default function Appdltbtn({job}) {

   async function handleclick()
    {

    const res = await fetch("http://localhost:3000/api/applicants/byapplicant" + job?.id , {
        method : "DELETE"
    });
    const data = await res.json();

    if(data.success){
        alert("Deleted Successfully");
    }
    else{
        alert(data.messgae);
    }


    }

    return (
        <button onClick={handleclick} title="Delete Application"> <BiTrash /></button>
    )
}