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
    return <h1>{articleData}</h1>
}