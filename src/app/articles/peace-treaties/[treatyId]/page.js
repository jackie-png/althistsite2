export default function page({params}){
    console.log(params.treatyId)
    return <h1>{params.treatyId}</h1>
}