import React, {useState, useEffect} from 'react'
import { getOneFav } from '../../api/favorite'
import { useParams } from 'react-router-dom'
import { removeFav } from '../../api/favorite'
import { Button } from 'react-bootstrap'


const ShowFaves = (props) => {

    const {user, msgAlert, triggerRefresh} = props
    const [favorites, setFaves] = useState(null)
    console.log('props in showFaves', props)
    const { id } = useParams()
    console.log('id in showFaves', id)
    // empty dependency array in useEffect to act like component did mount
    useEffect(() => {
        getOneFav(id)
            .then(res => setFaves(res.data.favorites))
            .catch(console.error)
    }, [id])

    const destroyFav = () => {
        removeFav(user, favorites._id)
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
            <p>{favorites._id}</p>
            <p>{favorites.haveSeen}</p>
            <p>{favorites.bird}</p>
            <Button onClick={() => destroyFav()}variant="danger">
                Delete
            </Button>
        </>
    )
}

export default ShowFaves
