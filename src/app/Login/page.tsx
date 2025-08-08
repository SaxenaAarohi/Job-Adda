'use client'
import { METHODS } from "http";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { json } from "stream/consumers";

export default function Login() {

  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch("/api/login",
     {
      method : "POST",
      body : JSON.stringify({
        email,
        password
      })
     })
      
     const data = await res.json();

     if(data?.success){
      alert("Logged in");
      router.push("/");
     }
     else{
      alert(data?.message);
     }
    
  };

  return (
    <div className="flex text-black items-center justify-center min-h-screen bg-gray-50">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-sm border border-gray-200">
  
        <h2 className="text-2xl font-bold text-center text-gray-800">
          Login to Your Account
        </h2>
        <p className="text-sm text-gray-500 text-center mt-1 mb-6">
          Access your job search dashboard
        </p>

   
        <form onSubmit={handleLogin} className="space-y-4">
  
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Login
          </button>
        </form>


        <p className="text-sm text-gray-500 text-center mt-4">
          Don't have an account?{" "}
          <a href="/signup" className="text-blue-600 hover:underline">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
}
