// Import dependencies
import React, { useState } from "react"
import { createSight } from "../../api/sightings"
import { useNavigate } from "react-router-dom"
import SightingForm from "../shared/SightingForm"
import { createSightingSuccess, createSightingFailure } from "../shared/AutoDismissAlert/messages"

// CreateSighting.js renders a form and calls the createSighting function from sighting.js, which contains all the sighting-based API calls.

// We'll need the user prop here as we've required an authorized login to make a new document in the database.
const CreateSighting = (props) => {
    const { user, msgAlert } = props
    // console.log("user prop in CreateSighting:", user)
    const navigate = useNavigate()
    const [sighting, setSighting] = useState({
        where_seen: "",
        when_seen: "",
        weather: "",
        description: "",
        bird: ""
    })
    // console.log("info in Create:", sighting)

    const handleChange = (e) => {
        // e === event

        // e.persist isolates the current event to prevent other actions from being read into the callback
        e.persist()

        setSighting(prevSighting => {
            // Capturing the form values based on what the user enters, and ensures those value types are what we want (and the schema expects).
            const name = e.target.name
            let value = e.target.value
            // console.log("event target type:", e.target.type)
            
            // ******* Will need to write a validator for date, so user can't set a date that hasn't happened yet.

            const updatedValue = { [name]: value }

            // console.log("the sighting was:", prevSighting)
            // console.log("the sighting will become:", updatedValue)

            // Preserves the previous form and adds what's been updated.
            return {...prevSighting, ...updatedValue}
        })
    }

    const handleSubmit = (e) => {
        // e === event

        // Prevents any event from performing its default action, so nothing happens until we want it to.
        e.preventDefault()

        createSight(user, sighting)
            // If create is sucessful, navigate to the SHOW page.
            .then(res => {navigate(`/sightings/${res.data.sighting._id}`)})
            // Then send a success message...
            .then(() =>
                msgAlert({
                    heading: "Got it!",
                    message: createSightingSuccess,
                    variant: "success",
                }))
            // ...or a failure message.
            .catch(() =>
                msgAlert({
                    heading: "Uh oh!",
                    message: createSightingFailure,
                    variant: "danger",
                }))
            // console.log("the sighting:", sighting)
    }

    return (
        // Moved form elements to separate component (SightingForm) so we can reuse the code.
        <SightingForm
            sighting={sighting}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            heading="Add a new sighting"
        />
    )
}

export default CreateSighting
