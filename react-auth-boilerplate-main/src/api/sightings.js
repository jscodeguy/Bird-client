// Import dependencies
import apiUrl from "../apiConfig"
import axios from "axios"

// Fetch call to pull all sightings from the API
export const getAllSights = () => {
    return axios(`${apiUrl}/sightings`)
}