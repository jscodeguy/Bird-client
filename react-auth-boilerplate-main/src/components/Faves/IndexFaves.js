import React, { useState, useEffect } from 'react'
import { getAllFav } from '../../api/favorite'
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'

// I'm going to declare a style object
// this will be used to corral my cards
// we can use basic CSS, but we have to use JS syntax
const cardContainerLayout = {
    display: 'flex',
    justifyContent: 'center',
    flexFlow: 'row wrap'
}

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
            <Card key={favorites.id} style={{ width: '30%' }} className="m-2">
                <Card.Header>{favorites.bird}</Card.Header>
                <Card.Body>
                    <Link to={`/favorites/${favorites._id}`}>View {favorites.haveSeen}</Link>
                </Card.Body>
            </Card>
        ))
    }
    

    return ( 
        <>

            <h5> All favorites</h5>
            <div style={cardContainerLayout}>
                {favorites.Jsx}
            </div>

        </>
    )

 

}


export default IndexFaves