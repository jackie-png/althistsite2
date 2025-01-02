export default function ApiComponent(){
    async function apiCall(){
        const res = await fetch("http://localhost:3000/api/articles/0")
        return res
    }

    const response = apiCall().then(
        (result)=>console.log(result.json().then((result2)=>console.log(result2)))
    );
    return(
        <div className="bg-red-500">hi there hello</div>
    )
}