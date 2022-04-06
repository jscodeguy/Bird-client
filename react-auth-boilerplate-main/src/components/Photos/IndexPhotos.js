import React, { useState, useEffect } from 'react'
import { getAllPhotos } from '../../api/photos.js'
import { Link } from 'react-router-dom'


const IndexPhotos = (props) => {
    const [photos, setPhotos] = useState(null)
    useEffect(() => {
        getAllPhotos()
            .then(res => {
                console.log(res.data.photos)
                setPhotos(res.data.photos)
            })
            .catch(console.error)
    }, [])

    

    return ( 
        <>
            <h5> index photos</h5>
     

        </>
    )

 

}


export default IndexPhotos