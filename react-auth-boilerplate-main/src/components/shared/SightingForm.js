import React from "react"
import { Form, Container, Button } from "react-bootstrap"


const SightingForm = (props) => {    
    const {sighting, handleChange, handleSubmit, heading} = props
    // console.log("props to sighting form:", props)
    // console.log("sighting in sightingform:", sighting)

    return (
        <Container className="justify-content-center">
            <h3>{heading}</h3>
            <Form onSubmit={handleSubmit}>
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
                <Form.Select
                    aria-label="Weather"
                    name="weather"
                    defaultValue={sighting.weather}
                    onChange={handleChange}>
                        <option>What was the weather?</option>
                        <option value="sun">Sun</option>
                        <option value="overcast">Overcast</option>
                        <option value="rain">Rain</option>
                        <option value="snow">Snow</option>
                    </Form.Select>                
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
