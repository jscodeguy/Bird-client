import React, { useState, useEffect } from 'react'
import FavoriteForm from './../shared/FaveForm'
import { useNavigate } from 'react-router-dom'
import { createFavorite } from '../../api/favorite'

const CreateFave = (props) => {
    console.log('this is my props', props)
    //destructuring user so we don't need to call this.props
    const { user } = props
    //console.log to make sure that our user is being used
    console.log('user in create', user)
    //navigate will be used later for redirect to show page
    const navigate = useNavigate()
    //this sets the state and an empty favorite object
    const [favorite, setFave] = useState({haveSeen: false, notes: null, pics: null, bird: '', owner:user})
    console.log('fave in create', favorite)
    //this function will handle the live updating of the input fields as they are changed
    const handleChange = (e) => {
        // e === event
        e.persist()
        //this function will set the current state of the favorite object as updated and then set the updated value
        setFave(prevFave => {
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
    //this function will handle the event where the form is submitted
    const handleSubmit = (e) => {
        // e === event
        //prevent default prevents the default function of a submit button (refreshing the browser ) from happening
        e.preventDefault()

        createFavorite(user, favorite)
            // if create is successful, we should navigate to the show page
            .then(res => {navigate(`/favorites/${res.data.favorite._id}`)})
            // then we send a success message
            .then(() =>
            console.log('pet creation successful')
                )
            // if there is an error, we'll send an error message
            .catch(() =>
            console.error
            )
        console.log('this is the created favorite', favorite)
    }

    return (
        <FavoriteForm 
            favorite={favorite}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            heading="Add new Favorite sighting!"
        />
    )
}

export default CreateFave