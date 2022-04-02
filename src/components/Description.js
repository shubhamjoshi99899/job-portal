import React from 'react'
import { Link } from 'react-router-dom'

const Description = () => {
  return (
    <div>
        <div className="description">
            <h5>Add a Job Description</h5>
            
            <h6>Description*</h6>
            <div className="icons">
                <p className='p-icons'>B</p>
                <p className='p-icons'> <i><u>I</u></i> </p>
                <p className='p-icons'> <u>U</u> </p>
                <p className='p-icons'>⁝☰ </p>
                <p className='p-icons'>⁝☰ </p>
                </div>
                <textarea name="Enter Text" placeholder='Enter Text' className='text' id="" cols="30" rows="10"></textarea>
                <h5>Add Skills</h5>
                <p>Add visible keyword to make your job more visible to the right candidates(Select upto 10)</p>
                <button className='btn-skills'>Add Skills +</button>
            
        </div>
      <Link to='/button'>  <button className='btn-submit'>Submit</button></Link>
    </div>
  )
}

export default Description