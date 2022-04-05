// Import dependencies
import React, { useState, useEffect } from "react"
import { getAllSights } from "../../api/sightings"


const IndexSightings = () => {
    const [sightings, setSightings] = useState(null)

    useEffect(() => {
        getAllSights()
            .then(res => {
                console.log("response data sightings:", res.data.sightings)
                setSightings(res.data.sightings)
            })
            .catch(console.error)
    }, [])  // This is the dependency array. It's where data is kept for useState to check against to know when changes are made.

    if (!sightings) {
        return <p>Loading...</p>
    } else if (sightings.length === 0) {
        return <p>No sighting??! Go add some!</p>
    }

    if (sightings.length > 0) {
        sightings.Jsx = sightings.map(sightings => (
            <li key={sightings.id}>
                {sightings.weather}
            </li>
        ))
    }

    return (
        <>
            <h3>All the Sightings</h3>
            <ul>
                <li>{sightings.Jsx}</li>
            </ul>
        </>
    )
}

export default IndexSightings
