import React, { useState, useEffect } from 'react'
import { getAllFaves } from '../../api/faves'
import { Link } from 'react-router-dom'


const IndexFaves = (props) => {
    const [faves, setFaves] = useState(null)
    useEffect(() => {
        getAllFaves()
            .then(res => {
                console.log(res.data.faves)
                setFaves(res.data.faves)
            })
            .catch(console.error)
    }, [])

    

    return ( 
        <>
            <h5> index faves</h5>
            <small>Type: {pet.type}</small><br/>

        </>
    )

 

}


export default IndexFaves