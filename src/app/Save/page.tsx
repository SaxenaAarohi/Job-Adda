//@ts-nocheck
'use client'

import JobCard from "@/Component/Display";
import { Savejobdisplay } from "@/Component/Savejobdisplay";
import { useSavejob } from "@/Context/Savecontext";
import { useEffect, useState } from "react";

export default function Savepage() {
    
       const { savedjob } = useSavejob();
    
    return (

        <div className="flex gap-4 pt-5 justify-center flex-wrap">
            {savedjob.map((job) => (
                <Savejobdisplay key={job.id} job={job} />
            ))}
        </div>

    )
}