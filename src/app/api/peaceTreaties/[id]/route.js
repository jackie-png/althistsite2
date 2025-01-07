
const treaties = new Map(
    [
        ["treaty-of-paris", "THis is the treaty of paris"],
        ["treaty-of-london", "THis is the treaty of london"]
    ]
)

export async function GET(request){
    const requestUrlSplit = request.nextUrl.pathname.split("/")
    console.log(requestUrlSplit)
    const requestedTreaty = treaties.get(requestUrlSplit[requestUrlSplit.length-1])
    if (requestedTreaty !== undefined){
        return new Response(JSON.stringify({message: requestedTreaty}, {headers: { 'Content-Type': 'application/json' }}))
    } else {
        return new Response(JSON.stringify({message: "not a treaty"}, {headers: { 'Content-Type': 'application/json' }}))
    }

}