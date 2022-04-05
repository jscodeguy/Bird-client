import React, {useState, useEffect} from 'react'
import { getOneSight } from '../../api/sightings'
import { useParams } from 'react-router-dom'


const ShowSightings = () => {

    const [sighting, setSighting] = useState(null)
    const { id } = useParams()
    console.log('id in showSighting', id)

    useEffect(() => {
        getOneSight(id)
            .then(res => {
                console.log("response data sighting:", res.data.sighting)
                setSighting(res.data.sighting)
            })
            .catch(console.error)
    }, [id])

    if (!sighting) {
        return <p>Loading sighting...</p>
    }

    return (
        <>
        <h2>Sighting Details</h2>
        <p>Where seen:<br/>{sighting.where_seen}</p>
        <p>When seen:<br/>{sighting.when_seen}</p>
        <p>Weather:<br/>{sighting.weather}</p>
        <p>Description:<br/>{sighting.description}</p>
        <p>Bird API ID:<br/>{sighting.bird}</p>
    </>
)
}

export default ShowSightings
