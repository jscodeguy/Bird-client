//imports
import React, { useState, useEffect } from 'react'
import { getAllFav } from '../../api/favorite'
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'

//sets the layout for the bootstrap card 
const cardContainerLayout = {
    display: 'flex',
    justifyContent: 'center',
    flexFlow: 'row wrap'
}
//this is the function that handles showing the favorites objects
const IndexFaves = (props) => {
    // sets the state for favorites
    const [favorites, setFaves] = useState(null)
    useEffect(() => {
        // this is the axios call to get all the favorites
        getAllFav()
        //promise chain sets the state to the specified object or returns error
            .then(res => {
                console.log('response data faves', res.data.favorites)
                setFaves(res.data.favorites)
            })
            .catch(console.error)
    }, [])
// if there is no object to show, display loading
    if (!favorites) {
        return <p>Loading...</p>
    } else if (favorites.length === 0) {
        return <p>No favorites yet, go add some</p>
    }
//if there is an object to show, pass the props to card and display all favorites
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
    
// return the favorites in their cards
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