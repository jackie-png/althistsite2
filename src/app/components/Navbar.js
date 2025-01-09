"use client"
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEmpire } from "@fortawesome/free-brands-svg-icons";
import { faArrowRight, faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { AnimatePresence, motion } from "framer-motion";
import { TimelineCircle } from "./TimelineCircle";
import { TimelineTriangle } from "./TimelineTriangle";
import { SelectableCountries } from "./SelectableCountries";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Navbar(){
    const [timelineOpen, setTimelineOpen] = useState(false)
    const [dropdownOpen, setDropdown] = useState(false)
    const [peaceOpen, setPeaceOpen] = useState(false)
    const [menuOption, setMenuOption] = useState([false,false]) // timeline dropdown or peace treaty dropdown
    const router = useRouter();
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
        <div className="sticky top-0 z-50">            
            {/**upper navbar */}
            <div className={`bg-coal text-snow relative z-50 flex flex-col px-4 py-6 ${dropdownOpen ? "border-b-2" : ""} border-solid border-soot`}>
                <div className="flex items-center gap-8">
                    <div className="h-16 w-16 flex items-center justify-center cursor-pointer" onClick={()=>router.push("/")}>
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
                            onClick={()=>router.push("/articles/peace-treaties")}>
                            <h2>Peace Treaties</h2>
                            <div className={`flex justify-center items-center w-5 h-5 ${menuOption[1] ? "text-snow" : "text-ruby"}`}>
                                <FontAwesomeIcon icon={faArrowRight}/>
                            </div>
                        </div>
                    </div>

                </div>                
            </div>
            <AnimatePresence>
                {/**dropdown*/}
                {dropdownOpen && 
                <motion.div 
                    initial={{height:"0px", opacity:0}}
                    animate={{height:(menuOption[0] ? "224px" : menuOption[1] ? "342px" : "0px"), opacity: 1}}
                    exit={{
                        height:"0px",
                        opacity: 0
                    }}
                    transition={{
                        duration:0.3,
                        ease:"easeInOut",
                    }}
                    className={`absolute w-full bg-coal p-4`}>
                    {menuOption[0] && 
                        <motion.div 
                            className="relative">
                            <motion.div 
                                initial={{scale:0}}
                                animate={{scale:1}}
                                transition={{
                                    duration: 0.3,
                                    delay: 0.3
                                }}
                                className="flex text-snow justify-center">
                                <div className="border-soot border-2 border-solid py-2 px-8 rounded text-2xl">
                                    <h2>Timeline of Major Years</h2>
                                </div>
                            </motion.div>
                            <motion.div 
                                initial={{width:"0%"}}
                                animate={{width:"95%"}}
                                transition={{
                                    duration: 0.5,
                                    delay: 0.6
                                }}
                                className="h-4 bg-ruby ml-2 relative top-20">
                            </motion.div>
                            <div className="flex text-coal text-xl font-bold justify-between relative z-10 top-8">
                                <div className="flex justify-center items-center w-20 h-20">
                                    <TimelineCircle/>
                                </div>
                                <motion.div 
                                    initial={{opacity:0, y: -30}}
                                    animate={{opacity:1, y: 0}}
                                    transition={{
                                        delay: 0.7,
                                        duration: 0.5
                                    }}
                                    className="flex justify-center items-center h-16 bg-white border-ruby border-[10px] rounded-md w-32 py-1">
                                    <Link href="/articles/1936-1940" className="w-full h-full flex items-center justify-center">1936</Link>
                                </motion.div>
                                <motion.div 
                                    initial={{opacity:0, y: -30}}
                                    animate={{opacity:1, y: 0}}
                                    transition={{
                                        delay: 0.8,
                                        duration: 0.5
                                    }}
                                    className="flex justify-center items-center h-16 bg-white border-ruby border-[10px] rounded-md w-32 py-1">
                                    <Link href="/articles/1940-1944" className="w-full h-full flex items-center justify-center">1940</Link>
                                </motion.div>
                                <motion.div
                                    initial={{opacity:0, y: -30}}
                                    animate={{opacity:1, y: 0}}
                                    transition={{
                                        delay: 0.9,
                                        duration: 0.5
                                    }}
                                    className="flex justify-center items-center h-16 bg-white border-ruby border-[10px] rounded-md w-32 py-1">
                                    <Link href="/articles/1944-1948" className="w-full h-full flex items-center justify-center">1944</Link>
                                </motion.div>
                                <motion.div
                                    initial={{opacity:0, y: -30}}
                                    animate={{opacity:1, y: 0}}
                                    transition={{
                                        delay: 1,
                                        duration: 0.5
                                    }}
                                    className="flex justify-center items-center h-16 bg-white border-ruby border-[10px] rounded-md w-32 py-1">
                                    <Link href="/articles/1948-1951" className="w-full h-full flex items-center justify-center">1948</Link>
                                </motion.div>
                                <motion.div 
                                    initial={{opacity:0, translateX: -50}}
                                    animate={{opacity:1, translateX: 0}}
                                    transition={{
                                        delay: 0.7,
                                        duration: 0.5
                                    }}
                                    className="w-32 h-32">
                                    <TimelineTriangle/>
                                </motion.div>
                            </div>                        
                        </motion.div>
                    }      

                </motion.div>}                
            </AnimatePresence>

        </div>
    )
}