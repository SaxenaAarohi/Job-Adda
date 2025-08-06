"use client"
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Signup() {

    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState("");

    async function handlesubmit(e: React.FormEvent) {

        e.preventDefault();

        try {
            const res = await fetch("/api/signup", {
                method: "POST",
                body: JSON.stringify({
                    email,
                    password,
                    role
                })
            })

            const data = await res.json();

            if (data?.success) {
                alert("Signed up");
                router.push("/");
            }

        }
        catch(err : any){
            alert(err.message);

        }
     

    }


    return (
        <div className="min-h-screen flex items-center justify-center text-black bg-gray-100 p-4">
            <div className="bg-white shadow-lg rounded-2xl w-full max-w-md p-8">
                <h1 className="text-2xl font-bold text-center  mb-6">Sign Up</h1>

                <form className="space-y-5" onSubmit={handlesubmit}>

                    <div>
                        <label className="block text-gray-700 font-medium mb-1">Email</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email"
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-gray-700 font-medium mb-1">Password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Enter your password"
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-gray-700 font-medium mb-1">Role</label>
                        <select
                            value={role}
                            onChange={(e) => setRole(e.target.value)}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        >
                            <option value="">Select role</option>
                            <option value="adminr">Admin</option>
                            <option value="user">User</option>
                        </select>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-2 rounded-lg font-medium hover:bg-blue-600 transition"
                    >
                        Sign Up
                    </button>
                </form>

                <p className="text-center text-gray-500 text-sm mt-4">
                    Already have an account?{" "}
                    <a href="/login" className="text-blue-500 hover:underline">
                        Login
                    </a>
                </p>
            </div>
        </div>

    )
}