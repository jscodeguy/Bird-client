import apiUrl from '../apiConfig'
import axios from 'axios'

// index function
export const getAllFav = () => {
    return axios(`${apiUrl}/favorites`)
}

// show function
export const getOneFav = (favoritesId) => {
    return axios(`${apiUrl}/favorites/${favoritesId}`)
}

// DELETE -> remove function
export const removeFav = (user, favoritesId) => {
    console.log('THIS IS USER IN REMOVE FAV', user)
    console.log('THIS IS FAVORITES ID', favoritesId)
    return axios({
        url: `${apiUrl}/favorites/${favoritesId}`,
        method: 'DELETE',
        headers: {
            Authorization: `Token token=${user.token}`
        }
    })
}