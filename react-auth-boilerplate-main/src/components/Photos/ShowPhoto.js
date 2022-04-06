import React, {useState, useEffect} from 'react'
import { getOnePicture } from '../../api/photos.js'
import { useParams } from 'react-router-dom'


const ShowPictures = (props) => {

        const [picture, setPicture] = useState(null)
        console.log('props in showpictures', props)
        const { id } = useParams()
        console.log('id in showpicture', id)
        // empty dependency array in useEffect to act like component did mount
        useEffect(() => {
            getOnePicture(id)
                .then(res => setPicture(res.data.picture))
                .catch(console.error)
        }, [id])

        if (!picture) {
        return (
                <h1>Loading....</h1>
        )
    }



        return (
            <>
            <h5> show photos</h5>
            {picture.description}
            {picture.bird}
         
        </>
    )
    }
     export default ShowPictures