import apiUrl from '../apiConfig'
import axios from 'axios'

// index route for photo imported from the bird-api
export const getAllPictures = () => {
    return axios(`${apiUrl}/Pictures`)
}

// show route for photo imported from the bird-api
export const getOnePicture = (pictureId) => {
    return axios(`${apiUrl}/pictures/${pictureId}`)
}


// POST -> create function
export const createPicture = (user, newPicture) => {
    console.log("this is the new picture", newPicture)
    return axios({
        url: `${apiUrl}/pictures`,
        method: 'POST',
        headers: {
            Authorization: `Token token=${user.token}`
        },
        data: {picture: newPicture}
    })
}


// DELETE
// API call to destroy a sighting from the database.
export const removePicture = (user, pictureId) => {
    console.log(typeof pictureId)
    console.log("user in delete:", user)
    // console.log("id in delete:", pictureId)
    return axios({
        url: `${apiUrl}/pictures/${pictureId}`,
        method: "DELETE",
        headers: {
            Authorization: `Token token=${user.token}`
        }
    })
}