import React from 'react'

const Student = (props) => {
  return (
    <div className='student'> 
        <p>Name: {props.name}</p>
        <p>age: {props.age}</p>
        <p>country: {props.country}</p>
        <p>Student: {props.isStudent ? "Yes ": "No"}</p>

    </div>
  )
}

export default Student