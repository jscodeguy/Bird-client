// imports
import React, { useState } from 'react'
import {Modal} from 'react-bootstrap'
import FavoriteForm from '../shared/FaveForm'
//this is the function that handles editing the favorites objects
const EditFave = (props) => {
    // destructures my funcitons and user as from props
    const { user, show, handleClose, updateFave, msgAlert, triggerRefresh } = props
    // sets the state for favorites 
    const [favorite, setFavorite] = useState(props.favorite)
    //this function will handle the live updating of the input fields as they are changed
    const handleChange = (e) => {
        // e === event
        e.persist()
        console.log('this is the favorite log', favorite) 
        //this function will set the current state of the favorite object as updated and then set the updated value  
        setFavorite(prevFave => {
            //this variable is set to the "key" of the object we are updating/creating
            const name = e.target.name
            //this variable will hold the value of the object we are updating/creating
            let value = e.target.value
            //console logs to make sure we are getting the value
            console.log('etarget type', e.target.type)
            console.log('this is e.target checked', e.target.checked)
            //this conditional updates the value of the checkbox as a boolean
            if(name === "haveSeen" && e.target.checked){
                value = true
            } else if (name === "haveSeen" && !e.target.checked){
                value = false
            }
            //this variable holds the value of the field we are in and updates it as you type
            const updatedValue = { [name]: value }
            //these logs show the previous object value and the updated value
            console.log('prevFave', prevFave)
            console.log('updatedValue', updatedValue)
            //this return gives us the values needed to populate the object with its value
            return {...prevFave, ...updatedValue}
        })
    }
    const handleSubmit = (e) => {
        // e === event
        //prevent default prevents the default function of a submit button (refreshing the browser ) from happening
        e.preventDefault()
        console.log('the favorite to submit', favorite)
        // this is the call from axios to run our route
        updateFave(user, favorite)
        // if create is successful, we should navigate to the show page
        .then(() => handleClose())
            // then we send a success message
            .then(() =>
                msgAlert({
                    heading: 'favorite Updated! Success!',
                    message: 'u did it',
                    variant: 'success',
                }))
            .then(() => triggerRefresh())
            // if there is an error, we'll send an error message
            .catch((err) =>{
                console.log('this is the big dumb error', err)
                msgAlert({
                    heading: 'Oh No!',
                    message: 'that aint it',
                    variant: 'danger',
                })
            })
            
        console.log('this is the favorite', favorite)
    }
    
// the return is the form that we use to edit
    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton></Modal.Header>
            <Modal.Body>
                <FavoriteForm 
                    favorite={favorite}
                    handleChange={handleChange}
                    handleSubmit= {handleSubmit}
                    heading="Edit favorite!"
                />
            </Modal.Body>
        </Modal>
    )
}
    
export default EditFave