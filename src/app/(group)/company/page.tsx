"use client"
import { useState } from "react"
import { useRouter } from "next/navigation";

export default function Company() {

    const router = useRouter();
    const [name, setName] = useState("");
    const [des, setDes] = useState("");

    async function handlesubmit(e : any) {
       
        e.preventDefault();

        const company = {
            name,
            description : des
        }

        const res = await fetch("/api/company", {
            method: "POST",
            body: JSON.stringify(company)
        });

        //const data = await res.json();

         alert("Submitted");
         router.push("/");
    }

    return (
       <div className="max-w-md mx-auto mt-10 p-6 bg-gray-800 text-white rounded-xl shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-center">Add Company</h2>
      <form onSubmit={handlesubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-200">
            Company Name
          </label>
          <input
            type="text"
            className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter company name"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-200">
            Description
          </label>
          <textarea
            className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={des}
            onChange={(e) => setDes(e.target.value)}
            placeholder="Enter company description"
            rows={4}
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition"
        >
          Add Company
        </button>
      </form>
    </div>
    )
}