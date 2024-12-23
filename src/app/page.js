"use client"
import Image from "next/image";
import Navbar from "./components/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEmpire } from "@fortawesome/free-brands-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";
import LandingTimelineSection from "./components/LandingTimelineSection";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css"

export default function Home() {

  const [aboutSelected, setAbout] = useState(false)
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 0 },
      items: 1
    },

  }

  const CustomButtongroup = ({next, previous, goToSlide, currentSlide}) =>{
    console.log(currentSlide)
    return(
      <div className="absolute flex top-0 justify-evenly w-full text-black bg-coal py-4">
        <div className="cursor-pointer flex justify-center items-center w-28 h-28 bg-ruby rounded-full" onClick={()=>goToSlide(0)}>
          <div className="cursor-pointer flex justify-center items-center w-20 h-20 bg-white rounded-full text-center font-bold">1936</div>
        </div>
        <div className="cursor-pointer flex justify-center items-center w-28 h-28 bg-ruby rounded-full" onClick={()=>goToSlide(1)}>
          <div className="cursor-pointer flex justify-center items-center w-20 h-20 bg-white rounded-full text-center font-bold">1940</div>
        </div>
        <div className="cursor-pointer flex justify-center items-center w-28 h-28 bg-ruby rounded-full" onClick={()=>goToSlide(2)}>
          <div className="cursor-pointer flex justify-center items-center w-20 h-20 bg-white rounded-full text-center font-bold">1944</div>
        </div>
        <div className="cursor-pointer flex justify-center items-center w-28 h-28 bg-ruby rounded-full" onClick={()=>goToSlide(3)}>
          <div className="cursor-pointer flex justify-center items-center w-20 h-20 bg-white rounded-full text-center font-bold">1948</div>
        </div>
      </div>
    )
  }

  const CustomRightArrow = ({onClick, ...rest}) =>{
    console.log(rest)
    return(
      <div className="bg-red w-4 h-4 absolute" onClick={()=>onClick()}>
        right
      </div>
    )
  }

  return (
    <div className="min-h-screen text-snow">
      <div 
        className="relative grid grid-rows-4 grid-cols-1 h-screen w-screen bg-cover bg-no-repeat justify-center" 
        style={{
            backgroundImage: 'url("/images/KRworld1951V2_1_3.jpg")',
            backgroundPosition: "center"
        }}>
          <div className="text-[290px] row-span-2 justify-self-center">
            <FontAwesomeIcon icon={faEmpire} size="lg"/>            
          </div>

          <AnimatePresence>
            { aboutSelected ? 
              <motion.div
              initial={{opacity: 0}}
              animate={{opacity: 1}}
              transition={{duration: 0.2}}
              exit={{opacity: 0}}                className="bg-coal flex flex-col row-span-1 w-9/12 h-full bg-opacity-50 rounded self-center gap-4 justify-self-center px-8 py-4">
                <h1 className="text-2xl font-bold text-center">About this website</h1>
                <h3 className="mb-4 text-lg">This was a Hearts of Iron IV campaign that I enjoyed a lot so I turned it into a website and documented it like a history website in this world</h3>
                <h3 className="text-lg">The campaign took place in the mod Kaiserreich which explores a world built on the premise of “What if Germany won World War 1?”. When the devs updated the German focus tree I had such a fun time conquering the world, so much that this was made as a memento.</h3>
              </motion.div>
              :
              <motion.div
              initial={{opacity: 0}}
              animate={{opacity: 1}}
              transition={{duration: 0.2}}
              exit={{opacity: 0}}
              className="text-7xl font-bold select-none justify-self-center justify-center text-center self-center">
              <h1>Rise of the German Hegemony</h1>
            </motion.div>
            }            
          </AnimatePresence>


          <div>
            <button className="flex justify-self-center self-center text-lg items-center gap-2 bg-ruby py-2 px-4 rounded transition-all duration-200 hover:bg-darkRuby active:scale-90"
              onClick={()=>setAbout(!aboutSelected)}
            >
              About
              <FontAwesomeIcon icon={faArrowRight}/>
            </button>            
          </div>


      </div>
      <div className="flex justify-center items-center bg-darkRuby h-32 text-6xl font-bold ">
        <h1 className="border py-4 px-8 tracking-wider rounded">Timeline of Events</h1>
      </div>

      <Carousel 
        responsive={responsive}
        sliderClass="bg-green-500 flex justify-center top-20"
        containerClass="h-screen"
        customButtonGroup={<CustomButtongroup/>}
        customRightArrow={<CustomRightArrow/>}
        >
        <LandingTimelineSection title={"The State of the World"} year={"1936"} link={"/articles/1936-1940"}/>
        <LandingTimelineSection title={"A Clash Between Hammers and Claws"} year={"1940"} link={"/articles/1940-1944"}/>
        <LandingTimelineSection title={"The War Beyond Europe"} year={"1944"} link={"/articles/1944-1948"}/>
        <LandingTimelineSection title={"The Eagle Reigns Supreme"} year={"1948"} link={"/articles/1948-1951"}/>

      </Carousel>


    </div>
  );
}
