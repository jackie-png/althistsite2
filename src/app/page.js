import Image from "next/image";
import Navbar from "./components/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEmpire } from "@fortawesome/free-brands-svg-icons";

export default function Home() {
  return (
    <div className="min-h-screen text-snow">
      <div 
        className="relative flex flex-col h-screen w-screen bg-cover bg-no-repeat justify-center items-center" 
        style={{
            backgroundImage: 'url("/images/KRworld1951V2_1_3.jpg")',
            backgroundPosition: "center"
        }}>
          <div className="text-[290px]">
            <FontAwesomeIcon icon={faEmpire}/>            
          </div>
          <div className="text-7xl font-bold select-none">
            <h1>Rise of the German Hegemony</h1>
          </div>
          <button>About</button>

      </div>



    </div>
  );
}
