
"use client"
import Header from "@/Component/Header";
import Hero from "@/Component/Hero";

export default function Layout({ children } : { children: React.ReactNode }) {

    return (
        <div>
                <Header />
                {children}



        </div>
    )
}
