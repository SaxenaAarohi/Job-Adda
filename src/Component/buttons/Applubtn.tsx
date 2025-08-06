//@ts-nocheck
"use client"

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
        <button onClick={handleapply} className="inline-block mt-4 bg-blue-600 text-white text-sm px-4 py-2 rounded-lg hover:bg-blue-700 transition">Apply Now</button>

    )
}