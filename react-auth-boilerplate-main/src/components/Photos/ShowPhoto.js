import React, {useState, useEffect} from 'react'
import { getOnePicture, removePicture} from '../../api/photos.js'
import { useParams } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import {showPictureSucess, showPictureFailure} from '../shared/AutoDismissAlert/messages'
import { useNavigate } from 'react-router-dom'







const ShowPictures = (props) => {
        const navigate = useNavigate()
        const [picture, setPicture] = useState(null)
        console.log('props in showpictures', props)
        const { id } = useParams()
        console.log('id in showpicture', id)
        // empty dependency array in useEffect to act like component did mount
        useEffect(() => {
            getOnePicture(id)
                .then(res => setPicture(res.data.picture))
                .catch(console.error)
        }, [id])
        console.log("THIS IS PICTURE", picture)
        console.log("this is the user prop!", props.user)
        const removeThePicture = function (props) {
            // console.log("this is the user prop!", user)
            removePicture(props.user, picture._id)
                .then(() => {
                    props.msgAlert({
                        heading: 'im out',
                        message: "picture deleted",
                        variant: 'success',
                    })
                })
                .then(() => {navigate(`/pictures`)})
                .catch(() => {
                    props.msgAlert({
                        heading: 'Uh oh!',
                        message: 'Something went wrong',
                        variant: 'danger',
                    })
                })
        }
    


        if (!picture) {
        return (
                <h1>Loading....</h1>
        )
    }



        return (
            <>
            <h5> show photos</h5>
            {picture.description}
            {picture.bird}

            <Button onClick={() => removeThePicture(props)} className="m-2" variant="danger">
                Delete bird picture
            </Button>
         
        </>
    )

    }
     export default ShowPictures