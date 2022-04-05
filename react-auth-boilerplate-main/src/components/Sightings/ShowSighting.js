import React, {useState, useEffect} from "react"
import { getOneSight, removeSight } from "../../api/sightings"
import { useParams, useNavigate } from "react-router-dom"
import { Button } from "react-bootstrap"


const ShowSightings = (props) => {

    const [sighting, setSighting] = useState(null)
    const { user, msgAlert } = props
    const { id } = useParams()
    const navigate = useNavigate()
    console.log("user in ShowSighting", user)
    console.log("id in ShowSighting", id)

    useEffect(() => {
        getOneSight(id)
            .then(res => {
                console.log("response data sighting:", res.data.sighting)
                setSighting(res.data.sighting)
            })
            .catch(console.error)
    }, [id])

    const removeTheSighting = () => {
        removeSight(user, id)
            .then(() => {
                msgAlert({
                    heading: "Sighting deleted",
                    message: "You didn't see nothing",
                    variant: "success",
                })
            })
            .then(() => {navigate("/sightings")})
            .catch(() => {
                msgAlert({
                    heading: "Uh oh!",
                    message: "Well that didn't work.",
                    variant: "danger",
                })
            })
    }

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
        <Button onClick={() => removeTheSighting()}className="m-2" variant="danger">
            Delete Sighting
        </Button>
    </>
)
}

export default ShowSightings
