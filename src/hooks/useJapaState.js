"use client";

import { JapaStateContext } from "@/context/JapaStateContext";
import { useContext } from "react";

export const useJapaState = () => {
    const context = useContext(JapaStateContext);
    if(!context){
      throw new Error("JapaState must be used within JapaStateProvider.");
    }
    return context;
}