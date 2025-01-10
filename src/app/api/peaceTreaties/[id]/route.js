
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
        ["treaty-of-london", {
            treatyName: "Treaty of London",
            treatyCountries:[
                {
                    countryName: "Union of Britain",
                    borderChanges:[
                        "The Union of Britain would be dissolved and the British Isles split into 2 countries, England and Wales would be combines into a single state ruled by a military governor appointed by the German Empire.",
                        "Scotland would gain its independence from England. ",
                        "The Third Internationale would be officially dismantled."
                    ],
                    countryImage:"/images/treatyParis_France.jpg"
                },
            ]
        }],
        ["treaty-of-moscow", {
            treatyName: "Treaty of Moscow",
            treatyCountries:[
                {
                    countryName: "Russian Empire (Western Russia)",
                    borderChanges:[
                        "Ukraine would be expanded significantly, gaining the states of Belgorod, Kursk, Voronezh, Rostov, Ekaterinodar, and Novorssiysk",
                        "White Ruthenia would also be greatly expanded, gaining the states of Vitebsk, Krichev, and Smolensk",
                        "The State of Latgale would be given to the United Bultic Duchy",
                        "The Kingdom of Finland would expand into the Karelian peninsula, gaining the states of Petrozavodak, White Karelia, and Murmansk",
                        "The Ottomans would recieve Vladikavkaz, Chechnya, Terek, and Dagestan. They would later establish the Mountainous Republic in these newly gained territories",
                        "All territory west of the Ural Mountain chain would be reorganized into a German puppet state with many concessions related to resources and the Russian economy added to this puppet state"
                    ],
                    countryImage:"/images/treatyParis_France.jpg"
                },
                {
                    countryName: "Russian Empire (Siberia and Central Asia)",
                    borderChanges:[
                        "Central Asia would be united together into a single country called the Central Asian Federation, these countries include the Alash Orda in Kazachstan, Bukhara, Turkistan, and Turkmenistan.",
                        "All remaining lands east of the Ural Mountains would be reorganized into the Siberian Republic"
                    ],
                    countryImage:"/images/treatyParis_France.jpg"
                },

            ]
        }],
        ["treaty-of-beijing", {
            treatyName: "Treaty of Beijing",
            treatyCountries:[
                {
                    countryName: "The Republic of China (Fengtian led)",
                    borderChanges:[
                        "The Fengtian led Republic of China would be re-established with the previously German support Zhili Clique in Nanjing.",
                        "Vladivostok would be handed over to Siberia.",
                        "The Legation Cities would be restablished and expanded to include more chinese port cities, including the major southern port city of Guangzhou",
                        "Mongolia would be re-established as a republic",
                        "The State of Xinjiang would be handed over to the Central Asian Federation"
                    ],
                    countryImage:"/images/treatyParis_France.jpg"
                },
            ]
        }],
        ["treaty-of-bangkok", {
            treatyName: "Treaty of Bangkok",
            treatyCountries:[
                {
                    countryName: "Kingdom of Siam",
                    borderChanges:[
                        "Siam would be restablished into a republic but would be able to keep their monarchy as a figurehead",
                        "The states that make up the region of Indochina would be handed back to the German East Asian administration",
                        "Cambodia would be given independence and would be established as a republic",
                        "Burma would be reorganized into a republic. Similar to Siam, they would be able to keep their monarchy as a figurehead."
                    ],
                    countryImage:"/images/treatyParis_France.jpg"
                },
            ]
        }],
        ["treaty-of-ottawa", {
            treatyName: "Treaty of Ottawa",
            treatyCountries:[
                {
                    countryName: "North America",
                    borderChanges:[
                        "Canada would be re-established as a full republic with the British monarchy being deposed and stripped of their royal titles",
                        "Mexico would be handed over to the Danubian Republic who would reorganize Mexico into a pro-Austrian republic",
                        "The West Indies Federation would be reorganized into a German friendly republic."
                    ],
                    countryImage:"/images/treatyParis_France.jpg"
                },
                {
                    countryName: "Portugal",
                    borderChanges:[
                        "Portugal would be re-established into a republic after being ruled by a populist absolute monarchy since 1936. The portuguese monarchy would also be deposed and stripped of all royal titles",
                    ],
                    countryImage:"/images/treatyParis_France.jpg"
                },
                {
                    countryName: "Asia and the Pacific",
                    borderChanges:[
                        "Australasia would be re-established into a republic after being ruled by a military government since the 1936 coup",
                        "Macau would be handed over to the Legation Cities and Portuguese Timor would be handed over to German East Asia"
                    ],
                    countryImage:"/images/treatyParis_France.jpg"
                },
                {
                    countryName: "Africa",
                    borderChanges:[
                        "All Portuguese colonies (Angola, Mozambique, Guinea-Bissau) would be handed over to Mittleafrika",
                        "The British breakaway states of Kenya, the Gold Coast, and Nigeria would be incorperated into Mittleafrika without having any additional autonomy.",
                        "Southern Rhodesia and Natel would be handed over to South Africa."
                    ],
                    countryImage:"/images/treatyParis_France.jpg"
                }
            ]
        }],
        ["treaty-of-tokyo", {
            treatyName: "Treaty of Bangkok",
            treatyCountries:[{
                
                countryName: "Japan",
                borderChanges:[
                    "The Japanese Military Government was to be dismantled and replaced by a civilian republic. Emperor Hirohito was forced by the German government to abdicate in favour of his son, while the Japanese royal family had its responsibilities reduced to purely ceramonial purposes",
                    "Japan was to be confined to its Home Islands, and Taiwan. Korea was to be liberated and put under a transitional government."
                ],
                countryImage:"/images/treatyParis_France.jpg"
            },
            {
                
                countryName: "The Pacific",
                borderChanges:[
                    "The Japanese allies of Insulindia and the Philippines had been handed over to the German East Asian administration. They had also recieved all pacific islands controlled by Japan"
                ],
                countryImage:"/images/treatyParis_France.jpg"
            }
            ]
        }],
        ["treaty-of-washington", {
            treatyName: "Treaty of Washington",
            treatyCountries:[
                {
                    countryName: "United States of America",
                    borderChanges:[
                        "The democratic process of the United States would be reinstated, replacing the Military Junta that had been in power since the end of the Second American Civil War. Elections would also be restored.",
                        "Hawaii was split off from the US and given over to the German East Asian administration"

                    ],
                    countryImage:"/images/treatyParis_France.jpg"
                },
            ]
        }],
        ["treaty-of-algiers", {
            treatyName: "Treaty of Algiers",
            treatyCountries:[
                {
                    countryName: "The French State",
                    borderChanges:[
                        "Nationalist France was to be split into 2 sections. In North Africa, the Ottomans were given control over Algeria and Tunisia, while Morocco was established as a German puppet state.",
                        "French West Africa was given over to the Mittleafrikan administration."
                    ],
                    countryImage:"/images/treatyParis_France.jpg"
                },
            ]
        }]
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