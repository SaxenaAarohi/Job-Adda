// 'use client'

// import { createContext, useContext, useEffect, useState } from "react";
// import { Savejob } from "../../generated/prisma";

// type saveContextType = {
//   savedjob : Savejob | null,
//   setSavedjob : ((x : Savejob | null)=>void) | null
// }

// const SavedJobContext = createContext<saveContextType>({
//   savedjob : null,
//   setSavedjob : null
// });


// export function SaveProvider({ children } : any) {

//   const [savedjob, setSavedjob] = useState<Savejob | null>([]);

//   useEffect(() => {
//     const alredypresentdata = JSON.parse(localStorage.getItem("saveditem")) || [];
//     setSavedjob(alredypresentdata);
//   }, []);

//   return (
//     <SavedJobContext.Provider value={{ savedjob, setSavedjob }}>
//       {children}
//     </SavedJobContext.Provider>
//   )

// }
// export function useSavejob() {
//   return useContext(SavedJobContext);
// }