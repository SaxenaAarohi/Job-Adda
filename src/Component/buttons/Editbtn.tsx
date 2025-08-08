"use client"
import { useState } from "react";
import { Openings } from "../../../generated/prisma";
import { FaPencil } from "react-icons/fa6";

export default function Edit({ job }: {
    job: Openings
}) {

    const [isOpen, setIsOpen] = useState(false);
    const [title, setTitle] = useState(job.title);
    const [location, setLocation] = useState(job.location);
    const [employmentType, setEmploymentType] = useState(job.employment_type);
    const [description, setDescription] = useState(job.description);
    const [job_type, setJobtype] = useState(job.job_type);

    async function handlesubmit(e: any) {
        e.preventDefault();

        const updatedJob = {
            title,
            location,
            employment_type: employmentType,
            description,
            job_type
        };

        try {

            const res = await fetch(`/api/detail/${job.id}`, {
                method: "POST",
                body: JSON.stringify(updatedJob)
            })

            //  const data = await res.json();
            //       console.log("yha tk aagy");
            //  if(data.success){
            //     alert("updated");
            //  }
            //  else{
            //     alert("Something went wrong");
            //  }

        }
        catch (err: any) {
            console.log(err.message);
        }

        setIsOpen(false);

    }

    return (
        <>

            <button onClick={() => setIsOpen(true)} ><FaPencil />
            </button>

            {isOpen && (
                <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
                    <div className="bg-gray-900  rounded-xl p-6 w-full max-w-lg shadow-lg">
                        <h2 className="text-xl font-bold mb-4">Edit Job</h2>

                        <form onSubmit={handlesubmit} className="space-y-4">
                            <input
                                type="text"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                className="w-full border rounded p-2"
                                placeholder="Job Title"
                            />

                            <input
                                type="text"
                                value={location}
                                onChange={(e) => setLocation(e.target.value)}
                                className="w-full border rounded p-2"
                                placeholder="Location"
                            />

                            <input
                                type="text"
                                value={employmentType}
                                onChange={(e) => setEmploymentType(e.target.value)}
                                className="w-full border rounded p-2"
                                placeholder="Employment Type"
                            />

                            <input
                                type="text"
                                value={job_type}
                                onChange={(e) => setJobtype(e.target.value)}
                                className="w-full border rounded p-2"
                                placeholder="Job Type"
                            />

                            <textarea
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                className="w-full border rounded p-2"
                                placeholder="Job Description"
                            />

                            <div className="flex justify-end gap-4">
                                <button
                                    type="button"
                                    onClick={() => setIsOpen(false)}
                                    className="px-4 py-2 bg-gray-300 text-black rounded-lg"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="px-4 py-2 bg-green-500 text-white rounded-lg"
                                >
                                    Save
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

        </>

    )
}