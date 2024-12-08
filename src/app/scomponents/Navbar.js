"use client"
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEmpire } from "@fortawesome/free-brands-svg-icons";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

export default function Navbar(){
    const [timelineOpen, setTimelineOpen] = useState(false)
    const [dropdownOpen, setDropdown] = useState(false)
    const [peaceOpen, setPeaceOpen] = useState(false)
    const [menuOption, setMenuOption] = useState([false,false]) // timeline dropdown or peace treaty dropdown

    useEffect(()=>{
        console.log(`dropdown: ${dropdownOpen}`);
        console.log(`timeline: ${menuOption[0]}`);
        console.log(`peace: ${menuOption[1]}`);
    },[dropdownOpen, menuOption])

    useEffect(()=>{
        if (!menuOption[0] && !menuOption[1]){
            setDropdown(false);
        } else {
            setDropdown(true);
        }
    },[menuOption])

    function handleDropdownOpen(whichOpened){
        let newOption = [...menuOption];
        if (whichOpened === 0){
            newOption[0] = !newOption[0]
            newOption[1] = false
        } else {
            newOption[0] = false
            newOption[1] = !newOption[1]
        }
        setMenuOption(newOption);

    }
    return(
        <div>            
            {/**upper navbar */}
            <div className={`bg-coal text-snow relative z-50 flex flex-col px-4 py-6 ${dropdownOpen ? "border-b-2" : ""} border-solid border-soot`}>
                <div className="flex items-center gap-8">
                    <div className="h-16 w-16 flex items-center justify-center">
                        <FontAwesomeIcon icon={faEmpire} size="4x"/>
                    </div>
                    <div className="flex items-center justify-center border-solid border-2 border-soot rounded h-14 px-4 ">
                        <h1 className="text-xl">Rise of the German Hegemony</h1>
                    </div>
                    <div className={`gap-8 h-16 flex flex-grow border-solid border-2 border-soot rounded items-center justify-center select-none`}>
                        <div 
                            className={`${menuOption[0] ? "bg-ruby" : "bg-none"} flex gap-2 px-2 border-solid border-2 ${menuOption[0] ? "border-darkRuby" : "border-soot"} rounded h-9 items-center justify-center hover:border-ruby hover:cursor-pointer`}
                            onClick={()=>handleDropdownOpen(0)}>
                            <h2>Timeline</h2>
                            <div className={`flex justify-center items-center w-5 h-5 ${menuOption[0] ? "text-snow" : "text-ruby"}`}>
                                <FontAwesomeIcon icon={faChevronDown}/>
                            </div>
                        </div>
                        <div 
                            className={`${menuOption[1] ? "bg-ruby" : "bg-none"} flex gap-2 px-2 border-solid border-2 ${menuOption[1] ? "border-darkRuby" : "border-soot"} rounded h-9 items-center justify-center select-none hover:border-ruby hover:cursor-pointer`} 
                            onClick={()=>handleDropdownOpen(1)}>
                            <h2>Peace Treaties</h2>
                            <div className={`flex justify-center items-center w-5 h-5 ${menuOption[1] ? "text-snow" : "text-ruby"}`}>
                                <FontAwesomeIcon icon={faChevronDown}/>
                            </div>
                        </div>
                    </div>

                </div>                
            </div>

            {/**dropdown*/}
            {dropdownOpen && 
            <div className={`absolute w-full ${menuOption[0] ? "h-56" : menuOption[1] ? "h-[342px]" : "h-0"} bg-coal p-4`}>
                {menuOption[0] && 
                    <div className="relative">
                        <div className="flex text-snow justify-center">
                            <div className="border-soot border-2 border-solid py-2 px-8 rounded text-2xl">
                                <h2>Timeline of Major Years</h2>
                            </div>
                        </div>
                        <div className="h-4 bg-ruby w-full ml-2 relative top-20"></div>
                        <div className="flex text-coal text-xl font-bold justify-between relative z-10 top-8">
                            <div className="flex justify-center items-center w-20 h-20 bg-ruby rounded-full">
                                <div className="bg-white w-10 h-10 rounded-full">

                                </div>
                            </div>
                            <div className="flex justify-center items-center bg-white border-ruby border-[10px] rounded-md w-32 py-1">
                                <h2>1936</h2>
                            </div>
                            <div className="flex justify-center items-center bg-white border-ruby border-[10px] rounded-md w-32 py-1">
                                <h2>1940</h2>
                            </div>
                            <div className="flex justify-center items-center bg-white border-ruby border-[10px] rounded-md w-32 py-1">
                                <h2>1944</h2>
                            </div>
                            <div className="flex justify-center items-center bg-white border-ruby border-[10px] rounded-md w-32 py-1">
                                <h2>1948</h2>
                            </div>
                        </div>                        
                    </div>
                }
                {menuOption[1] && 
                    <div className="h-full grid grid-cols-12 text-white">
                        <div className="col-span-5 text-xl flex flex-col items-center gap-8 justify-center">
                            <div 
                                className={`${timelineOpen ? "bg-ruby" : "bg-none"} w-64 flex gap-2 px-2 border-solid border-2 ${timelineOpen ? "border-darkRuby" : "border-soot"} rounded h-9 items-center justify-center hover:border-ruby hover:cursor-pointer`}>
                                <h2>Europe and Africa</h2>
                            </div>
                            <div 
                                className={`${timelineOpen ? "bg-ruby" : "bg-none"} w-64 flex gap-2 px-2 border-solid border-2 ${timelineOpen ? "border-darkRuby" : "border-soot"} rounded h-9 items-center justify-center hover:border-ruby hover:cursor-pointer`}>
                                <h2>South and East Asia</h2>
                            </div>
                            <div 
                                className={`${timelineOpen ? "bg-ruby" : "bg-none"} w-64 flex gap-2 px-2 border-solid border-2 ${timelineOpen ? "border-darkRuby" : "border-soot"} rounded h-9 items-center justify-center hover:border-ruby hover:cursor-pointer`}>
                                <h2>North America</h2>
                            </div>
                        </div>
                        <div className="flex justify-center">
                            <div className="bg-soot w-1 h-full rounded">

                            </div>
                        </div>
                        <div className="col-span-6 h-5/6 border-solid border-ruby border-2 rounded flex self-center items-center justify-center flex-col">
                            <h2>North America</h2>
                            <h2>North America</h2>
                            <h2>North America</h2>
                            <h2>North America</h2>
                            <h2>North America</h2>

                        </div>

                    </div>
                }
            </div>}
        </div>
    )
}