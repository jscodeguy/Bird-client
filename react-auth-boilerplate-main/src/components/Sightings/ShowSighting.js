import React, {useState, useEffect} from 'react'
import { getOneSight, updateSight, removeSight } from '../../api/sightings'
import { useParams, useNavigate } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import {showSightingSuccess, showSightingFailure} from '../shared/AutoDismissAlert/messages'
import EditSightingModal from './EditSightingModal'


const ShowSighting = (props) => {

    const [sighting, setSighting] = useState(null)
    const [modalOpen, setModalOpen] = useState(false)
    const [updated, setUpdated] = useState(false)
    const {user, msgAlert} = props
    const { id } = useParams()
    const navigate = useNavigate()
    // console.log("user in ShowSighting", user)
    // console.log("id in ShowSighting", id)

    useEffect(() => {
        getOneSight(id)
            .then(res => setSighting(res.data.sighting))
            .then(() => {
                msgAlert({
                    heading: 'Got it!',
                    message: showSightingSuccess,
                    variant: 'success',
                })
            })
            .catch(() => {
                msgAlert({
                    heading: 'Uh oh!',
                    message: showSightingFailure,
                    variant: 'danger',
                })
            })
    }, [updated])

    const removeTheSighting = () => {
        removeSight(user, sighting.id)
            .then(() => {
                msgAlert({
                    heading: 'Bye Bye Birdie',
                    message: "Sighting deleted",
                    variant: 'success',
                })
            })
            .then(() => {navigate(`/`)})
            .catch(() => {
                msgAlert({
                    heading: 'Uh oh!',
                    message: 'Something went wrong',
                    variant: 'danger',
                })
            })
    }


    if (!sighting) {
        return (
            <p>Loading...</p>
        )
    }

    return (
        <>
            <h2>Sighting Details</h2>
            <p>Where seen:<br/>{sighting.where_seen}</p>
            <p>When seen:<br/>{sighting.when_seen}</p>
            <p>Weather:<br/>{sighting.weather}</p>
            <p>Description:<br/>{sighting.description}</p>
            <p>Bird API ID:<br/>{sighting.bird}</p>

            <Button onClick={() => setModalOpen(true)} className="m-2" variant="warning">
                Edit bird sighting
            </Button>
            <Button onClick={() => removeTheSighting()} className="m-2" variant="danger">
                Delete bird sighting
            </Button>

            <EditSightingModal 
                sighting={sighting}
                show={modalOpen}
                user={user}
                msgAlert={msgAlert}
                triggerRefresh={() => setUpdated(prev => !prev)}
                updateSight={updateSight}
                handleClose={() => setModalOpen(false)}
            />
        </>
    )
}

export default ShowSighting
