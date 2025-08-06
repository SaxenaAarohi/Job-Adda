"use client"
import { useState } from "react"

export default function Company() {

    const [name, setName] = useState("");
    const [des, setDes] = useState("");

    async function handlesubmit(e : any) {
       
        e.preventDefault();

        const company = {
            name,
            description : des
        }

        const res = await fetch("/api/company", {
            method: "POST",
            body: JSON.stringify(company)
        });

        //const data = await res.json();

         alert("Submitted")
    }

    return (
        <div>
            <form onSubmit={handlesubmit}>

                <input
                    placeholder="Add name"
                    value={name}
                    name="name"
                    onChange={(e) => setName(e.target.value)}
                />

                <input
                    placeholder="Add description"
                    value={des}
                    name="des"
                    onChange={(e) => setDes(e.target.value)}
                />

                <button> Submit </button>
            </form>
        </div>
    )
}