import React, { useState, useEffect } from 'react'
import { getAllFav } from '../../api/favorite'
import { Link } from 'react-router-dom'


const IndexFaves = (props) => {
    const [favorites, setFaves] = useState(null)

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
        </>
    )

 

}


export default IndexFaves