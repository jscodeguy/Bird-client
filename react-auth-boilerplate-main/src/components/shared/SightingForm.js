import React, { useState } from "react"
import { Form, Container, Button } from "react-bootstrap"


const SightingForm = (props) => {    
    const {sighting, handleChange, handleSubmit, heading} = props
    console.log("props to sighting form:", props)
    console.log("sighting in sightingform:", sighting)

    return (
        <Container className="justify-content-center">
            <h3>{heading}</h3>
            <Form onSubmit={handleSubmit}>
            <p>hi can you see this?</p>
            {/* <p>props: {props.sighting.id}</p> */}
            
                <Form.Label>Where Seen</Form.Label>
                <Form.Control 
                    placeholder="Where did you see the bird?"
                    value={sighting.where_seen}
                    name="where_seen"
                    onChange={handleChange}
                />
                <Form.Label>Date Seen</Form.Label>
                <Form.Control 
                    placeholder="What date did you see the bird? (mm/dd/yy)"
                    value={sighting.when_seen}
                    name="when_seen"
                    onChange={handleChange}
                />
                <Form.Label>Weather (to be dropdown)</Form.Label>
                <Form.Control 
                    placeholder="What was the weather like?"
                    value={sighting.weather}
                    // To be dropdown of choices
                    type="string"
                    name="weather"
                    onChange={handleChange}
                />
                <Form.Label>Description</Form.Label>
                <Form.Control 
                    placeholder="Describe your bird experience"
                    value={sighting.description}
                    type="string"
                    name="description"
                    onChange={handleChange}
                />
                <Form.Label>Bird ID (to come from API)</Form.Label>
                <Form.Control 
                    placeholder="1234_bird_id_from_api"
                    value={sighting.bird}
                    type="string"
                    name="bird"
                    onChange={handleChange}
                />
                <Button type="submit">Submit</Button>
            </Form>
        </Container>
    )
}

export default SightingForm
