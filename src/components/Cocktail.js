import React from 'react'
import {Link} from "react-router-dom"

const Cocktail = ({...item}) => {
  const {id,name, category, image} = item
  return (
    <div className='cocktail-drinks'>
        <img src={image} alt={name} />
        <h3>{name}</h3>
        <p>{category}</p>
        <Link to={`cocktail/${id}`}>Details</Link>
    </div>
  )
}

export default Cocktail