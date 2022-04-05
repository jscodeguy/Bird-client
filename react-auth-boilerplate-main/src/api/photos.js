import apiUrl from '../apiConfig'
import axios from 'axios'

// index function
export const getAllPhotos = () => {
    return axios(`${apiUrl}/photos`)
}

// show function
export const getOnePhoto = (photoId) => {
    return axios(`${apiUrl}/photos/${photoId}`)
}