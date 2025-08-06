//@ts-nocheck
"use client"
import { createContext, useEffect, useState } from "react";
import Header from "@/Component/Header";
import { UserContext } from "@/Context/Usercontext";

export default function Layout({ children }) {

    const [user, setUser] = useState("");

    useEffect(() => {
        async function getdata() {
            const res = await fetch("/api/current-user");
            const data = await res.json();

            if (data?.success) {
                setUser(data.data)
            }
    
        }
        getdata();
    }, []);

    return (
        <div>
            <UserContext.Provider value={{user , setUser}}>
                <Header />
                {children}
            </UserContext.Provider>

        </div>
    )
}
