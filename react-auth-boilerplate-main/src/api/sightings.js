import apiUrl from '../apiConfig'
import axios from 'axios'

// index function
export const getAllSightings = () => {
    return axios(`${apiUrl}/sightings`)
}

// show function
export const getOneSighting = (sightingId) => {
    return axios(`${apiUrl}/sightings/${sightingId}`)
}