import React, {useState, useEffect} from 'react'
import { getOneFav, removeFav } from '../../api/favorite'
import { useParams } from 'react-router-dom'
import { Button } from 'react-bootstrap'


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
        removeFav(user, favorite.id)
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

    if (!favorite) {
        return <p>Loading...</p>
    } else if (favorite.length === 0) {
        return <p>No favorites yet, go add some</p>
    }

    if (favorite.length > 0) {
        favorite.Jsx = favorite.map(favorite => (
            <>
                <p>{favorite._id}</p>
                <p>{favorite.haveSeen}</p>
                <p>{favorite.bird}</p>
            </>
        ))
    }

    return (
        <>
            <h5> Show Favorites</h5>
            <p>{favorite.Jsx}</p>
            <Button onClick={() => destroyFav()}variant="danger">
                Delete
            </Button>
        </>
    )
}

export default ShowFaves