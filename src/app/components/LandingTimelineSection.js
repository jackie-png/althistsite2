"use client"
import React, { useRef } from "react"
import { motion, useInView, useScroll } from "framer-motion"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
export default function LandingTimelineSection(){
    const {scrollYProgress} = useScroll();
    const timelinepoint = useRef();
    const timelineView = useInView(timelinepoint, {amount: 1, once: true})
    return(
        <div className="max-h-[852px] max-w-[1080px] bg-charcoal rounded p-4">
            <div className="w-full h-96 bg-white mb-3" style={{backgroundImage: `url`}}></div>
            <div className="flex items-center justify-between">
                <p className="w-9/12 h-1/3 p-4 border-snow border rounded">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Diam quam nulla porttitor massa id neque aliquam. Integer malesuada nunc vel risus commodo viverra maecenas. Donec adipiscing tristique risus nec feugiat. Ornare massa eget egestas purus viverra accumsan. Vitae congue mauris rhoncus aenean. Enim eu turpis egestas pretium. Justo nec ultrices dui sapien eget mi proin. Purus ut faucibus pulvinar elementum integer. Massa sed elementum tempus egestas.</p>
                <div className="flex bg-ruby rounded items-center gap-2 px-4 py-2">
                    <h3 className="font-bold tracking-wide">Read More</h3>
                    <FontAwesomeIcon icon={faArrowRight}/>
                </div>
            </div>
        </div>
    )
}