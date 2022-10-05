import React from 'react'
import './Food.css'
const Food = ({name,price,othername,otherprice}) => {
  return (
    <div className = "Food">
        <h3>{name}</h3>
        <h4>${price}</h4>
        <h3>{othername}</h3>
        <h4>${otherprice}</h4>
        <h4>Difference</h4>
        <h4>${price-otherprice}</h4>
        <button>More Info</button>
    </div>
  )
}

export default Food