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
    return axios({
        url: `${apiUrl}/pictures`,
        method: 'POST',
        headers: {
            Authorization: `Token token=${user.token}`
        },
        data: newPicture
    })
}
