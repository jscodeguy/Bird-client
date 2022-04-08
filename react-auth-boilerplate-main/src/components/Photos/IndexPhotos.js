import React, { useState, useEffect } from 'react'
import { getAllPictures } from '../../api/photos.js'
import { Link } from "react-router-dom"
import { Container } from "react-bootstrap"

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
            <div className="pic-wrap">
                <img key={picture.id}
                    className="pic-img bordertown"
                    src={picture.source}
                    alt="bird picture"
                />
            </div>
        )
    )}

    return (
        
        <>
        <Container>
            <p className="section-title">All the pictures</p>
            <div className="pic-section-wrap">
                    {pictures.Jsx}
            </div>

        </Container>
        </>
    )
}

export default IndexPictures
