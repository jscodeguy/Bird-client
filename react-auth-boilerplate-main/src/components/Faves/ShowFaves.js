import React, {useState, useEffect} from 'react'
import { getOneFav, removeFav } from '../../api/favorite'
import { useParams } from 'react-router-dom'
import { Button, Card, Spinner, Container } from 'react-bootstrap'

const cardContainerLayout = {
    display: 'flex',
    justifyContent: 'center',
    flexFlow: 'row wrap'
}

const ShowFaves = (props) => {

    const {user, msgAlert, triggerRefresh} = props
    const [favorite, setFaves] = useState(null)
    console.log('props in showFaves', props)
    const { id } = useParams()
    console.log('id in showFaves', id)
    console.log('favorites data', favorite)
    // empty dependency array in useEffect to act like component did mount
    useEffect(() => {
        getOneFav(id)
            .then(res => {setFaves(res.data.favorite)
            console.log('res', res)})
            .catch(console.error)
    }, [id])

    const destroyFav = () => {
        removeFav(user, favorite._id)
            .then(() =>
                msgAlert({
                    heading: 'Fav updated!',
                    message: 'great! the pet loves it!',
                    variant: 'success',
                }))
            .then(() => triggerRefresh())
            // if there is an error, we'll send an error message
            .catch(() =>
                msgAlert({
                    heading: 'Oh No!',
                    message: 'that aint it',
                    variant: 'danger',
            }))
    }
    console.log('favorite length', favorite)
    console.log('favorite length', typeof favorite)
    if (!favorite) {
        return (
            <Container fluid className="justify-content-center">
                <Spinner animation="border" role="status" variant="warning" >
                    <span className="visually-hidden">Loading....</span>
                </Spinner>
            </Container>
        )
    }

    if (favorite) {
        favorite.Jsx =(
            <>
                <Card>
                    <Card.Body>
                        <Card.Text>
                            <small>Id: {favorite._id}</small>
                            <small>Have Seen: {favorite.haveSeen}</small>
                            <small>Bird: {favorite.bird}</small>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </>
        // ))
        )
    }

    if (!favorites) {
        return (
            <h1>Loading....</h1>
        )
    }

    // Pulling the comments array into a Jsx object so we can render them
    favorites.Jsx = favorites.comments.map(favorites => (
        <li key={favorites._id}>{favorites.note} by {favorites.author}</li>
    ))

    return (
        <>
            <h5> Show Favorites</h5>
            <div style={cardContainerLayout}>
                {favorite.Jsx}
                <Button onClick={() => destroyFav()}variant="danger">
                    Delete
                </Button>
            </div>
            
        </>
    )
}

export default ShowFaves
