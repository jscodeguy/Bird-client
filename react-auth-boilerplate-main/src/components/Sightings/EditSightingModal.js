import React, { useState } from 'react'
import {Modal} from 'react-bootstrap'
import { genericUpdateSuccess, genericUpdateFailure } from '../shared/AutoDismissAlert/messages'
import SightingForm from '../shared/SightingForm'

const EditSightingModal = (props) => {
    const { user, show, handleClose, updateSight, msgAlert, triggerRefresh } = props
    const [sighting, setSighting] = useState(props.sighting)

    const handleChange = (e) => {
        // e === event
        e.persist()

        setSighting(prevSighting => {
            const name = e.target.name
            let value = e.target.value
            // console.log('etarget type', e.target.type)
            // console.log('this is e.target checked', e.target.checked)

            // Conditionals and data validation go here.

            const updatedValue = { [name]: value }

            // console.log('prevSighting', prevSighting)
            // console.log('updatedValue', updatedValue)

            return {...prevSighting, ...updatedValue}
        })
    }

    const handleSubmit = (e) => {
        // e === event
        e.preventDefault()

        // console.log('the sighting to submit', sighting)
        updateSight(user, sighting)
            // if create is successful, we should navigate to the show page
            .then(() => handleClose())
            // then we send a success message
            .then(() =>
                msgAlert({
                    heading: 'Got it!',
                    message: genericUpdateSuccess,
                    variant: 'success',
                }))
            .then(() => triggerRefresh())
            // if there is an error, we'll send an error message
            .catch(() =>
                msgAlert({
                    heading: 'Uh oh!',
                    message: genericUpdateFailure,
                    variant: 'danger',
                }))
        // console.log('this is the sighting', sighting)
    }

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton></Modal.Header>
            <Modal.Body>
                <SightingForm 
                    sighting={sighting}
                    handleChange={handleChange}
                    handleSubmit={handleSubmit}
                    heading="Edit bird sighting"
                />
            </Modal.Body>
        </Modal>
    )
}
    
export default EditSightingModal
