"use client"
import { SelectableCountries2 } from "@/app/components/SelectableCountries2";
import { SelectableCountries } from "../../components/SelectableCountries";
import { useState, useEffect } from "react";
export default function page(){
    const [currentHovered, setCurrentHovered] = useState("")

    useEffect(()=>{
        console.log(currentHovered)
    },[currentHovered])
    return(
        <div>
            <div className="border-2 border-solid border-red-500">{currentHovered === "" ? "Hover over the map to select a treaty" : currentHovered}</div>
            <div className="min-h-screen bg-[#0B0B2B] border-y-8 border-gray-600 border-solid">
                <SelectableCountries2 onHoverStart={setCurrentHovered}/>
            </div>
        </div>
    )
}