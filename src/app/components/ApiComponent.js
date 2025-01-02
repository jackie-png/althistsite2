import React from "react";

async function apiCall(){
    const res = await fetch("http://localhost:3000/api/articles/0");
    const resObj = await res.json();
    if (res.ok){
        console.log(resObj)
        return resObj
    } else {
        return null
    }
}

export default async function ApiComponent(){


    const response = await apiCall()
    const articleData = response.message
    console.log(articleData)
    return(
        <div className="flex flex-col">
            {
                articleData.sections.map((section) => 
                <div>
                    <h1 className="bg-darkRuby text-6xl p-4 text-center text-snow font-bold tracking-wide rounded-3xl">{section.sectionName}</h1>
                    <div>
                        {section.sectionHeaders.map((header)=>
                        <div>
                            <h1 className="text-5xl text-center py-4">{header.header}</h1>
                            {header.sectionBody.map((bodyText)=><p className="px-8 py-4 text-lg">{bodyText}</p>)}
                        </div>
                        )}
                    </div>
                </div>)
            }
        </div>
    )
}