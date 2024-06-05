import React from 'react'
import './style.css'
import {useNavigate} from 'react-router-dom'
export default function Admin() {
    const navigate = useNavigate()
   
    
    return (
        <div className='page-container'>
                <button onClick={()=> navigate('/')}>Go back</button>
        <h1 style={{color: 'black'}}>Admin Page</h1>
        </div>
    
    )
}