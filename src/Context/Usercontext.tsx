//@ts-nocheck
"use client"
import { createContext } from "react";
import { useState,useEffect } from "react";
import { useContext } from "react";

const Usercontext =createContext(null);
 
 export function UserProvider({ children } : any) {
 
 const [user, setUser] = useState(null);

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
     <Usercontext.Provider value={{ user, setUser }}>
       {children}
     </Usercontext.Provider>
   )
 
 }
 export function useUser() {
   return useContext(Usercontext);
 }

