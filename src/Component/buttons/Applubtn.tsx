//@ts-nocheck
"use client"

import { RiTelegram2Fill } from "react-icons/ri";

export default function Applybtn({job}) {

    async function handleapply() {

        try {
            const res = await fetch(`/api/jobs/${job?.id}/apply`);
            const data = await res.json();

            if (data.success) {
                alert("Applied succesfully");
            }
            else {
                alert("sowmthing went wrong");
            }

        }
        catch (err) {
            console.log(err.message);
        }

    }

    return (
        <button onClick={handleapply} className="flex items-center gap-2 text-xl text-gray-200 py-1 bg-blue-500 px-1 mt-4 " title="Apply for job"><RiTelegram2Fill />Apply</button>

    )
}