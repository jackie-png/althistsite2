
const treaties = new Map(
    [
        ["treaty-of-paris", "THis is the treaty of paris"],
        ["treaty-of-london", "THis is the treaty of london"],
        ["treaty-of-moscow", "THis is the treaty of moscow"],
        ["treaty-of-beijing", "THis is the treaty of beijing"],
        ["treaty-of-bangkok", "THis is the treaty of bangkok"],
        ["treaty-of-ottawa", "THis is the treaty of ottawa"],
        ["treaty-of-tokyo", "THis is the treaty of tokyo"],
        ["treaty-of-washington", "THis is the treaty of washington"],
        ["treaty-of-algiers", "THis is the treaty of algiers"]
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