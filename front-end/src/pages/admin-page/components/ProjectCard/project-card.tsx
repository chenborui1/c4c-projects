import React from 'react'
import './style.css'
import { GoDotFill } from "react-icons/go";
import {  motion } from "framer-motion"
export default function ProjectCard({project}) {
    
    const isActive = project.active
    
    return (<motion.div   initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.05 }}
        viewport={{ once: true }}
        transition={{
          type: "spring",
          duration: 1.5,
          opacity: { duration: 2 },
        }} className='project-card'>
         <div style={{ textAlign: 'right' }}>
      <span style={{ display: 'inline-block', verticalAlign: 'middle' }}>Active:</span>
      <span style={{ display: 'inline-block', verticalAlign: 'middle' }}>
        <GoDotFill color={isActive? 'green': 'red'} size={30} />
      </span>
    </div>
        <h1>{project.title}</h1>

       <div className='img-container'><img src={project.image_url} alt="project_image" /></div> 
        <div className="project-buttons">
            <motion.button whileHover={{scale : 1.2, fontWeight: 'bold'}} className='edit'>Edit</motion.button>
            <motion.button  whileHover={{scale : 1.2, fontWeight: 'bold'}}className='delete'>Delete</motion.button>
        </div>
        </motion.div>
   
)
}