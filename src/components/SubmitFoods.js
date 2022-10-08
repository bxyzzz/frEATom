import React from 'react'
import {useState} from 'react';
import './SubmitFood.css'
const SubmitFoods = () => {

const [name, setName] = useState('');

  function handleClick() {
     console.log('Button pressed.');
     <h2> Sent! </h2>
  }

  const handleSubmit = (event) => {
     alert("SUBMITTED NAME!" + this.state.value);
     event.preventDefault();
     alert("SUBMITTED NAME!" + this.state.value);
     <h2> TESPTU </h2>
     
  }



  return (
    <form onSubmit={handleSubmit}>
	<div className="form">
            <h1 className="title">Add Food</h1>
            <label> Gluten Free Food </label>
		<input
		 type="text"
		/>
            <label> Price </label>
            <input></input>
            <label> Other Food</label>
            <input></input>
            <label> Other Price </label>
            <input></input>
            <button type="submit"> Add Food </button>
    	</div>
   </form>
  )
}

export default SubmitFoods