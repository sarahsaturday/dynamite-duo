const database = {
    heroes: [
        {
            id: 1,
            name: "Dynoguy",
            power: "Fire blasts"
        },
        {
            id: 2,
            name: "Hyperspeed",
            power: "Super speed"
        }
    ],
    villains: [
        {
            id: 1,
            name: "Bad Guy 1",
            power: "Stealth mode"
        },
        {
            id: 2,
            name: "Bad Guy 2",
            power; "Bad breath"
        }
    ]
}



export const getHeroes = () => {
    return database.heroes.map(hero => ({ ...hero }))
}

export const getVillains = () => {
    return database.villains.map(villain => ({...villain}))
}