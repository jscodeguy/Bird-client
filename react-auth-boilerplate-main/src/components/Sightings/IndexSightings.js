import React, { useState, useEffect } from 'react'
import { getAllSightings } from '../../api/sightings'
import { Link } from 'react-router-dom'


const IndexSightings = (props) => {
    const [sightings, setSightings] = useState(null)
    useEffect(() => {
        getAllSightings()
            .then(res => {
                console.log(res.data.sightings)
                setSightings(res.data.sightings)
            })
            .catch(console.error)
    }, [])

    

    return ( 
        <>
            <h5> index sightings</h5>

        </>
    )

 

}


export default IndexSightings