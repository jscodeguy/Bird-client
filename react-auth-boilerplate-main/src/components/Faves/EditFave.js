import React, { useState } from 'react'
import {Modal} from 'react-bootstrap'
import FavoriteForm from '../shared/FaveForm'

const EditFave = (props) => {
    // destructures my funcitons and user as from props
    const { user, show, handleClose, updateFave, msgAlert, triggerRefresh } = props
    // 
    const [favorite, setFavorite] = useState(props.favorite)

    const handleChange = (e) => {
        // e === event
        e.persist()
console.log('this is the favorite log', favorite)   
        setFavorite(prevFave => {
            const name = e.target.name
            let value = e.target.value
            console.log('etarget type', e.target.type)
            console.log('this is e.target checked', e.target.checked)
            //this conditional updates the value of the checkbox as a boolean
            if(name === "haveSeen" && e.target.checked){
                value = true
            } else if (name === "haveSeen" && !e.target.checked){
                value = false
            }
            const updatedValue = { [name]: value }

            console.log('prevFave', prevFave)
            console.log('updatedValue', updatedValue)

            return {...prevFave, ...updatedValue}
        })
    }
    const handleSubmit = (e) => {
        // e === event
        //prevent default prevents the default function of a submit button (refreshing the browser ) from happening
        e.preventDefault()

        console.log('the favorite to submit', favorite)
        updateFave(user, favorite)
        // if create is successful, we should navigate to the show page
        .then(() => handleClose())
        // console.log('console time')
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