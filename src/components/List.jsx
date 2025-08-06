import React from 'react'

const List = () => {
    const fruits = ['Apple','Orange','Mango','Banana']
    const renderFruits = fruits.map((fruit)=> <li>{fruit}</li>)
  return (
    <ol>{renderFruits}</ol>
  )
}

export default List