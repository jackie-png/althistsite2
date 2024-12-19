"use client"
import React, { useRef } from "react"
import { motion, useInView, useScroll } from "framer-motion"
import { useRouter } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
export default function LandingTimelineSection({title, year, link}){
    const router = useRouter();
    return(
        <div className="max-h-[852px] max-w-[1080px] bg-charcoal rounded m-4">
            <div className="w-full h-96 bg-white mb-3 bg-center rounded-t" style={{backgroundImage: `url("/images/treatyLondon.jpg")`}}>
                <div className="w-full h-full bg-black bg-opacity-20 rounded-t flex flex-col justify-center items-center select-none gap-4">
                    <h1 className="text-5xl underline font-bold tracking-wider">{title}</h1>
                    <h1 className="text-5xl underline font-bold tracking-wider">{year}</h1>
                </div>
            </div>
            <div className="flex items-center justify-evenly p-4">
                <p className="w-9/12 h-1/3 p-4 border-snow border rounded">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Diam quam nulla porttitor massa id neque aliquam. Integer malesuada nunc vel risus commodo viverra maecenas. Donec adipiscing tristique risus nec feugiat. Ornare massa eget egestas purus viverra accumsan. Vitae congue mauris rhoncus aenean. Enim eu turpis egestas pretium. Justo nec ultrices dui sapien eget mi proin. Purus ut faucibus pulvinar elementum integer. Massa sed elementum tempus egestas.</p>
                <div className="flex bg-ruby rounded items-center gap-2 px-4 py-2 duration-200 hover:scale-110 cursor-pointer" onClick={()=>router.push(link)}>
                    <h3 className="font-bold tracking-wide">Read More</h3>
                    <FontAwesomeIcon icon={faArrowRight}/>
                </div>
            </div>
        </div>
    )
}