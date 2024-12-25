"use client"
import React, { useEffect, useRef } from "react"
import { animate, motion, useInView, useMotionValue, useTransform} from "framer-motion"
import { useRouter } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function LandingTimelineSection({title, year, link, backgroundImage, isInView}){
    const router = useRouter();
    const titleCount = useMotionValue(0);
    const sectionRef = useRef();
    const sectionInView = useInView(sectionRef, {amount: 1});
    const roundedtitle = useTransform(titleCount, (latest)=> Math.round(latest));
    const displayedTitle = useTransform(roundedtitle, (latest) => title.slice(0,latest))
    useEffect(()=>{
        if (isInView) {
            const controls = animate(titleCount, title.length, {
                type: "tween",
                duration: 1,
                ease: "easeInOut"
            })
            return controls.stop            
        }

    },[])

    useEffect(()=>{
        console.log(`${title} : ${isInView}`)
    },[isInView])


    return(
        <div className={`w-screen ${isInView ? "bg-charcoal" : "bg-slate-100"}`} ref={sectionRef}>
            <div className="w-full h-[30rem] bg-white mb-3 bg-center rounded-t bg-no-repeat bg-cover" style={{backgroundImage: `url(${backgroundImage})`}}>
                <div className="w-full h-full bg-black bg-opacity-20 rounded-t flex flex-col justify-center items-center select-none gap-4">
                    <motion.span className="text-5xl underline font-bold tracking-wider">{displayedTitle}</motion.span>
                    <h1 className="text-5xl underline font-bold tracking-wider">{year}</h1>
                </div>
            </div>
            <div className="h- flex items-center justify-evenly p-4">
                <p className="w-3/6 p-4 border-snow border rounded">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Diam quam nulla porttitor massa id neque aliquam. Integer malesuada nunc vel risus commodo viverra maecenas. Donec adipiscing tristique risus nec feugiat. Ornare massa eget egestas purus viverra accumsan. Vitae congue mauris rhoncus aenean. Enim eu turpis egestas pretium. Justo nec ultrices dui sapien eget mi proin. Purus ut faucibus pulvinar elementum integer. Massa sed elementum tempus egestas.</p>
                <div className="flex bg-ruby rounded items-center gap-2 px-4 py-2 duration-200 hover:scale-110 cursor-pointer" onClick={()=>router.push(link)}>
                    <h3 className="font-bold tracking-wide">Read More</h3>
                    <FontAwesomeIcon icon={faArrowRight}/>
                </div>
            </div>
        </div>
    )
}