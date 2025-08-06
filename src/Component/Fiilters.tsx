'use client'
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react"

export default function Filter() {

    const searchParams = useSearchParams();
    const router = useRouter();

    const jt = searchParams.get("jt");
    const et = searchParams.get("et");
    const q = searchParams.get("q");
    const ms = searchParams.get("ms");

    const [jobType, setJobtype] = useState(jt || "On-Site");
    const [emp_type, sstEmptype] = useState(et || "Full-time");
    const [minSalary, setMinSalary] = useState(ms || 40000);

    function handlesubmit() {

        const url = `/Search?q=${q}&jt=${jobType}&et=${emp_type}&ms=${minSalary}`
        router.push(url);

    }

    return (
        <div className="bg-gray-800 w-64 rounded-xl shadow-md p-4">
            <h2 className="font-semibold mb-2">Filter</h2>

            <div className="mb-8">
                <h3 className="font-semibold mb-2">Job Type</h3>
                {["On-Site", "Remote", "Hybrid"].map((type) => (
                    <label key={type} className="flex items-center gap-2 mb-1 cursor-pointer">
                        <input
                            type="radio"
                            checked={jobType === type}
                            onChange={(e) =>
                                setJobtype(e.target.checked ? type : "")
                            }
                            className="w-4 h-4"
                        />
                        {type}
                    </label>
                ))}
            </div>
            <div>
                <h3 className="font-semibold mb-2">Employment Type</h3>
                {["Full-time", "Part-time", "Internship"].map((type) => (
                    <label key={type} className="flex items-center gap-2 mb-1 cursor-pointer">
                        <input
                            type="radio"
                            checked={emp_type === type}
                            onChange={(e) =>
                                sstEmptype(e.target.checked ? type : "")
                            }
                            className="w-4 h-4"
                        />
                        {type}
                    </label>
                ))}
            </div>

            <div className="mt-8">
                <h3 className="font-semibold mb-2">Minimum Salary</h3>
                <input
                    type="range"
                    min="20000"
                    max="200000"
                    step="5000"
                    value={minSalary}
                    onChange={(e) => setMinSalary(Number(e.target.value))}
                    className="w-full accent-blue-500"
                />
                <div className="text-sm text-gray-500 mt-1">
                    Selected: <span className="font-semibold">₹{minSalary.toLocaleString()}</span>
                </div>
            </div>

            <button
                onClick={handlesubmit}
                className="px-4 w-full mt-8 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition"
            >
                Apply Filters
            </button>

        </div>

    )
}