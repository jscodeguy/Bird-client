// Import dependencies
import React, { useState, useEffect } from "react"
import { getFun } from "../../api/fun"
import { Link } from "react-router-dom"
import { Card, Container, Button } from 'react-bootstrap'
import axios from "axios"

//sets the layout for the bootstrap card 
const cardContainerLayout = {
    display: 'flex',
    justifyContent: 'center',
    flexFlow: 'row wrap'
}

let funData

const IndexFun = () => {
    const [fun, setFun] = useState(null)

    useEffect(() => {
        getFun()
            .then(res => {
                funData = res.data.response
                // console.log("response data:", res.data.response[0].firstname)
                // console.log("fun Data:", funData)
                setFun(res.data.response)
            })
            .catch(console.error)
    }, [])

    console.log("funData:", funData)

    if (!funData) {
        return <p>Loading...</p>}

    if (funData.length > 0) {
        funData.Jsx = funData.map(funData => (
            <Card key={funData.id} style={{ width: "30% "}} className="m-2">
                <Card.Header className="card-info-header">
                    {funData.firstname} {funData.lastname}
                </Card.Header>
                <Card.Body>
                    <p className="card-data">{funData.affiliation}</p>
                    {funData.birth.date}
                </Card.Body>
            </Card>
        ))
    }

    return (
        <>
            <Container>
            <p className="pic-title">Fun Facts!</p>
            <div style={cardContainerLayout}>
                {funData.Jsx}
            </div>

            <Button onClick={() => getFun()} className="m-2" variant="info">
                Click for more fun!
            </Button>
            
            </Container>
        </>
    )
}

export default IndexFun
