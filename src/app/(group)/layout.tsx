//@ts-nocheck
"use client"
import Header from "@/Component/Header";
import Hero from "@/Component/Hero";

export default function Layout({ children }) {

    return (
        <div>
                <Header />
            <Hero/>
                {children}



        </div>
    )
}
