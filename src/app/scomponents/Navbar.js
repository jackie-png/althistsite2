"use client"
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEmpire } from "@fortawesome/free-brands-svg-icons";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

export default function Navbar(){
    const [timelineOpen, setTimelineOpen] = useState(false)
    const [dropdownOpen, setDropdown] = useState(false)
    const [peaceOpen, setPeaceOpen] = useState(false)
    return(
        <div className={`bg-coal text-snow ${dropdownOpen ? timelineOpen ? "h-[293px]" : peaceOpen ? "h-[438px]" : "h-[293px]" : "h-24"} flex flex-col px-4 pt-4`}>
            {/**upper navbar */}
            <div className="flex items-center gap-8">
                <div className="h-16 w-16 flex items-center justify-center">
                    <FontAwesomeIcon icon={faEmpire} size="4x"/>
                </div>
                <div className="flex items-center justify-center border-solid border-2 border-soot rounded h-14 px-4 ">
                    <h1 className="text-xl">Rise of the German Hegemony</h1>
                </div>
                <div className={`gap-8 h-16 flex flex-grow border-solid border-2 border-soot rounded items-center justify-center select-none`}>
                    <div 
                        className={`${timelineOpen ? "bg-ruby" : "bg-none"} flex gap-2 px-2 border-solid border-2 ${timelineOpen ? "border-darkRuby" : "border-soot"} rounded h-9 items-center justify-center hover:border-ruby hover:cursor-pointer`}
                        onClick={()=>{
                            setTimelineOpen(!timelineOpen);
                            setPeaceOpen(false);
                            setDropdown(!dropdownOpen);
                             }}>
                        <h2>Timeline</h2>
                        <div className={`flex justify-center items-center w-5 h-5 ${timelineOpen ? "text-snow" : "text-ruby"}`}>
                            <FontAwesomeIcon icon={faChevronDown}/>
                        </div>
                    </div>
                    <div 
                        className={`${peaceOpen ? "bg-ruby" : "bg-none"} flex gap-2 px-2 border-solid border-2 ${peaceOpen ? "border-darkRuby" : "border-soot"} rounded h-9 items-center justify-center select-none hover:border-ruby hover:cursor-pointer`} 
                        onClick={()=>{
                            setPeaceOpen(!peaceOpen);
                            setTimelineOpen(false);
                            setDropdown(!dropdownOpen);
                             }}>
                        <h2>Peace Treaties</h2>
                        <div className={`flex justify-center items-center w-5 h-5 ${peaceOpen ? "text-snow" : "text-ruby"}`}>
                            <FontAwesomeIcon icon={faChevronDown}/>
                        </div>
                    </div>
                </div>

            </div>
            {/**dropdown*/}
            {dropdownOpen && 
            <div className="h-full p-4">
                {timelineOpen && 
                    <div className="relative">
                        <div className="h-4 bg-ruby w-full relative top-20"></div>
                        <div className="flex text-coal text-xl font-bold justify-between relative z-10 top-10">
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
                {peaceOpen && 
                    <div className="h-full grid grid-cols-12">
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