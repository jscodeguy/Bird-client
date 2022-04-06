import React from 'react'
import { Form, Container, Button } from 'react-bootstrap'


const FavoriteForm = ({favorite, handleSubmit, handleChange}) => (

<Container className="justify-content-center">
            <Form onSubmit={handleSubmit}>
                <Form.Label>Have you seen it?</Form.Label>
                <Form.Check 
                    label='Yes I have'
                    name='haveSeen'
                    defaultChecked={favorite.haveSeen}
                    onChange={handleChange}
                />
                <Form.Label>What bird was it?</Form.Label>
                <Form.Control 
                    placeholder="What bird was it?"
                    value={favorite.bird}
                    name='bird'
                    onChange={handleChange}
                />
                <Button type='submit'>Submit</Button>
            </Form>
        </Container>





/* <div>
    <form onSubmit={handleSubmit}>
        <label>Have you seen it?</label>
            <checkbox 
                    label='Have you seen it?'
                    name='haveSeen'
                    defaultChecked={favorite.haveSeen}
                    onChange={handleChange}
            >
            </checkbox>
        <label>What bird was it?</label>
            <input 
                    placeholder="What bird was it?"
                    value={favorite.bird}
                    name='bird'
                    onChange={handleChange}>   
            </input>
                        
        <button type="submit" >Submit</button>
    </form>
</div> */
)
export default FavoriteForm