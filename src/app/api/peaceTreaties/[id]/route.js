
const treaties = new Map(
    [
        ["treaty-of-paris", {
            treatyName: "Treaty of Paris",
            treatyCountries:[
                {
                    countryName: "Franch Commune",
                    borderChanges:[
                        "The state of Labourd was ceded to the newly created Basque Country (Salmon coloured region outlined in the south west)",
                        "The state of Roussillon was ceded to the newly created independent Catalonia (Orange coloured region outlined in the south east)",
                        "The state of Lille was ceded to the Flanders-Wallonia (Yellow coloured region outlined in the north)"
                    ],
                    countryImage:"/images/treatyParis_France.jpg"
                },
                {
                    countryName: "Spanish Commune",
                    borderChanges:[
                        "A newly independent Basque Country would be established, taking the states of Navarre and the Basque Country",
                        "A newly independent Catalonia would be established, taking the states of Catalonia, Valencia, and the Balaric Islands",
                        "The rest of Spain would be reorganized into a constitutional monarche with Jamie I as the monarch"
                    ],
                    countryImage:"/images/treatyParis_France.jpg"
                },
                {
                    countryName: "Mexico",
                    borderChanges:[
                        "Mexico would be handed over to the Canadian government which would be restablished into a republic"
                    ],
                    countryImage:"/images/treatyParis_France.jpg"
                },
                {
                    countryName: "Socialist Republic of Italy",
                    borderChanges:[
                        "Socialist Italy would be handed to the Danubian Federation which would create a new Italian Federation."
                    ],
                    countryImage:"/images/treatyParis_France.jpg"
                },
                {
                    countryName: "Socialist Republic of Norway",
                    borderChanges:[
                        "Socialist Norway would be handed over to Sweden who would then proclaim the creation of Sweden-Norway"
                    ],
                    countryImage:"/images/treatyParis_France.jpg"
                }
            ]
        }],
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