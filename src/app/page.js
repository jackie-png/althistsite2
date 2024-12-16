"use client"
import Image from "next/image";
import Navbar from "./components/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEmpire } from "@fortawesome/free-brands-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function Home() {

  const [aboutSelected, setAbout] = useState(false)

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
          { !aboutSelected && <div className="text-7xl font-bold select-none justify-self-center justify-center text-center self-center">
            <h1>Rise of the German Hegemony</h1>
          </div>}
          { aboutSelected && 
            <div className="bg-coal flex flex-col row-span-1 w-9/12 h-full bg-opacity-50 rounded self-center gap-4 justify-self-center px-8 py-4">
              <h1 className="text-2xl font-bold text-center">About this website</h1>
              <h3 className="mb-4 text-lg">This was a Hearts of Iron IV campaign that I enjoyed a lot so I turned it into a website and documented it like a history website in this world</h3>
              <h3 className="text-lg">The campaign took place in the mod Kaiserreich which explores a world built on the premise of “What if Germany won World War 1?”. When the devs updated the German focus tree I had such a fun time conquering the world, so much that this was made as a memento.</h3>
            </div>
          
          }

          <div>
            <button className="flex justify-self-center self-center text-lg items-center gap-2 bg-ruby py-2 px-4 rounded transition-all duration-200 hover:bg-darkRuby active:scale-90"
              onClick={()=>setAbout(!aboutSelected)}
            >
              About
              <FontAwesomeIcon icon={faArrowRight}/>
            </button>            
          </div>


      </div>



    </div>
  );
}
