import axios from "axios"

let idNBA = 740

// Exported function that calls a third party API for info on NBA player Jabari Bird
export const getFun = (updatedFun) => {
    return axios ({
        url: 'https://api-nba-v1.p.rapidapi.com/players',
        params: {id: `${idNBA}`},
        method: "GET",
        headers: {
            'X-RapidAPI-Host': 'api-nba-v1.p.rapidapi.com',
            'X-RapidAPI-Key': '701702fab9mshd5535a8e5d6946ap14bdf7jsnf3bd97f911e8'
        },
        data: { player: updatedFun }
    })
}

// Exported function that makes a call to the NBA API, using a random number generator for the player's info to fetch.
export const getRandomFun = () => {
    idNBA = Math.floor(Math.random() * 3400) + 1
    console.log("nba id:", idNBA)
    getFun()
}
