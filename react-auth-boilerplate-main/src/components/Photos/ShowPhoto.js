import React, {useState, useEffect} from 'react'
import { getOnePhoto } from '../../api/photos'
import { useParams } from 'react-router-dom'


const ShowPhotos = (props) => {

    const [photo, setPhotos] = useState(null)
    console.log('props in showphotos', props)
    const { id } = useParams()
    console.log('id in showphotos', id)
    // empty dependency array in useEffect to act like component did mount
    useEffect(() => {
        getOnePhoto(id)
            .then(res => setPhotos(res.data.photos))
            .catch(console.error)
    }, [id])



    return (
        <>
        <h5> show photos</h5>
    </>
)
}

export default ShowPhotos