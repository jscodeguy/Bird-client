//imports
import React, {useState, useEffect} from 'react'
import { getOneFav, removeFav, updateFave } from '../../api/favorite'
import { useParams } from 'react-router-dom'
import { Button, Card, Spinner, Container } from 'react-bootstrap'
import EditFave from './EditFave'

//sets the layout for the bootstrap card 
const cardContainerLayout = {
    display: 'flex',
    justifyContent: 'center',
    flexFlow: 'row wrap'
}
//this is the function that handles showing the individual favorite object
const ShowFaves = (props) => {
    //these are where we set the state
    const [favorite, setFaves] = useState(null)
    const [modalOpen, setModalOpen] = useState(false)
    const [updated, setUpdated] = useState(false)
    //this line destructures from props
    const {user, msgAlert, triggerRefresh} = props
    console.log('props in showFaves', props)
    // this line is used to destructure the id from the response parameters
    const { id } = useParams()
    console.log('id in showFaves', id)
    console.log('favorites data', favorite)
    // empty dependency array in useEffect to act like component did mount
    useEffect(() => {
        // this is the axios call to get the individual favorite
        getOneFav(id)
        //promise chain sets the state to the specified object or returns error
            .then(res => {setFaves(res.data.favorite)
            console.log('res', res)})
            .catch(console.error)
            // dependency array
    }, [updated])
// the delete function
    const destroyFav = () => {
        //takes the user and shown object as params
        removeFav(user, favorite._id)
        //after deleting, returns success and refreshes to show data has been deleted
            .then(() =>
                msgAlert({
                    heading: 'Fav updated!',
                    message: 'great! the pet loves it!',
                    variant: 'success',
                }))
            .then(() => triggerRefresh())
            // else there is an error, we'll send an error message
            .catch(() =>
                msgAlert({
                    heading: 'Oh No!',
                    message: 'that aint it',
                    variant: 'danger',
            }))
    }
    console.log('favorite length', favorite)
    console.log('favorite length', typeof favorite)
    // if there is no object to show, display loading
    if (!favorite) {
        return (
            <Container fluid className="justify-content-center">
                <Spinner animation="border" role="status" variant="warning" >
                    <span className="visually-hidden">Loading....</span>
                </Spinner>
            </Container>
        )
    }
//if there is an object to show, pass the props to small tags
    if (favorite) {
        favorite.Jsx =(
            <>
                <p>Have Seen: {favorite.haveSeen}<br /></p>
                <p>Bird: {favorite.bird}</p>    
            </>
        )
    }
//return the data, assign the buttons their respsective functions and give the edit fave component the props
    return (
        <>
            <Container className="m-5">
                <h5> Show Favorites</h5>
                    {favorite.Jsx}
                <Button onClick={() => destroyFav()}variant="danger">
                    Delete
                </Button>
                <Button onClick={() => setModalOpen(true)} className="m-2" variant="warning">
                    Edit
                </Button>
            </Container>
                <EditFave 
                favorite={favorite}
                show={modalOpen}
                user={user}
                msgAlert={msgAlert}
                triggerRefresh={() => setUpdated(prev => !prev)}
                updateFave={updateFave}
                handleClose={() => setModalOpen(false)}
            />
        </>
    )
}
//exports the component
export default ShowFaves