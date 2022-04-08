import React, { useState, useEffect, useRef } from 'react'
import { getAllPictures } from '../../api/photos.js'
import { Link } from 'react-router-dom'
import { motion} from 'framer-motion';
import { Image, Button, Container } from 'react-bootstrap'

const IndexPictures = (props) => {
    const [pictures, setPictures] = useState(null)
    const [width, setWidth] = useState(0)
    const carousel = useRef();


    useEffect(() => {
      // setWidth(carousel.current.scrollWidth, carousel.offsetWidth)
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
                <Link to={`./${picture._id}`}>
                    <img key={picture.id}
                        className="pic-img bordertown"
                        src={picture.source}
                        alt="bird picture"/>
                </Link>
            </div>
        )
    )}


    return (
        
        <>
         <Container className="indexphoto">
        <h2 className="myPhoto">My Photo Gallery</h2>
        <motion.div ref={carousel} className="carousel"> 
            <motion.div drag="x" dragConstraints={{ right: 0}} className="inner-carousel">
              <motion.div className="item">
              {pictures.Jsx}
              </motion.div>
              </motion.div>
        </motion.div>
        </Container>      
        </>
    )
  }
  
  export default IndexPictures
  {/* <motion.h3 animate={{ x: 250}}>All the pictures</motion.h3> */}
  // d-flex flex-wrap img-fluid shadow-4