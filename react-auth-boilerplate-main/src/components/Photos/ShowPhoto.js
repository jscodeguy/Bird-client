import React, {useState, useEffect} from 'react'
import { getOnePicture, removePicture} from '../../api/photos.js'
import { useParams } from 'react-router-dom'
import { Image, Button, Container } from 'react-bootstrap'
import {showPictureSucess, showPictureFailure} from '../shared/AutoDismissAlert/messages'
import { useNavigate } from 'react-router-dom'


const ShowPictures = (props) => {
    const navigate = useNavigate()
    const [picture, setPicture] = useState(null)
    // console.log('props in showpictures', props)
    const { id } = useParams()
    // console.log('id in showpicture', id)
    // empty dependency array in useEffect to act like component did mount
    
    useEffect(() => {            
        getOnePicture(id)
            .then(res => setPicture(res.data.picture))
            .catch(console.error)
    }, [id])

    // console.log("THIS IS PICTURE", picture)
    // console.log("this is the user prop!", props.user)
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
            .then(() => {navigate(`/`)})
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
    
    // Pulling the comments array into a Jsx object so we can render them
    picture.Jsx = picture.comments.map(picture => (
        <p key={picture._id}><strong>
        - {picture.note}</strong></p>
    ))

    return (

        <>
            <Container className="m-5">
                <p className="pic-title">"{picture.description}"</p>
                <Image src={picture.source} className="img-fluid shadow-4"/><br/>
                {/* <p>Featuring: {picture.bird}</p> */}

                <Button onClick={() => removeThePicture(props)} className="m-2" variant="danger">
                    Delete picture
                </Button>
                {/* <Button onClick={() => makeComment(props)}
                    className="m-2" variant="success">
                        Leave comment
                    </Button> */}
            </Container>

            <Container className="comment-wrap">
                <p className="comment-wrap-title">Comments? Comments!</p>
                    {picture.Jsx}
            </Container>

        </>
    )
}

export default ShowPictures
