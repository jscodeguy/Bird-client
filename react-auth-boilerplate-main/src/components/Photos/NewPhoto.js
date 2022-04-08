import React, { useState } from 'react'
import { Form, Container, Button } from 'react-bootstrap'
import { createPicture } from '../../api/photos'
import {createPictureSuccess, createPictureFailure} from '../shared/AutoDismissAlert/messages'
import { useNavigate } from 'react-router-dom'


// create picture renders a form and calls createPicture function
// maybe redirect(navigate) to the new picture show page
// props we'll need are user, msgAlert
const CreatePicture = (props) => {
    const {user, msgAlert} = props
    console.log('user in create', user)
    const navigate = useNavigate()
    // we'll need two states
    const [picture, setPicture] = useState({ source: 'd', description: '', bird: 'y', owner: user._id})
    console.log('picture in create', picture)
    //  an empty picture object
    // and a createdId (used to navigate)
    // we'll need handleChange and handleSubmit funcs
    const handleChange = (e) => {
        // e === event
        e.persist()
        //the e.target name and e.target value are a key value based pair
        //this pair can change and be edited
        setPicture(prevPicture => {
            const name = e.target.name
            let value = e.target.value
            console.log('etarget type', e.target.type)
            const updatedValue = { [name]: value }

            console.log('prevPicture', prevPicture)
            console.log('updatedValue', updatedValue)

            return {...prevPicture, ...updatedValue}
        })
    }

    const handleSubmit = (e) => {
        // e === event
        e.preventDefault()

        createPicture(user, picture)

            // if create is successful, we should navigate to the show page
            .then(res => {
                console.log("created pic response", res)
                navigate(`/pictures/${res.data.picture._id}`)})

            // then we send a success message
            .then(() =>
            
                msgAlert({
                    heading: 'picture Added! Success!',
                    message: createPictureSuccess,
                    variant: 'success',
                }))
            // if there is an error, we'll send an error message
            .catch(() =>
                msgAlert({
                    heading: 'Oh No!',
                    message: createPictureFailure,
                    variant: 'danger',
                }))
        // console.log('this is the picture', picture)
    }

    return (
        <Container className="justify-content-center">
            <Form onSubmit={handleSubmit}>
                <Form.Label>Description</Form.Label>
                <Form.Control 
                    placeholder="Tell us all about it"
                    value={picture.description}
                    name='description'
                    onChange={handleChange}
                />

                <Button type='submit'>Submit</Button>
            </Form>
        </Container>
    )
}

export default CreatePicture