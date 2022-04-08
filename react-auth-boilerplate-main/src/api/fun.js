import axios from "axios"

let idNBA = "740"

export const getFun = (updatedFun) => {
    return axios ({
        url: 'https://api-nba-v1.p.rapidapi.com/players',
        params: {id: "740"},
        method: "GET",
        headers: {
            'X-RapidAPI-Host': 'api-nba-v1.p.rapidapi.com',
            'X-RapidAPI-Key': '701702fab9mshd5535a8e5d6946ap14bdf7jsnf3bd97f911e8'
        },
        data: { player: updatedFun }
    })
}
