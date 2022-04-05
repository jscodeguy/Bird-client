import React from 'react'

const FavoriteForm = ({favorite, handleSubmit, handleChange}) => (
<div>
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
</div>
)
export default FavoriteForm