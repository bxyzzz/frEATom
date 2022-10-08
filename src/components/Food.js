import React from 'react'
import './Food.css'
const Food = ({name,price,othername,otherprice}) => {
  return (
    <div className = "Food">
        <h6>{name}</h6>
        <h5>${price}</h5>
        <h6>{othername}</h6>
        <h5>${otherprice}</h5>
        <h6>Difference</h6>
        <h4>${price-otherprice}</h4>
        <button>More Info</button>
    </div>
  )
}

export default Food