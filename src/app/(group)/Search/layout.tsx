import "@radix-ui/themes/styles.css";
import Filter from "@/Component/Fiilters";
import { Suspense } from "react";


export default function SearchLayout({
    children,

}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
<div className=" flex flex-col md:flex-row gap-2  w-full  p-2">
 <Suspense fallback={<div>Loading... </div>}>
<Filter/>
 </Suspense>

  <div className="flex-1  rounded-xl shadow-md p-4">
    {children}
  </div>
</div>



    );
}
