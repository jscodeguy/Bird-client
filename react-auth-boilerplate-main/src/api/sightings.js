// Import dependencies
import apiUrl from "../apiConfig"
import axios from "axios"

// Putting export at the beginning of each function makes it easy to destructure when you need it.

// INDEX
// Fetch call to pull all sightings from the API.
export const getAllSights = () => {
    return axios(`${apiUrl}/sightings`)
}

// SHOW
// Fetch call for just the selected sighting.
export const getOneSight = (sightId) => {
    return axios(`${apiUrl}/sightings/${sightId}`)
}

// POST
// API call to create a new sighting
// The arguemnts are passing the things we need to make the POST happen (user info and newSighting object with the entered details).
export const createSight = (user, newSighting) => {
    console.log("user:", user)
    console.log("newSighting:", newSighting)
    return axios({
        url: `${apiUrl}/sightings`,
        method: "POST",
        headers: {
            Authorization: `Token token=${user.token}`
        },
        data: {sighting: newSighting }
    })
}

// PATCH
// API call to update an existing sighting
export const updateSight = (user, updatedSighting) => {
    console.log("user in updatedSighting:", user)
    console.log("Updated sighting:", updatedSighting)
    return axios({
        url: `${apiUrl}/sightings/${updatedSighting.id}`,
        method: "PATCH",
        headers: {
            Authorization: `Token token=${user.token}`
        },
        data: { sighting: updatedSighting }
    })
}

// DELETE
// API call to destroy a sighting from the database.
export const removeSight = (user, sightId) => {
    console.log("user in delete:", user)
    console.log("id in delete:", sightId)
    return axios({
        url: `${apiUrl}/sightings/${sightId}`,
        method: "DELETE",
        headers: {
            Authorization: `Token token=${user.token}`
        }
    })
}
