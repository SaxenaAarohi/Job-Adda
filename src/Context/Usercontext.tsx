
"use client"
import { createContext } from "react";
import { useState,useEffect } from "react";
import { useContext } from "react";
import { Company } from "../../generated/prisma";

type User = {
  id: string;
  email: string;
  password?: string; 
  role: string
};

type UserWithCompany = {
  user: User;
  company?: Company | null;
};

type UsercontextType = {
  user : UserWithCompany | null ; 
  setUser : ((user : UserWithCompany | null ) => void) | null
}

const Usercontext = createContext<UsercontextType>({
  user : null,
  setUser : null
});
 
 export function UserProvider({ children } : any) {
 
 const [user, setUser] = useState<UserWithCompany | null>(null);

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

