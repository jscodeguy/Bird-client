import React, {useState, useEffect} from 'react'
import { getOneSighting } from '../../api/sightings'
import { useParams } from 'react-router-dom'


const ShowSightings = (props) => {

    const [sighting, setSightings] = useState(null)
    console.log('props in showSighting', props)
    const { id } = useParams()
    console.log('id in showSighting', id)
    // empty dependency array in useEffect to act like component did mount
    useEffect(() => {
        getOneSighting(id)
            .then(res => setSightings(res.data.sightings))
            .catch(console.error)
    }, [id])



    return (
        <>
        <h5> show sightings</h5>
    </>
)
}

export default ShowSightings