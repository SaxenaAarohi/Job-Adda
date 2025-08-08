'use client'
//@ts-nocheck
import { getuserfromcookies } from "@/app/helper";
import {  useUser } from "@/Context/Usercontext";
import { useContext, useState } from "react";

export default function AddJobForm() {

  const [title, setTtile] = useState("");
  const [description, setDes] = useState("");
  const [location, setLocation] = useState("");
  const [salary, setSalary] = useState("");
  const [job_type, setJob] = useState("");
  const [emp_type, setemployement] = useState("");
   const { user }  = useUser();
  
  async function handlesubmit(e :  any) {

    
    e.preventDefault();

    const jobdetail = {
      title,
      description,
      location,
      salary,
      job_type,
      employment_type : emp_type,
      compid : user.company.id
    }

    const req = await fetch("http://localhost:3000/api/jobs",{
      method : "POST",
      body : JSON.stringify(jobdetail)
    });
  
    alert ("Saved");

  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-semibold text-white mb-4 text-center">
          Add a new Job
        </h2>

        <form className="space-y-3" onSubmit={handlesubmit}>

          <div>
            <label className="block text-gray-300 mb-1">Job Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTtile(e.target.value)}
              placeholder="Job Title"
              className="w-full px-3 py-2 bg-gray-900 border border-gray-700 rounded-md text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-gray-300 mb-1">Job Description</label>
            <textarea
              placeholder="Job Description"
              value={description}
              onChange={(e) => setDes(e.target.value)}
              className="w-full px-3 py- bg-gray-900 border border-gray-700 rounded-md text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows={2}
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-300 mb-1">Job Location</label>
              <input
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="Job Location"
                className="w-full px-3 py-2 bg-gray-900 border border-gray-700 rounded-md text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-gray-300 mb-1">Job Salary</label>
              <input
                type="text"
                value={salary}
                onChange={(e) => setSalary(e.target.value)}
                placeholder="Job Salary"
                className="w-full px-3 py-2 bg-gray-900 border border-gray-700 rounded-md text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-gray-300 mb-1">Employment Type</label>
            <select
              value={emp_type}
              onChange={(e) => setemployement(e.target.value)}
              className="w-full px-3 py-2 bg-gray-900 border border-gray-700 rounded-md text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select Job Type</option>
              <option>Full-time</option>
              <option>Part-time</option>
              <option>Internship</option>
            </select>
          </div>

          <div>
            <label className="block text-gray-300 mb-1">Job Type</label>
            <select
              value={job_type}
              onChange={(e) => setJob(e.target.value)}
              className="w-full px-3 py-2 bg-gray-900 border border-gray-700 rounded-md text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select Job Category</option>
              <option>On-Site</option>
              <option>Remote</option>
              <option>Hybrid</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md transition duration-200"
          >
            Add Job
          </button>
        </form>
      </div>
    </div>
  );
}
