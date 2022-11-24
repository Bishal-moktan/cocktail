import React from 'react'
import {Link} from "react-router-dom"

const Error = () => {
  return (
    <div className='section'>
    <h3>Opps! no page found</h3>
    <Link to="/">back to home</Link>
    </div>
  )
}

export default Error