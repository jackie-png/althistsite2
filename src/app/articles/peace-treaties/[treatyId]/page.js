import Image from "next/image";
export default async function page({params}){
    async function apiCall(){
        const res = await fetch(`http://localhost:3000/api/peaceTreaties/${params.treatyId}`);
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
    console.log(articleData)
    return (
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
                        <h2 className="text-8xl">{articleData.treatyName}</h2>
                    </div>
                </div>
            </div>
            <div className="bg-snow w-9/12 h-full px-4 py-16 rounded-lg">
                {articleData.treatyCountries.map((country)=><div className="flex flex-col items-center">
                    <h1 className="bg-darkRuby text-6xl p-4 w-full text-center text-snow font-bold tracking-wide rounded-3xl">{country.countryName}</h1>
                    <div className="w-10/12 grid grid-cols-3 grid-rows-1 my-8 gap-8">
                        <div className="self-center col-span-1">
                            {country.borderChanges.map((change)=>
                            <h1 className="text-xl my-8">
                                {change}
                            </h1>)}
                        </div>
                        <div className="rounded col-span-2 self-center">
                            <Image
                                src={country.countryImage}
                                alt={country.countryName}
                                width={1484}
                                height={1168}
                                className="w-full h-4/6"
                            />                            
                        </div>
                    </div>
                </div>)}
            </div>
        </div>
    )
}