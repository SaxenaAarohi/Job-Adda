"use client"
//@ts-nocheck
import { useRouter, useSearchParams } from "next/navigation"


export default function Nextpage({disabled}) {

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