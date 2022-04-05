import apiUrl from '../apiConfig'
import axios from 'axios'

// index function
export const getAllFaves = () => {
    return axios(`${apiUrl}/favorites`)
}

// show function
export const getOneFave = (faveId) => {
    return axios(`${apiUrl}/faves/${faveId}`)
}