import React, {useState, useEffect} from 'react'
import { getOneSight, updateSight, removeSight } from '../../api/sightings'
import { useParams, useNavigate } from 'react-router-dom'
import { Button, Container } from 'react-bootstrap'
import {showSightingSuccess, showSightingFailure} from '../shared/AutoDismissAlert/messages'
import EditSightingModal from './EditSightingModal'
import Moment from "react-moment"


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
        removeSight(user, sighting._id)
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
            <Container className='m-5'>
                <h2>Sighting Details</h2>
                <p className='sighting'>Where seen:<br/>{sighting.where_seen}</p>
                <p className='sighting'>When seen:<br/>                
                <Moment format="DD MMM, YYYY">{sighting.when_seen}</Moment></p>
                <p className='sighting'>Weather:<br/>{sighting.weather}</p>
                <p className='sighting'>Description:<br/>{sighting.description}</p>



                <Button onClick={() => setModalOpen(true)} className="m-2" variant="warning">
                    Edit bird sighting
                </Button>
                <Button onClick={() => removeTheSighting()} className="m-2" variant="danger">
                    Delete bird sighting
                </Button>
            </Container>

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
