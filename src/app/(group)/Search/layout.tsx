import "@radix-ui/themes/styles.css";
import Filter from "@/Component/Fiilters";


export default function SearchLayout({
    children,

}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
<div className="flex gap-2 w-full  p-2">
 
  <Filter/>
  <div className="flex-1  rounded-xl shadow-md p-4">
    {children}
  </div>
</div>



    );
}
