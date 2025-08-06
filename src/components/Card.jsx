import React from 'react'
import jogorprofile from '../assets/jogorprofile.jpg'
const Card = () => {
  return (
    <div className="Card">
     <img src={jogorprofile} alt="profile picture"></img>
    <h2>DevBen</h2>
    <p>Web Development and solving problems</p>
    </div>
  )
}

export default Card