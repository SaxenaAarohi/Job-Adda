//@ts-nocheck
'use client'

import { createContext, useContext, useEffect, useState } from "react";

const SavedJobContext = createContext([]);


export function SaveProvider({ children }) {

  const [savedjob, setSavedjob] = useState([]);

  useEffect(() => {
    const alredypresentdata = JSON.parse(localStorage.getItem("saveditem")) || [];
    setSavedjob(alredypresentdata);
  }, []);

  return (
    <SavedJobContext.Provider value={{ savedjob, setSavedjob }}>
      {children}
    </SavedJobContext.Provider>
  )

}
export function useSavejob() {
  return useContext(SavedJobContext);
}