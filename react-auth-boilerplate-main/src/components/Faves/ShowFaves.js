import React, {useState, useEffect} from 'react'
import { getOneFave } from '../../api/faves'
import { useParams } from 'react-router-dom'


const ShowFaves = (props) => {

    const [fave, setFaves] = useState(null)
    console.log('props in showFaves', props)
    const { id } = useParams()
    console.log('id in showFaves', id)
    // empty dependency array in useEffect to act like component did mount
    useEffect(() => {
        getOneFave(id)
            .then(res => setFaves(res.data.faves))
            .catch(console.error)
    }, [id])



    return (
        <>
        <h5> show faves</h5>
    </>
)
}

export default ShowFaves