import React from "react";
import { motion } from "framer-motion";
import ApiComponent from "@/app/components/ApiComponent";

export default async function page(){
    async function apiCall(){
        const res = await fetch(`http://localhost:3000/api/articles/3`);
        const resObj = await res.json();
        if (res.ok){
            console.log(resObj)
            return resObj
        } else {
            return null
        }
    }
    const response = await apiCall()
    const articleData = response.message
    return(
        <div className="bg-coal flex flex-col items-center justify-center">
            <div 
                className="relative h-screen w-screen bg-cover bg-no-repeat justify-center" 
                style={{
                    backgroundImage: 'url("/images/treatyParis_France.jpg")',
                    backgroundPosition: "center"
                }}>
                <div 
                    className="flex justify-center items-center h-screen w-screen absolute top-0 bg-gradient-to-t from-coal from-25%">
                    <div 
                        className="bg-coal bg-opacity-60 rounded-t border-t-soot border-r-soot border-l-soot border-t-2 border-l-2 border-r-2 text-snow flex items-center justify-center flex-col gap-4 h-1/2 w-1/2">
                        <h1 className="text-9xl">1944-1948</h1>
                        <h2 className="text-6xl">The War Beyond Europe</h2>
                    </div>
                </div>
            </div>
            <div className="bg-snow w-9/12 h-full px-4 py-16 rounded-lg">
            <div className="flex flex-col">
                {
                    articleData.sections.map((section) => 
                    <div>
                        <h1 className="bg-darkRuby text-6xl p-4 text-center text-snow font-bold tracking-wide rounded-3xl">{section.sectionName}</h1>
                        <div>
                            {section.sectionHeaders.map((header)=>
                            <div className="my-8 flex flex-col">
                                <h1 className="bg-soot bg-opacity-20 w-10/12 self-center rounded-3xl text-5xl text-center py-4">{header.header}</h1>
                                {header.sectionBody.map((bodyText)=><p className="px-8 py-4 text-lg indent-8">{bodyText}</p>)}
                            </div>
                            )}
                        </div>
                    </div>)
                }
            </div>
            </div>
        </div>
    )
}