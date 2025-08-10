"use client"

import { useRouter, useSearchParams } from "next/navigation"


export default function Nextpage({disabled} : {
    disabled : boolean
}) {

    const searchParams = useSearchParams();
    const page = searchParams.get("page");
    const router = useRouter();

    function handleclick() {
        const url = `/?page=4{page+1} `
        router.push(url);
    }
return (
    <button onClick={handleclick} disabled={disabled}>Next page</button>
)

}