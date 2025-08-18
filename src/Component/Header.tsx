'use client'

import { useUser } from "@/Context/Usercontext";
import Link from "next/link";
import { useEffect, useState } from "react";
import { BiLogIn, BiSave } from "react-icons/bi";
import { CgUser } from "react-icons/cg";
import { FaBeer } from 'react-icons/fa';
import { GiHamburgerMenu } from "react-icons/gi";
import { IoAdd } from "react-icons/io5";
import { Company } from "../../generated/prisma";

type Item = {
    id : string;
    title : string;
};

export default function Header() {

    const { user }  = useUser();

    const [isOpen, setIsOpen] = useState(false);
    const [query, setQuery] = useState("");
    const [suggestions, setsugg] = useState([]);

    useEffect(() => {
        async function getsuggest() {

            const fetchreq = await fetch(`http://localhost:3000/api/suggestions?q=${query}`);
            const data = await fetchreq.json();

            if (data.success) {
                setsugg(data.suggestions);
            }

        }


        const timer = setTimeout(getsuggest, 1000);

        return () => clearTimeout(timer);


    }, [query])


    return (
        <div className="h-15 bg-gray-900 text-black py-1 flex justify-between px-4">

            <div>
                <img className="h-[30px] mt-3 md:h-[26px] w-16 md:w-20 "
                    src={"data:image/jpeg;base64,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"} />
            </div>

            <div className="flex relative">

                <input type="text"
                    value={query}
                    className="md:w-[400px] w-[200px] border bg-gray-300 h-8 my-2 p-2"
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search Job" />

                <Link
                    href={`/Search?q=${query}`}
                    className="bg-blue-800 h-8 my-2 p-1 md:p-2 "
                >
                    Search
                </Link>

                {suggestions.length > 0 && (
                    <ul className="absolute top-10 left-0 md:w-[400px] w-[200px] bg-gray-200 border rounded-b-md shadow-md z-50">
                        {suggestions.map((item : Item

                        ) => (
                            <li
                                key={item.id}
                                className="p-2 hover:bg-gray-400 truncate cursor-pointer"
                                onClick={() => setQuery(item.title)}
                            >
                                {item.title}
                            </li>
                        ))}
                    </ul>
                )}

            </div>

            <button
                className="text-white text-2xl md:hidden"
                onClick={() => setIsOpen(!isOpen)}
            >
                 <GiHamburgerMenu /> 
            

            </button>

      {isOpen && (
        <div className="absolute right-4 top-10 mt-2 w-32 bg-gray-300 rounded-lg shadow-lg flex flex-col z-40 space-y-2 p-3 md:hidden">
          {
                    user?.user?.role === "admin" ?
                        (!user.company
                            ? <Link href="/company" title="Add Company">  Add Company </Link>
                            : <Link href={"/addjob"} title="Add Job"> Add Job</Link>)
                        : (
                            <>
                                <Link href={"/Save"} title="Saved jobs">Saved Job</Link>
                                <Link href={"/applied_job"} title={"Applied jobs"}>Applied Jobs </Link>
                            </>

                        )

                }
                 <Link href={"/Login"} title="Sign-in">Sign-in</Link>

                <Link href={"/"}> {user ? (user?.user?.email) : "No user"} </Link>
        </div>
      )}



            <div className="md:flex hidden gap-4 text-2xl text-white py-4">
                {
                    user?.user?.role === "admin" ?
                        (!user.company
                            ? <Link href="/company" title="Add Company">  <IoAdd />  </Link>
                            : <Link href={"/addjob"} title="Add Job">< IoAdd /></Link>)
                        : (
                            <>
                                <Link href={"/Save"} title="Saved jobs"><BiSave /></Link>
                                <Link href={"/applied_job"} title={"Applied jobs"}>< FaBeer /> </Link>
                            </>

                        )

                }

                <Link href={"/Login"} title="Sign-in"><BiLogIn /></Link>

                <Link href={"/"} title={user ? (user?.user?.email) : "No user"} ><CgUser /> </Link>

            </div>

        </div>
    )

}