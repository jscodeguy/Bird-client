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

// create function
export const createFavorite = (user, newFave) => {
    console.log('user', user)
    console.log('this is newFave', newFave)
    return axios({
        url: `${apiUrl}/favorites`,
        method: 'POST',
        headers: {
            Authorization: `Token token=${user.token}`
        },
        data: { favorite: newFave }
    })
}
// Patch -> update function
export const updateFave = (user, updatedFave) => {
    console.log('user', user)
    console.log('this is updatedFave', updatedFave)
    // const jsonFave = JSON.stringify(updatedFave)
    // console.log('this is the json string', jsonFave)
    const sendData = { favorite: {
        haveSeen: updatedFave.haveSeen, 
        notes: updatedFave.notes, 
        pics: updatedFave.pics, 
        bird: updatedFave.bird
    }}
    return axios({
        url: `${apiUrl}/favorites/${updatedFave._id}`,
        method: 'PATCH',
        headers: {
            Authorization: `Token token=${user.token}`
        },
        data: sendData
    })
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