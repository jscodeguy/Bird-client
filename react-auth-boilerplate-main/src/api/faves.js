import apiUrl from '../apiConfig'
import axios from 'axios'

// index function
export const getAllFaves = () => {
    return axios(`${apiUrl}/favorites`)
}

// show function
export const getOneFave = (faveId) => {
    return axios(`${apiUrl}/favorites/${faveId}`)
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