"use client"
//@ts-nocheck
import { useState } from "react"

export default function View_applicants({ job }) {

    const [isclicked, setIsclicked] = useState(false);
    const [applicants_array, setArr] = useState([]);

    async function handleclick() {

        setIsclicked(true);
        const res = await fetch("http://localhost:3000/api/applicants/" + job.id)
        const data = await res.json();

        if (data.success) {
            setArr(data?.data);
        }
        else{
            alert("something went wrong")
        }
    }

    return (
        <>
            <button onClick={handleclick} className="inline-block mt-4 bg-blue-600 text-white text-sm px-4 py-2 rounded-lg hover:bg-blue-700 transition">View Applicants</button>
            {
               isclicked && (
                    applicants_array.map((i) => (

                        <p className=" h-auto w-full text-black">{i?.user.email}</p>

                    ))
                )}
        </>


    )
}