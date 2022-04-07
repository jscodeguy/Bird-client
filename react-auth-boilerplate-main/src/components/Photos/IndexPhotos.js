import React, { useState, useEffect } from 'react'
import { getAllPictures } from '../../api/photos.js'
import { Link } from 'react-router-dom'




const IndexPictures = (props) => {
    const [pictures, setPictures] = useState(null)

    useEffect(() => {
        getAllPictures()
            .then(res => {
                console.log("response data pictures", res.data.pictures)
                setPictures(res.data.pictures)
            })
            .catch(console.error)
    }, [])

    if (!pictures) {
        return <p>loading...</p>
    } else if (pictures.length === 0) {
        return <p>no pictures yet, go add some</p>
    }

    

    if (pictures.length > 0) {
        pictures.Jsx = pictures.map(picture => (
       
        
            <li key={picture.id}>
            <Link to={`./${picture._id}`}><img src= {picture.source} height="100" /></Link>
            </li>
          

        ))
    
    
    }

    return (
        <>
            <h3>All the pictures</h3>
           
                {pictures.Jsx}
            
        </>
    )
}


export default IndexPictures

