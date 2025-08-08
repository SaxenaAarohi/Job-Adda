//@ts-nocheck
"use client"

import { useState } from "react"
import { BsTrash } from "react-icons/bs";

export default function View_applicants({ job }) {

    const [isclicked, setIsclicked] = useState(false);
    const [applicants_array, setArr] = useState([]);


    function closeModal() {
        setIsclicked(false);
        setArr([]);
    }


    async function handleclick() {

        setIsclicked(true);
        const res = await fetch("http://localhost:3000/api/applicants/byapplicant/" + job.id)
        const data = await res.json();

        if (data.success) {
            setArr(data?.data);
        }
        else {
            alert("something went wrong")
        }
    }


   async function handledlt(id){
       
    const res = await fetch("/api/applicants/byowner/" + id ,{
        method : "DELETE"
    });
    const data = await res.json();

    if(data.success){
        alert("Deleted Successfully");
    }

    }

    return (
        <>
            <button onClick={handleclick} className="inline-block mt-4 bg-blue-600 text-white text-sm px-4 py-2 rounded-lg hover:bg-blue-700 transition">View Applicants</button>
            {
                isclicked && (
                    <div className="fixed inset-0 backdrop-blur-sm bg-white/10 flex justify-center items-center z-50">
                        <div className="bg-white text-black rounded-lg p-6 max-w-md w-full relative">
                            <h2 className="text-lg font-bold mb-4">Applicants</h2>

                            <button
                                onClick={closeModal}
                                className="absolute top-2 right-3 text-gray-500 hover:text-black text-xl"
                            >
                                &times;
                            </button>

                            {applicants_array.length > 0 ? (
                                <ul className="space-y-2">
                                    {applicants_array.map((i) => (
                                        <li key={i.id} className="text-gray-800 border-b pb-1">
                                            <div className="flex justify-between">
                                                {i?.user?.email}
                                                <button title="Delete Application" onClick={()=>handledlt(i?.user?.id)}><BsTrash/></button>
                                            </div>

                                        </li>
                                    ))}
                                </ul>
                            ) : (
                                <p className="text-gray-600">No applicants found.</p>
                            )}
                        </div>
                    </div>
                )}
        </>


    )
}