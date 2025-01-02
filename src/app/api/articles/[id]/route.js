
const array = [
    "hi there",
    "hello there",
    "hey there",
    "bye bye"
]
export async function GET(request){
    const requestUrlSplit = request.nextUrl.pathname.split("/")
    console.log(requestUrlSplit[requestUrlSplit.length-1])
    if (requestUrlSplit[requestUrlSplit.length-1] <= array.length && requestUrlSplit.length > 0){
        return new Response(JSON.stringify({message: array[requestUrlSplit[requestUrlSplit.length-1]]}, {headers: { 'Content-Type': 'application/json' }}))
    } else {
        return new Response(null, {status: 400, headers: { 'Content-Type': 'application/json' }})
    }
}