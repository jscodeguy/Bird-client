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
            <Card key={funData.id} style={{ width: "50% "}} className="m-2">
                <Card.Header className="card-info-header">
                    {funData.firstname} {funData.lastname}
                </Card.Header>
                <Card.Body>
                    <p>Affiliation: <span className="card-info">{funData.affiliation}</span></p>
                    <p>Birth Date: <span className="card-info">{funData.birth.date}</span></p>
                    <p>Height: <span className="card-info">{funData.height.feets}'{funData.height.inches}"</span></p>
                    <p>Weight: <span className="card-info">{funData.weight.pounds}lbs</span></p>
                    <p>Joined the NBA in <span className="card-info">{funData.nba.start}</span></p>
                </Card.Body>
            </Card>
        ))
    }

    return (
        <>
            <Container className="fun-fact-wrap">
            <p className="fun-title">Fun Facts!</p>
            <div style={cardContainerLayout}>
                {funData.Jsx}
            </div>

            <Button onClick={() => getFun()} className="m-2" variant="success">
                Click for more fun!
            </Button>
            
            </Container>
        </>
    )
}

export default IndexFun
