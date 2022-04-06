import React, { useState, useEffect } from 'react'
import { getAllFav, updateFave } from '../../api/favorite'
import { Link } from 'react-router-dom'
import EditFave from './EditFave'


const IndexFaves = (props) => {
    const [favorites, setFaves] = useState(null)
    const [modalOpen, setModalOpen] = useState(true)
    const [updated, setUpdated] = useState(false)
    const {user, msgAlert} = props
    useEffect(() => {
        getAllFav()
            .then(res => {
                console.log('response data faves', res.data.favorites)
                setFaves(res.data.favorites)
            })
            .catch(console.error)
    }, [])

    if (!favorites) {
        return <p>Loading...</p>
    } else if (favorites.length === 0) {
        return <p>No favorites yet, go add some</p>
    }

    if (favorites.length > 0) {
        favorites.Jsx = favorites.map(favorites => (
            <li key={favorites.id}>
                <Link to={`./${favorites._id}`}>View {favorites.haveSeen}</Link>
            </li>
        ))
    }
    

    return ( 
        <>
            <h5> All faves</h5>
            <ul>
                <li>{favorites.Jsx}</li>
            </ul>
                <EditFave 
                favorites={favorites}
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


export default IndexFaves