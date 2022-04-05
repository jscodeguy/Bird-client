import React, { useState } from "react"
import { Form, Container, Button } from "react-bootstrap"
import { createSight } from "../../api/sightings"

// CreateSighting.js renders a form and calls the createSighting function from sighting.js, which contains all the sighting-based API calls.

// We'll need the user prop here as we've required an authorized login to make a new document in the database.
const CreateSighting = (props) => {
    const {user} = props
    console.log("user prop in CreateSighting:", user)
    const [sighting, setSighting] = useState({
        where_seen: "",
        when_seen: "",
        weather: "",
        description: "",
        bird: ""
    })
    console.log("info in Create:", sighting)

    const handleChange = (e) => {
        // e === event

        // e.persist isolates the current event to prevent other actions from being read into the callback
        e.persist()

        setSighting(prevSighting => {
            // Capturing the form values based on what the user enters, and ensures those value types are what we want (and the schema expects).
            const name = e.target.name
            let value = e.target.value
            console.log("event target type:", e.target.type)
            
            const updatedValue = { [name]: value}

            console.log("the sighting was:", prevSighting)
            console.log("the sighting will become:", updatedValue)

            // Preserves the previous form and adds what's been updated.
            return {...prevSighting, ...updatedValue}
        })
    }

    const handleSubmit = (e) => {
        // e === event

        // Revents any event from performing its default action, so nothing happens until we want it to.
        e.preventDefault()

        createSight(user, sighting)
            .then(res => {console.log(res.data.sighting)})
            .catch(err => console.log(err))
            console.log("the sighting:", sighting)
    }

    return (
        <Container className="justify-content-center">
            <Form onSubmit={handleSubmit}>
                
                <Form.Label>Where Seen</Form.Label>
                <Form.Control
                    placeholder="Where did you see the bird?"
                    value={sighting.where_seen}
                    name="where_seen"
                    onChange={handleChange}
                />
                <Form.Label>Date Seen</Form.Label>
                <Form.Control
                    placeholder="What date did you see the bird?"
                    value={sighting.when_seen}
                    name="when_seen"
                    onChange={handleChange}
                />
                <Form.Label>Weather (future dropdown)</Form.Label>
                {/* Come back and make this a dropdown list of choices */}
                <Form.Control
                    placeholder="What was the weather like? (to become dropdown)"
                    value={sighting.weather}
                    name="weather"
                    onChange={handleChange}
                />
                <Form.Label>Description</Form.Label>
                <Form.Control
                    placeholder="Talk about your bird sighting experience!"
                    value={sighting.description}
                    name="description"
                    onChange={handleChange}
                />
                <Form.Label>Bird ID (will be from API)</Form.Label>
                <Form.Control
                    placeholder="1234_bird_id_from_api"
                    value={sighting.bird}
                    name="bird"
                    onChange={handleChange}
                />
                <Button type="submit">Submit</Button>
            </Form>
        </Container>
    )
}

export default CreateSighting
