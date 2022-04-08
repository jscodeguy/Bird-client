// Import dependencies
import React, { useState, useEffect } from "react"
import { getAllSights } from "../../api/sightings"
import { Link } from "react-router-dom"
import { Container, Card } from 'react-bootstrap'
import Moment from "react-moment"

//sets the layout for the bootstrap card 
const cardContainerLayout = {
    display: 'flex',
    justifyContent: 'center',
    flexFlow: 'row wrap'
}

const IndexSightings = (props) => {
    //  Destructuring the useState React hook
    const [sightings, setSightings] = useState(null)

    useEffect(() => {
        getAllSights()
            .then(res => {
                // console.log("response data sightings:", res.data.sightings)
                setSightings(res.data.sightings)
            })
            .catch(console.error)
    }, [])  // This is the dependency array. It's where data is kept for useState to check against to know when changes are made.

    if (!sightings) {
        return <p>Loading...</p>
    } else if (sightings.length === 0) {
        return <p>No sighting??! Go add some!</p>
    }

    console.log("user:", props.user)

    if (sightings.length > 0) {
        sightings.Jsx = sightings.map(sightings => (
            <Card key={sightings._id} style={{width: '30%' }} className='m-2'>
                <Card.Header className="card-info-header-sm"><Moment format="DD MMMM YYYY">{sightings.when_seen}</Moment></Card.Header>
                <Card.Body>
                    <Link to={`./${sightings._id}`}>{sightings.where_seen}</Link>   
                </Card.Body>
            </Card>
        ))
    }

    return (
        <Container>
            <p className="section-title">All the Sightings</p>
            <div style={cardContainerLayout}>
                {sightings.Jsx}
            </div>
        </Container>
    )
}

export default IndexSightings
