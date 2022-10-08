import React from 'react'
import Food from './Food'
import {data} from '../data/data'
import './Catalog.css'
const Catalog = () => {
  return (
    <div>
	<div2> Catalog </div2>
           <div className = "catalog">
               {data.map((food) => (
                   <Food name = {food.name} price={food.price} othername={food.othername} otherprice={food.otherprice}/>
               ))}
           </div>
    </div>
  )
}

export default Catalog