//@ts-nocheck
"use client"
import Header from "@/Component/Header";
import { UserProvider } from "@/Context/Usercontext";

export default function Layout({ children }) {

    return (
        <div>
                <Header />
                {children}



        </div>
    )
}
